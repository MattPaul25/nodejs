var fs = require("fs");
var path = './lib';
var filesSync = fs.readdirSync(path);


function listArrItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].toString().trim() + '\n');
    }
}

console.log('reading files synchronously: \n');

listArrItems(filesSync);


//option asynch
console.log('\n\n\n reading files asynchronously: \n');
fs.readdir(path, function (err, files) {
    if (err) {
        throw err;
    }

    listArrItems(files);
});