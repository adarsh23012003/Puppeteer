// SEO data scraping...
import puppeteer from "puppeteer";
import fs from "fs";

async function run() {
  // launch the browser instance using puppeteer
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage(); //creating a new page

  // await page.goto("http://monumaurya.com/"); //navigating to monumaurya.com
  await page.goto("https://yahoo.com"); //navigating to monumaurya.com

  // SEO related Data
  const title = await page.title();
  const metaDescription = await page.$eval(
    'meta[name="description"]',
    (element) => element.textContent
  );
  const metaKeywords = await page.$eval(
    'meta[name="keywords"]',
    (element) => element.textContent
  );

  // Extracting the images of the page
  const images = await page.$$eval("img", (elements) =>
    elements.map((image) => ({ src: image.src, alt: image.alt }))
  );

  //   Extracting the links
  const links = await page.$$eval("a", (elements) =>
    elements.map((link) => ({ link: link.href, text: link.textContent }))
  );

  const outputJSON = JSON.stringify({
    title,
    metaDescription,
    metaKeywords,
    images,
    links,
  });
  //   Write the output JSON to a file
  fs.writeFileSync("output.json", outputJSON);
  await browser.close(); //closing the browser
}

run();
