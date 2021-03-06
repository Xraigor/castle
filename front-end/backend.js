//var fs= require('fs');
//
//var fileName="XRegExp.json";
//      console.log("读取json文件："+fileName);
//var fileContent=fs.readFileSync(fileName);
//const database = JSON.parse(fileContent);
//console.log(database);
const database = [{
                     "_id" : "5c6b00e8a34d3647c02ad06a",
                     "name" : "Le Royal",
                     "rating" : false,
                     "price" : "Prix - De 62 € à 180 €",
                     "href" : "https://restaurant.michelin.fr/4033846/le-royal-champillon",
                     "minPrice" : "62",
                     "maxPrice" : "180"
                 },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad051",
                         "name" : "La Table de l'Ours",
                         "rating" : "5",
                         "price" : "Prix - De 95 € à 160 €",
                         "href" : "https://restaurant.michelin.fr/2dpd99z/la-table-de-lours-val-disere",
                         "minPrice" : "95",
                         "maxPrice" : "160"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad055",
                         "name" : "La Table d'Uzès",
                         "rating" : "4.9",
                         "price" : "Prix - De 34 € à 86 €",
                         "href" : "https://restaurant.michelin.fr/1ss80t3t/la-table-duzes-uzes",
                         "minPrice" : "34",
                         "maxPrice" : "86"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad045",
                         "name" : "Le Jardin de Benjamin",
                         "rating" : "4.9",
                         "price" : "Prix - De 55 € à 125 €",
                         "href" : "https://restaurant.michelin.fr/xhr5bt96/le-jardin-de-benjamin-lorgues",
                         "minPrice" : "55",
                         "maxPrice" : "125"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad04a",
                         "name" : "Château de la Treyne",
                         "rating" : "4.8",
                         "price" : "Prix - De 50 € à 146 €",
                         "href" : "https://restaurant.michelin.fr/2c38ubh/chateau-de-la-treyne-lacave",
                         "minPrice" : "50",
                         "maxPrice" : "146"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad041",
                         "name" : "Le Brittany",
                         "rating" : "4.8",
                         "price" : "Prix - De 58 € à 68 €",
                         "href" : "https://restaurant.michelin.fr/2cnbixn/le-brittany-roscoff",
                         "minPrice" : "58",
                         "maxPrice" : "68"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad03d",
                         "name" : "L'Auberge des Glazicks",
                         "rating" : "4.8",
                         "price" : "Prix - De 60 € à 225 €",
                         "href" : "https://restaurant.michelin.fr/2akhln2/lauberge-des-glazicks-plomodiern",
                         "minPrice" : "60",
                         "maxPrice" : "225"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad046",
                         "name" : "L'Orangerie",
                         "rating" : "4.8",
                         "price" : "Prix - De 75 € à 125 €",
                         "href" : "https://restaurant.michelin.fr/2851286/lorangerie-paris-08",
                         "minPrice" : "75",
                         "maxPrice" : "125"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad06b",
                         "name" : "Les Terrasses de Lyon",
                         "rating" : "4.8",
                         "price" : "Prix - De 76 € à 120 €",
                         "href" : "https://restaurant.michelin.fr/29t2ib7/les-terrasses-de-lyon-lyon-05",
                         "minPrice" : "76",
                         "maxPrice" : "120"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad047",
                         "name" : "La Chèvre d'Or",
                         "rating" : "4.8",
                         "price" : "Prix - De 85 € à 300 €",
                         "href" : "https://restaurant.michelin.fr/2bwkh5l/la-chevre-dor-eze",
                         "minPrice" : "85",
                         "maxPrice" : "300"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad043",
                         "name" : "Le Cap",
                         "rating" : "4.7",
                         "price" : "Prix - De 154 € à 242 €",
                         "href" : "https://restaurant.michelin.fr/2cqc8op/le-cap-saint-jean-cap-ferrat",
                         "minPrice" : "154",
                         "maxPrice" : "242"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad066",
                         "name" : "Pierre Gagnaire",
                         "rating" : "4.7",
                         "price" : "Prix - De 155 € à 350 €",
                         "href" : "https://restaurant.michelin.fr/2abhfav/pierre-gagnaire-paris-08",
                         "minPrice" : "155",
                         "maxPrice" : "350"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad04c",
                         "name" : "Domaine de Rochevilaine",
                         "rating" : "4.7",
                         "price" : "Prix - De 44 € à 110 €",
                         "href" : "https://restaurant.michelin.fr/2bij0t1/domaine-de-rochevilaine-billiers",
                         "minPrice" : "44",
                         "maxPrice" : "110"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad03c",
                         "name" : "Au Crocodile",
                         "rating" : "4.7",
                         "price" : "Prix - De 48 € à 148 €",
                         "href" : "https://restaurant.michelin.fr/kl196wcf/au-crocodile-strasbourg",
                         "minPrice" : "48",
                         "maxPrice" : "148"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad056",
                         "name" : "La Signoria",
                         "rating" : "4.7",
                         "price" : "Prix - De 50 € à 95 €",
                         "href" : "https://restaurant.michelin.fr/2bs90l6/la-signoria-calvi",
                         "minPrice" : "50",
                         "maxPrice" : "95"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad062",
                         "name" : "L'Arnsbourg",
                         "rating" : "4.7",
                         "price" : "Prix - De 55 € à 133 €",
                         "href" : "https://restaurant.michelin.fr/yjkdc8kf/larnsbourg-baerenthal",
                         "minPrice" : "55",
                         "maxPrice" : "133"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad044",
                         "name" : "1217",
                         "rating" : "4.7",
                         "price" : "Prix - De 65 € à 140 €",
                         "href" : "https://restaurant.michelin.fr/2bfuk4c/1217-bagnols",
                         "minPrice" : "65",
                         "maxPrice" : "140"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad060",
                         "name" : "Le Coquillage",
                         "rating" : "4.7",
                         "price" : "Prix - De 72 € à 139 €",
                         "href" : "https://restaurant.michelin.fr/291q1xd/le-coquillage-saint-meloir-des-ondes",
                         "minPrice" : "72",
                         "maxPrice" : "139"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad06c",
                         "name" : "Villa René Lalique",
                         "rating" : "4.7",
                         "price" : "Prix - De 78 € à 240 €",
                         "href" : "https://restaurant.michelin.fr/t645yf86/villa-rene-lalique-wingen-sur-moder",
                         "minPrice" : "78",
                         "maxPrice" : "240"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad058",
                         "name" : "Le Cloître",
                         "rating" : "4.7",
                         "price" : "Prix - De 85 € à 155 €",
                         "href" : "https://restaurant.michelin.fr/2ep5ghq/le-cloitre-mane",
                         "minPrice" : "85",
                         "maxPrice" : "155"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad04d",
                         "name" : "Flocons de Sel",
                         "rating" : "4.7",
                         "price" : "Prix - De 90 € à 168 €",
                         "href" : "https://restaurant.michelin.fr/29wzk9t/flocons-de-sel-megeve",
                         "minPrice" : "90",
                         "maxPrice" : "168"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad05d",
                         "name" : "Le Taillevent",
                         "rating" : "4.7",
                         "price" : "Prix - De 90 € à 198 €",
                         "href" : "https://restaurant.michelin.fr/2ab9sgk/le-taillevent-paris-08",
                         "minPrice" : "90",
                         "maxPrice" : "198"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad059",
                         "name" : "Le Grand Véfour",
                         "rating" : "4.6",
                         "price" : "Prix - De 115 € à 315 €",
                         "href" : "https://restaurant.michelin.fr/2a7edmf/le-grand-vefour-paris-01",
                         "minPrice" : "115",
                         "maxPrice" : "315"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad05c",
                         "name" : "Le Pré Catelan",
                         "rating" : "4.6",
                         "price" : "Prix - De 140 € à 310 €",
                         "href" : "https://restaurant.michelin.fr/2af46v7/le-pre-catelan-paris-16",
                         "minPrice" : "140",
                         "maxPrice" : "310"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad05b",
                         "name" : "Le Prieuré",
                         "rating" : "4.6",
                         "price" : "Prix - De 36 € à 120 €",
                         "href" : "https://restaurant.michelin.fr/2d2wqpd/le-prieure-villeneuve-les-avignon",
                         "minPrice" : "36",
                         "maxPrice" : "120"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad04e",
                         "name" : "Albert 1er",
                         "rating" : "4.6",
                         "price" : "Prix - De 49 € à 156 €",
                         "href" : "https://restaurant.michelin.fr/2bnvpvu/albert-1er-chamonix-mont-blanc",
                         "minPrice" : "49",
                         "maxPrice" : "156"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad057",
                         "name" : "La Table d'Olivier Nasti",
                         "rating" : "4.6",
                         "price" : "Prix - De 85 € à 205 €",
                         "href" : "https://restaurant.michelin.fr/2c30770n/la-table-dolivier-nasti-kaysersberg-vignoble",
                         "minPrice" : "85",
                         "maxPrice" : "205"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad049",
                         "name" : "La Palmeraie",
                         "rating" : "4.5",
                         "price" : "Prix - De 28 € à 65 €",
                         "href" : "https://restaurant.michelin.fr/2btuhm0/la-palmeraie-la-croix-valmer",
                         "minPrice" : "28",
                         "maxPrice" : "65"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad052",
                         "name" : "En Marge",
                         "rating" : "4.5",
                         "price" : "Prix - De 34 € à 145 €",
                         "href" : "https://restaurant.michelin.fr/q8lel2a/en-marge-aureville",
                         "minPrice" : "34",
                         "maxPrice" : "145"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad05e",
                         "name" : "Le Vieux Logis",
                         "rating" : "4.5",
                         "price" : "Prix - De 50 € à 120 €",
                         "href" : "https://restaurant.michelin.fr/2cz3yz2/le-vieux-logis-tremolat",
                         "minPrice" : "50",
                         "maxPrice" : "120"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad067",
                         "name" : "Relais de la Poste",
                         "rating" : "4.5",
                         "price" : "Prix - De 59 € à 127 €",
                         "href" : "https://restaurant.michelin.fr/2c6dfrz/relais-de-la-poste-magescq",
                         "minPrice" : "59",
                         "maxPrice" : "127"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad03f",
                         "name" : "La Table du Connétable",
                         "rating" : "4.5",
                         "price" : "Prix - De 67 € à 161 €",
                         "href" : "https://restaurant.michelin.fr/jgutdlg/la-table-du-connetable-chantilly",
                         "minPrice" : "67",
                         "maxPrice" : "161"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad068",
                         "name" : "Christopher Coutanceau",
                         "rating" : "4.5",
                         "price" : "Prix - De 68 € à 165 €",
                         "href" : "https://restaurant.michelin.fr/2apfrj5/christopher-coutanceau-la-rochelle",
                         "minPrice" : "68",
                         "maxPrice" : "165"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad063",
                         "name" : "Maison Lameloise",
                         "rating" : "4.5",
                         "price" : "Prix - De 82 € à 215 €",
                         "href" : "https://restaurant.michelin.fr/2bnef6m/maison-lameloise-chagny",
                         "minPrice" : "82",
                         "maxPrice" : "215"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad064",
                         "name" : "Maison Rostang",
                         "rating" : "4.5",
                         "price" : "Prix - De 90 € à 235 €",
                         "href" : "https://restaurant.michelin.fr/2afdah0/maison-rostang-paris-17",
                         "minPrice" : "90",
                         "maxPrice" : "235"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad053",
                         "name" : "La Bonne Étape",
                         "rating" : "4.4",
                         "price" : "Prix - De 35 € à 75 €",
                         "href" : "https://restaurant.michelin.fr/2bp5jf6/la-bonne-etape-chateau-arnoux",
                         "minPrice" : "35",
                         "maxPrice" : "75"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad03b",
                         "name" : "Anne de Bretagne",
                         "rating" : "4.4",
                         "price" : "Prix - De 39 € à 77 €",
                         "href" : "https://restaurant.michelin.fr/2ciults/anne-de-bretagne-la-plaine-sur-mer",
                         "minPrice" : "39",
                         "maxPrice" : "77"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad069",
                         "name" : "Greuze",
                         "rating" : "4.4",
                         "price" : "Prix - De 42 € à 135 €",
                         "href" : "https://restaurant.michelin.fr/3uonmfw/greuze-tournus",
                         "minPrice" : "42",
                         "maxPrice" : "135"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad040",
                         "name" : "L'Oustau de Baumanière",
                         "rating" : "4.3",
                         "price" : "Prix - De 100 € à 220 €",
                         "href" : "https://restaurant.michelin.fr/28tn79w/loustau-de-baumaniere-les-baux-de-provence",
                         "minPrice" : "100",
                         "maxPrice" : "220"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad03e",
                         "name" : "Auberge des Templiers",
                         "rating" : "4.3",
                         "price" : "Prix - De 70 € à 160 €",
                         "href" : "https://restaurant.michelin.fr/2bicgcl/auberge-des-templiers-les-bezards",
                         "minPrice" : "70",
                         "maxPrice" : "160"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad05a",
                         "name" : "Le Petit Nice",
                         "rating" : "4.2",
                         "price" : "Prix - De 110 € à 380 €",
                         "href" : "https://restaurant.michelin.fr/2c76rmd/le-petit-nice-marseille-07",
                         "minPrice" : "110",
                         "maxPrice" : "380"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad050",
                         "name" : "Le Chabichou",
                         "rating" : "4.2",
                         "price" : "Prix - De 75 € à 275 €",
                         "href" : "https://restaurant.michelin.fr/2btao3c/le-chabichou-courchevel-1850",
                         "minPrice" : "75",
                         "maxPrice" : "275"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad061",
                         "name" : "Lucas Carton",
                         "rating" : "4.2",
                         "price" : "Prix - De 89 € à 151 €",
                         "href" : "https://restaurant.michelin.fr/2abav0l/lucas-carton-paris-08",
                         "minPrice" : "89",
                         "maxPrice" : "151"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad065",
                         "name" : "Passage 53",
                         "rating" : "4.1",
                         "price" : "Prix - De 120 € à 240 €",
                         "href" : "https://restaurant.michelin.fr/2ezpxm7/passage-53-paris-02",
                         "minPrice" : "120",
                         "maxPrice" : "240"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad054",
                         "name" : "La Grenouillère",
                         "rating" : "4.1",
                         "price" : "Prix - De 80 € à 160 €",
                         "href" : "https://restaurant.michelin.fr/2a0ne3f/la-grenouillere-la-madelaine-sous-montreuil",
                         "minPrice" : "80",
                         "maxPrice" : "160"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad05f",
                         "name" : "Les Hautes Roches",
                         "rating" : "4",
                         "price" : "Prix - De 60 € à 80 €",
                         "href" : "https://restaurant.michelin.fr/2cyg6yb/les-hautes-roches-rochecorbon",
                         "minPrice" : "60",
                         "maxPrice" : "80"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad042",
                         "name" : "Les Pêcheurs",
                         "rating" : "4",
                         "price" : "Prix moyen - 85 €",
                         "href" : "https://restaurant.michelin.fr/29ol879/les-pecheurs-antibes",
                         "minPrice" : false,
                         "maxPrice" : false
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad048",
                         "name" : "Le Duèze",
                         "rating" : "3.8",
                         "price" : "Prix - De 39 € à 155 €",
                         "href" : "https://restaurant.michelin.fr/2blc3qr/le-dueze-mercues",
                         "minPrice" : "39",
                         "maxPrice" : "155"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad04f",
                         "name" : "Le Pavillon",
                         "rating" : "3.2",
                         "price" : "Prix - De 65 € à 155 €",
                         "href" : "https://restaurant.michelin.fr/2b3t8kh/le-pavillon-le-touquet-paris-plage",
                         "minPrice" : "65",
                         "maxPrice" : "155"
                     },
                     {
                         "_id" : "5c6b00e8a34d3647c02ad04b",
                         "name" : "La Table",
                         "rating" : "-",
                         "price" : "Prix - De 49 € à 95 €",
                         "href" : "https://restaurant.michelin.fr/ua271jkd/la-table-lille",
                         "minPrice" : "49",
                         "maxPrice" : "95"
                     }
                 ];
