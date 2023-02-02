const { executablePath } = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

/* dá loop sobre o trabalho do editor segundo o a quatidade de artigos de length de array em json.*/

async function looping() {
  const browser = await puppeteer.launch({ headless: false, executablePath: executablePath(), });
  console.log('Running tests..');
  const page = await browser.newPage();

  await page.goto('https://www.google.com/', { waitUntil: 'networkidle0' })
  await page.waitForTimeout(1000)
  await browser.close();

}

looping();
looping();
looping();


