const { executablePath } = require('puppeteer')
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal

puppeteer.launch({ headless: false, executablePath: executablePath(), }).then(async browser => {
    console.log('Running tests..')
    const page = await browser.newPage()


    let currentURL = 'http://rblc.com.br/index.php/rblc/submission/wizard';
    await page.goto(currentURL, { waitUntil: 'networkidle0' })
    await page.waitForTimeout(3000)

    await page.type('#username', 'revista');
    await page.type('#password', 'r3v157aMvssx');

    await page.click('.submit');

    page
        .waitForSelector("#sectionId")
        .then(() => page.select("#sectionId", '1'));

    // await page.select("#sectionId", '1');

    await page.$$eval("input[type='checkbox']", checks => checks.forEach(c => c.checked = true));

    await page.click(".submitFormButton")
})
