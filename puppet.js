    const puppeteer = require('puppeteer');
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://resume.github.io/?NeonGamerBot-QK');
        await page.screenshot({path: 'example.png'});
        await page.pdf({ path: "example.pdf" })
        await browser.close();
      })();