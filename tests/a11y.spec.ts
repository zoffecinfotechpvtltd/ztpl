import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/about",
  "/solutions",
  "/solutions/aegis",
  "/solutions/argus",
  "/solutions/wardloom",
  "/services",
  "/trust",
  "/contact",
];

for (const route of routes) {
  test(`${route} has no serious/critical a11y violations`, async ({ page }) => {
    await page.goto(route);
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
