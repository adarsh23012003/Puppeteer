import Puppeteer from "puppeteer";

async function run(url, searchQuery) {
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.focus('input[name="p"]');
  await page.keyboard.type(searchQuery);
  await page.keyboard.press("Enter");
  await page.waitForNavigation({ waitUntil: "networkidle2" });
  await page.screenshot({ path: "query.png" });
  await browser.close();
  console.log("Form submitted successfully.");
}

const url = "https://www.yahoo.com/";
const searchQuery = "puppeteer";

run(url, searchQuery);
