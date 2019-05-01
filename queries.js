const Pool = require('pg').Pool
const password = require('./poweruserpassword.js');

const pool = new Pool({
  user: 'power_user',
  password: password,
  host: 'ec2-18-222-213-135.us-east-2.compute.amazonaws.com',
  // host: 'localhost',
  database: 'postgres',
  port: 5432,
})


const getStock = (request, response) => {
  const id = request.params.stockId;
  pool.query(`select * from stockstable where id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
  })
}

module.exports.getStock = getStock;
