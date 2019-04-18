# Stock Chart

menintights stock chart component simulates a visual representation of stock market data on an interactive price chart, including:
  - Stock Price
  - Trends
  - Percent Change
  
## Installation

  To install the latest version:
  ```sh
  git clone https://github.com/menintights/stock-chart
  ```

## Getting started
  
  After navigating to the Stock-Chart directory, run the following commands:
  ```sh
  npm install
  npm start
  ```
  
  Go to localhost at port 2468 with a path of '/api/{number}', where number is the stock charts id you want to navigate to. Note: that accessible ids currently includes 001-100.

  ```sh
  localhost:2468/api/001
  ```

## CRUD API
  
  The Stock Chart component has the following functions:
  ### 1. Add a new company - (CREATE)

  ```sh
  POST - /api/:stockId
  ```

  ### 2. Get specific stock by Id - (READ)

  ```sh
  GET - /api/:stockId
  ```

  ### 3. Make changes to stock information data - (UPDATE)
  
  ```sh
  PATCH - /api/:stockId
  ```

  ### 3. Delete specific stock by id - (DELETE)
  
  ```sh
  PATCH - /api/:stockId
  ```
  
## Bugs & Feedback:
  - If you notice any bugs or have suggestions, please feel free to make a pull request with the changes. Thank you!