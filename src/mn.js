const puppeteer = require('puppeteer');
const { mn } = require('./config/default');
const srcToImg = require('./helper/srcToimg');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://image.baidu.com/');
    console.log('go to https://image.baidu.com/');
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    console.log('reset viewport');
    const kw = page.$('#kw');
    console.log(kw);
    
    // await page.focus('#kw');
    // await page.keyboard.sendCharacter('狗');
    // const from = await page.$('#s_fm');
    // console.log(from);
    // await page.click('#su');
    // console.log('go to search list');
    // page.on('load',async () => {
    //     console.log('page loading done,start feach');
    //     const srcs = await page.evaluate(() => {
    //         const images = document.querySelectorAll('img.main_img');
    //         return Array.prototype.map.call(images, img => img.src);
    //     });

    //     srcs.forEach(src => {
    //         srcToImg(src, dir);
    //     });
    //     await browser.close();
    // });
})();