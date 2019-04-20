const mongoose = require('mongoose');
const Sequelize = require('sequelize');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const stockSchema = new mongoose.Schema({
  id: String,
  stockId: {type: String, unique: true},
  stockInfo: {
    stockCompany: String,
    relatedTags: Array,
    noOfOwners: Number,
    recommendationPercent: Number,
  },
  stockData: {
    day: Array,
    week: Array,
    month: Array,
    threeMonth: Array,
    year: Array,
    fiveYear: Array
  },
  averageStock: Number,
  changePercent: Number
}, 
{
  timestamps: true
}
);

const Stocks = mongoose.model('Stocks', stockSchema);

module.exports = Stocks;



const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

class User extends Sequelize.Model {}
User.init({
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
}, { sequelize, modelName: 'user' });

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