const SEARCHING = {
     getInput :() => {
    return {
      'name': document.querySelector('#name .name').value,
      'minRating': document.querySelector('#detail .minRating').value,
      'minPrice': document.querySelector('#detail .minPrice').value,
      'maxPrice': document.querySelector('#detail .maxPrice').value
    };
 },
    findRestaurant : (searchName) =>{
    let matching = [];
    database.forEach(data => {
        if(data.name.includes(searchName)){
            matching.push({
                name: data.name,
                minPrice: data.minPrice,
                maxPrice: data.maxPrice,
                rating: data.rating,
                href: data.href
            });
        }
    })
    return matching;
},
    findDetails : (minPrice, maxPrice, rating) =>{
    let matching = [];
    let trans = [];
    database.forEach(data => {
    if(minPrice){
        if(minPrice <= data.minPrice){
            trans.push({
                            name: data.name,
                            minPrice: data.minPrice,
                            maxPrice: data.maxPrice,
                            rating: data.rating,
                            href: data.href
                        });
        };
    } else{
            trans.push({
                            name: data.name,
                            minPrice: data.minPrice,
                            maxPrice: data.maxPrice,
                            rating: data.rating,
                            href: data.href
                        });
    }
    });
    let transTwo = [];
    trans.forEach(data => {
    if(maxPrice){
        if(maxPrice >= data.maxPrice){
            transTwo.push({
                            name: data.name,
                            minPrice: data.minPrice,
                            maxPrice: data.maxPrice,
                            rating: data.rating,
                            href: data.href
                        });
        };
    } else{
            transTwo.push({
                            name: data.name,
                            minPrice: data.minPrice,
                            maxPrice: data.maxPrice,
                            rating: data.rating,
                            href: data.href
                        });
    }
    });

    transTwo.forEach(data => {
    if(rating){
        if(rating <= data.rating){
            matching.push({
                            name: data.name,
                            minPrice: data.minPrice,
                            maxPrice: data.maxPrice,
                            rating: data.rating,
                            href: data.href
                        });
        };
    } else{
            matching.push({
                            name: data.name,
                            minPrice: data.minPrice,
                            maxPrice: data.maxPrice,
                            rating: data.rating,
                            href: data.href
                        });
    }
   });
return matching;
},
}