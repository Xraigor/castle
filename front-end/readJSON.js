var fs= require('fs');

var fileName="XRegExp.json";
      console.log("读取json文件："+fileName);
var fileContent=fs.readFileSync(fileName);
const database = JSON.parse(fileContent);

