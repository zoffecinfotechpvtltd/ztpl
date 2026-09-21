import { test, expect, type Page } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/solutions",
  "/solutions/aegis",
  "/solutions/argus",
  "/solutions/exploitsense",
  "/contact",
  "/privacy",
  "/terms",
  "/style-guide",
];

function trackConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  return errors;
}

// Skip the one-time entrance preloader for all tests in this file - it's a
// decorative animation, not something the functional smoke suite should wait through.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem("ztpl-preloaded", "1"));
});

for (const route of routes) {
  test(`${route || "/"} loads with no console errors`, async ({ page }) => {
    const errors = trackConsoleErrors(page);
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    expect(errors, `console/page errors on ${route}: ${errors.join("; ")}`).toEqual([]);
  });
}

test("404 route renders not-found page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
});

test("primary nav links resolve to their pages", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });
  const links = nav.getByRole("link");
  const count = await links.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute("href");
    expect(href).toBeTruthy();
  }
});

test("mobile menu opens, navigates, and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Toggle menu" }).click();
  await expect(page.locator("#mobile-menu")).toBeVisible();
  await page.getByRole("button", { name: "Close menu" }).click();
  await expect(page.locator("#mobile-menu")).toBeHidden();
  await page.getByRole("button", { name: "Toggle menu" }).click();
  await page.locator("#mobile-menu").getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator("#mobile-menu")).toBeHidden();
});

test("contact form submits and shows success state", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Company").fill("Test Co");
  await page.getByLabel("Work email").fill("test@example.com");
  await page.getByLabel("How can we help?").fill("Playwright smoke test submission.");
  await page.getByRole("button", { name: /Send Message|Sending/ }).click();
  await expect(page.getByText(/Thanks - we'll be in touch\./)).toBeVisible({ timeout: 5000 });
});

test("no visible 'to be added' placeholder text ships to production copy", async ({ page }) => {
  await page.goto("/about");
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/to be added/i);
});

test("Argus and ExploitSense show 'Coming soon' with early-access links, never a dead launch link", async ({ page }) => {
  await page.goto("/solutions");
  await expect(page.getByText("Coming soon").first()).toBeVisible();
  const body = await page.locator("body").innerHTML();
  expect(body).not.toContain("argus.ztplsolutions.com");
  expect(body).not.toContain("exploitsense.ztplsolutions.com");
  await expect(page.getByRole("link", { name: /Get early access/ })).toHaveCount(2);
  await expect(page.getByRole("link", { name: /Launch Platform/ })).toHaveCount(1); // Aegis only
});

test("early-access link pre-fills the contact message", async ({ page }) => {
  await page.goto("/contact?interest=argus");
  await expect(page.getByLabel("How can we help?")).toHaveValue(/early access to Argus/);
});
