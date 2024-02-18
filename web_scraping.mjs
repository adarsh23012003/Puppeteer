// Images and link scraping....
import puppeteer from "puppeteer";

async function run() {
  // launch the browser instance using puppeteer
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage(); //creating a new page

  await page.goto("https://www.google.com/"); //navigating to google

  // Extracting the images of the page
  const images = await page.$$eval("img", (elements) =>
    elements.map((image) => ({ src: image.src, alt: image.alt }))
  ); //getting the All images in the page

  //   Extracting the links
  const links = await page.$$eval("a", (elements) =>
    elements.map((link) => ({ link: link.href, text: link.textContent }))
  );
  const imageCount = images.length;
  const linkCount = links.length;

  //   all output
  const output = JSON.stringify({ images, links, imageCount, linkCount });
  console.log(output);
  console.log(`Total number of images: ${imageCount}`);
  console.log(`Total number of links: ${linkCount}`);
  await browser.close(); //closing the browser
}

run();
