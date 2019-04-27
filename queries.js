const Pool = require('pg').Pool

const pool = new Pool({
  user: 'Anthony',
  host: 'localhost',
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
