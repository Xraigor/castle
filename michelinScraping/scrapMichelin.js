const michelin = require('./michelin');
const fs = require('fs');

(async () => {
    let pages = [];
    for(let i = 1; i < 36; i++ ){
    let urlMichelin = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-' + 35;
    let page = await michelin.getMichelin(urlMichelin);
    pages.push(page);
    await michelin.end();
    console.log(pages);
    fs.writeFileSync(`./final.json`,JSON.stringify(pages,null, '\t'), encodeURI = 'utf-8', flag = 'a');
    };
    debugger;
})()