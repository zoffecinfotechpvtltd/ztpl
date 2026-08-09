import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/about",
  "/solutions",
  "/solutions/aegis",
  "/solutions/argus",
  "/solutions/exploitsense",
  "/services",
  "/trust",
  "/contact",
];

for (const route of routes) {
  test(`${route} has no serious/critical a11y violations`, async ({ page }) => {
    // Skip the one-time entrance preloader — it's a decorative, mid-transition
    // animation, not settled content; scanning it mid-fade produces transient
    // contrast false-positives unrelated to the page's real accessibility.
    await page.addInitScript(() => sessionStorage.setItem("ztpl-preloaded", "1"));
    await page.goto(route, { waitUntil: "networkidle" });
    // Let entrance animations (Framer/GSAP) settle before scanning — axe
    // reads live computed styles, so a mid-transition frame can register a
    // transient contrast reading that has nothing to do with settled state.
    await page.waitForTimeout(600);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    const serious = results.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );

    if (serious.length > 0) {
      const summary = serious
        .map((v) => `${v.id} (${v.impact}): ${v.help} — ${v.nodes.length} node(s)`)
        .join("\n");
      throw new Error(`a11y violations on ${route}:\n${summary}`);
    }
    expect(serious).toEqual([]);
  });
}
