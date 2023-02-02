const { executablePath } = require('puppeteer')
const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


puppeteer.launch({ headless: false, executablePath: executablePath(), }).then(async browser => {
  const page = await browser.newPage()

  console.log('Running tests..')

  const urls = [
    "https://www.google.com/",
    "https://www.saucedemo.com/",
    "https://www.youtube.com/"
  ];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(url)
    await page.goto(`${url}`);
    await page.waitForTimeout(2000)
  }

})