const fs = require('fs');
const db  = require('./index.js');
const StockChart = require('./StockChart.js');
const generateData = require('./generateData.js');

function writeTenMillionTimes(writer, data) {
 return new Promise((resolve) => {
   if (writer.write(data)) {
     writer.once('drain', resolve);
   } else {
     resolve();
   }
 });
}

const generateStockData = () => {
 const stream = fs.createWriteStream('data.csv');
 for (let i = 0; i < 10000000; i++) {
   writeTenMillionTimes(stream, JSON.stringify(generateData.generateData(i)) + '\n');
 }
};

generateStockData();

// const stockData = [];
// for (let i = 0; i < 1000000; i++) {
//   stockData.push(generateData.generateData(i));
//   process.stdout.write(JSON.stringify(generateData.generateData(i)));
// }

// const insertStockData = function() {
//   StockChart.init()
//   .then(() => {
//     StockChart.create(stockData)
//       .then(() => db.close())
//       .catch((e) => {
//         console.log('\n \n \n THERE WAS AN ERROR IN THE DATABASE: \n \n \n', e.message);
//       })
//       .then(() => db.close());
//   })
// };

// insertStockData();
