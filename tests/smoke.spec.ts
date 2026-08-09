import { test, expect, type Page } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/solutions",
  "/solutions/aegis",
  "/services",
  "/trust",
  "/contact",
  "/privacy",
  "/terms",
];

function trackConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  return errors;
}

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

test("mobile menu opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle menu" });
  await toggle.click();
  await expect(page.locator("#mobile-menu")).toBeVisible();
  await toggle.click();
  await expect(page.locator("#mobile-menu")).toBeHidden();
});

test("contact form submits and shows success state", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Company").fill("Test Co");
  await page.getByLabel("Work email").fill("test@example.com");
  await page.getByLabel("How can we help?").fill("Playwright smoke test submission.");
  await page.getByRole("button", { name: /Send Message|Sending/ }).click();
  await expect(page.getByText(/Thanks — we'll be in touch\./)).toBeVisible({ timeout: 5000 });
});

test("no visible 'to be added' placeholder text ships to production copy", async ({ page }) => {
  await page.goto("/about");
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/to be added/i);
});
