import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const outDir = path.resolve("client/public/screenshots");
fs.mkdirSync(outDir, { recursive: true });

const sites = [
  { slug: "luigis-breakfast",      url: "https://luigisbreakfast.vercel.app/" },
  { slug: "pancake-haus",          url: "https://pancakehaus.vercel.app/" },
  { slug: "walnut-street-coffee",  url: "https://walnutstreetcoffeepreview.vercel.app/" },
  { slug: "medina-painting",       url: "https://medina-painting-main.vercel.app/" },
  { slug: "lgm-landscaping",       url: "https://lgm-landscaping.vercel.app/" },
  { slug: "island-hawaiian-bbq",   url: "https://island-hawaiian-bbq-web.vercel.app/" },
  { slug: "plate-of-africa",       url: "https://official-plate-of-africa.vercel.app/" },
  { slug: "forevergreen",          url: "https://forevergreen-five.vercel.app/" },
];

const browser = await chromium.launch();

for (const site of sites) {
  console.log(`Capturing ${site.slug}…`);

  // Desktop
  const desktop = await browser.newPage();
  await desktop.setViewportSize({ width: 1280, height: 800 });
  await desktop.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
  await desktop.screenshot({ path: path.join(outDir, `${site.slug}-desktop.jpg`), type: "jpeg", quality: 90 });
  await desktop.close();

  // Mobile
  const mobile = await browser.newPage();
  await mobile.setViewportSize({ width: 390, height: 844 });
  await mobile.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
  await mobile.screenshot({ path: path.join(outDir, `${site.slug}-mobile.jpg`), type: "jpeg", quality: 90 });
  await mobile.close();

  // Full page
  const full = await browser.newPage();
  await full.setViewportSize({ width: 1280, height: 800 });
  await full.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
  await full.screenshot({ path: path.join(outDir, `${site.slug}-full.jpg`), type: "jpeg", quality: 90, fullPage: true });
  await full.close();

  console.log(`  ✓ ${site.slug}`);
}

await browser.close();
console.log("\nAll screenshots saved to client/public/screenshots/");
