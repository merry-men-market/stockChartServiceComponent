/* eslint-disable no-console */
const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const Stocks = require('../database/StockChart.js');
const postgres = require('../queries.js');

const app = express();
const port = process.env.PORT || 2468;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/../public/dist/loaderio')));
// app.use('/:stockId', express.static(__dirname, '/../public/dist'));

app.use('/loaderio-44f53fa39a2b82550401b8b1075cebf1', express.static(path.join(__dirname, '/../public/dist/loaderio')));

app.locals.newrelic = newrelic;

app.listen(port, () => {
  console.log(`Server is now listening on port: ${port}`)
})


// app.get('/:stockId', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../public/dist/index.html'));
// })

app.get('/api/:stockId', postgres.getStock);


// READ

// app.get('/api/:stockId', (req, res) => {
//   console.log('Got a request to READ at ', req.params.stockId);
//   var id = req.params.stockId;
//   Stocks.find({stockId: id}, (err, data) => {
//     if (err) {
//       console.log(err.message);
//     } else if (!data.length) {
//       Stocks.find({id: id}, (err, data) => {
//         if (err) {
//           console.log(err.message);
//         } else if (!data.length) {
//           console.log('Data not found');
//           res.sendStatus(404);
//         } else {
//           console.log(`Sending ${id} to client`);
//           console.log(data);
//           res.send(data);
//         }
//       }) 
//     } else {
//       console.log(`Sending ${id} to client`);
//       console.log(data);
//       res.send(data);
//     }
//   }) 
// })

// CREATE

// app.post('/api/:stockId', (req, res) => {
//   console.log('Got a request to POST at ', req.params.stockId);
//   var newStock = req.body.data;
//   Stocks.create({ 
//     "stockInfo" : { 
//     "relatedTags" : newStock.relatedTags, 
//     "stockCompany" : newStock.stockCompany, 
//     "noOfOwners" : newStock.noOfOwners, 
//     "recommendationPercent" : newStock.recommendationPercent
//   }, 
//   "stockData" : { 
//     "day" : newStock.dayData, 
//     "week" : newStock.weekData, 
//     "month" : newStock.monthData, 
//     "threeMonth" : newStock.threeMonthData, 
//     "year" : newStock.yearData, 
//     "fiveYear" : newStock.fiveYearData 
//     }, 
//     "id" : newStock.id, 
//     "stockId" : newStock.stockId, 
//     "averageStock" : newStock.averageStock, 
//     "changePercent" : newStock.changePercent, 
//     "createdAt" : "2019-04-17T17:58:57.498Z", 
//     "updatedAt" : "2019-04-17T17:58:57.498Z", 
//   }, (error) => {
//     if (error){
//       res.statusCode(500);
//       res.end();
//     } else {
//       console.log('POST was success')
//     }
//   });
// })

// // UPDATE

// app.patch('/api/:stockId', function(req, res) {
//   console.log('Got a request to UPDATE at ', req.params.stockId);
//   var id = req.params.stockId;
//   var newStock = req.body.data;
//   Stocks.find({ id: id }, (error) => {
//     if (error) {
//       res.statusCode(500);
//       res.end();
//     } else {
//       Stocks.findOneAndUpdate({ id: id }, {$set: { 
//         "stockInfo" : { 
//         "relatedTags" : newStock.relatedTags, 
//         "stockCompany" : newStock.stockCompany, 
//         "noOfOwners" : newStock.noOfOwners, 
//         "recommendationPercent" : newStock.recommendationPercent
//       }, 
//       "stockData" : { 
//         "day" : newStock.dayData, 
//         "week" : newStock.weekData, 
//         "month" : newStock.monthData, 
//         "threeMonth" : newStock.threeMonthData, 
//         "year" : newStock.yearData, 
//         "fiveYear" : newStock.fiveYearData 
//         }, 
//         "id" : newStock.id, 
//         "stockId" : newStock.stockId, 
//         "averageStock" : newStock.averageStock, 
//         "changePercent" : newStock.changePercent, 
//         "createdAt" : "2019-04-17T17:58:57.498Z", 
//         "updatedAt" : "2019-04-17T17:58:57.498Z", 
//       }
//     }, {}, (err) => {
//         if (err) {
//           res.statusCode(500);
//           res.end();
//         } else {
//           console.log('UPDATE was success');
//           res.statusCode(200);
//         }
//       });
//     }
//   });
// });


// // DELETE

// app.delete('/api/:stockId', function (req, res) {
//   var id = req.params.stockId;
//   Stocks.deleteOne({ id: id }, (error) => {
//     if (error){
//       res.statusCode(500);
//       res.end();
//     } else {
//       console.log('DELETE was success');
//       res.statusCode(200);
//     }
//   })
// })