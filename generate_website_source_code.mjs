// Generate website source code
import Puppeteer from "puppeteer";
import fs from "fs";

async function run(url, fileName) {
  try {
    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    const sourceCode = await page.content();
    fs.writeFileSync(fileName, sourceCode, "utf-8");
    await browser.close();
    console.log("Source code generated successfully.");
  } catch (error) {
    console.log("An error occurred while generating the source code." + error);
  }
}

run("https://monumaurya.com/", "monumaurya.html");
