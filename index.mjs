// Basic Web Scraping....
import puppeteer from "puppeteer";

async function run() {
  // launch the browser instance using puppeteer
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage(); //creating a new page

  await page.goto("https://www.yahoo.com/"); //going to google

  const title = await page.title();
  console.log(title);

  const heading = await page.$eval("h1", (element) => {
    element.textContent;
  });
  console.log(heading); //heading

  await page.screenshot({ path: "screenshot.png" }); //taking a screenshot

  await page.pdf({ path: "pdf.pdf", format: "a4" }); //taking a pdf

  await browser.close(); //closing the browser
}

run();
