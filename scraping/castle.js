const puppeteer = require('puppeteer');
const Timeout = require('await-timeout');

let browserCastle = [];
let pageCastle = [];
/* Constants */
const BASE_URL = 'https://www.relaischateaux.com/us/destinations/europe/france/page=';



let getRelai = async (html) => {
     console.log(`Scraping the ${html}`);
     browserCastle = await puppeteer.launch({
         headless: false,
     })
     pageCastle = await browserCastle.newPage();
     
    //  await pageCastle.setRequestInterception(true);
    //  pageCastle.on('request', (request) => {
    //    if(['image', 'stylesheet', 'font'].includes(request.resourceType())) {
    //      request.abort();
    //    } else {
    //      request.continue();
    //    }
    //  })
     
     await pageCastle.goto(html);
     await pageCastle.waitFor('h3.mainTitle3 a');
     let details = await pageCastle.evaluate(() => {
         let whole = [];
         let relaisArray = document.querySelectorAll('h3.mainTitle3 a');
         for(let relaisElement of relaisArray){
             let hotel = relaisElement.innerText;
             let href = relaisElement.getAttribute('href');
             whole.push({
                 hotel,
                 href
             })
         }
         return whole;
     
     });
     await pageCastle.close();
     for( let detail of details){
	let pageCastleResto= await browserCastle.newpageCastle();
     
     await pageCastleResto.goto(detail.href);
     // await pageCastleResto.waitFor('div.jsSecondNav');
     let timer = new Timeout();
     timer.set(5000).then(async() =>{
         console.log('*******Reloading******')
         await pageCastleResto.goto(detail.href);
         await pageCastleResto.waitFor(5000);
         
     }).continue;
     await pageCastleResto.waitFor(2000);
     await pageCastleResto.click('body > div.jsSecondNav.will-stick > ul > li:nth-child(2) > a');
     await pageCastleResto.waitFor(2000);
     let resto = await pageCastleResto.evaluate(() => {
         let restos = [];
         let resto1 = document.querySelectorAll('ul.jsSecondNavSub li');
         if(resto1.length != 0){
             for(let restoElement of resto1){
                 let ele2 = restoElement.innerText.trim();
                 restos.push(ele2);
             };
         } else {
             let ele1 = document.querySelectorAll('div.tabRestaurant > div.grid h3.mainTitle2');
             if(ele1.length != 0){
                 let ele3 = ele1[0].innerText;
                 restos.push(ele3);
             } else {
                 let eleR = document.querySelector('div.headings > h1.mainTitle2').innerText;
                 restos.push(eleR);
             }
         }
         return restos;
     })
     detail.resto = resto;
     console.log(detail.resto);
     timer.clear();
	await pageCastleResto.close();
 };
 console.log(details);
 return details;
 };
 let closeBrowser = async() => {
     console.log('Stopping the scraper...');
     await browserCastle.close();
 }

const fs = require('fs');

(async () => {

    
    let castleData = [];
    for(let i = 1; i <= 8;i++){
    let url = BASE_URL + i;
    let pageCastle = await getRelai(url);
    castleData.push(pageCastle);
    // debugger;
    await closeBrowser();
    debugger;
    fs.writeFileSync('./data8.json',JSON.stringify(castleData,null,"\t"), encodeURI = 'utf-8', flag = 'a');
    debugger;
    console.log(castleData);
    }
})();