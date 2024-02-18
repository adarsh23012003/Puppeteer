import Puppeteer from "puppeteer";

async function run(url, output) {
  try {
    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.pdf({ path: output, format: "a4" });
    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

run("https://monumaurya.com/", "output.pdf");
