var fs= require('fs');

var fileName="XRegExp.json";
      console.log("读取json文件："+fileName);
var fileContent=fs.readFileSync(fileName);
const database = JSON.parse(fileContent);
console.log(database);

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