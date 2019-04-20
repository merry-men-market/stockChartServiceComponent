const faker = require('faker');


const companyData = [
  { ticker: 'SNAP', company: 'Snap' },
  { ticker: 'TSLA', company: 'Tesla' },
  { ticker: 'AMZN', company: 'Amazon'},
  { ticker: 'TWTR', company: 'Twitter' },
  { ticker: 'BABA', company: 'Alibaba' },
  { ticker: 'BAC', company: 'Bank of America'},
  { ticker: 'NFLX', company: 'Netflix' },
  { ticker: 'NVDA', company: 'NVIDIA'},
  { ticker: 'DIS', company: 'Disney' },
  { ticker: 'PLUG', company: 	'Plug Power'},
  { ticker: 'SQ', company: 	'Square'},
  { ticker: 'ZNGA', company: 'Zynga'},
  { ticker: 'CHK', company: 'Chesapeake Energy'},
  { ticker: 'NIO', company: 	'NIO'},
  { ticker: 'T', company: 	'AT&T'},
  { ticker: 'HEXO', company: 	'Hexo'},
  { ticker: 'MU', company: 	'Micron Technology'},
  { ticker: 'GRPN', company: 	'Groupon'},
  { ticker: 'SBUX', company: 	'Starbucks' },
  { ticker: 'APHA', company: 	'Aphria'},
  { ticker: 'RAD', company: 	'Rite Aid'},
  { ticker: 'SIRI', company: 	'Sirius XM'},
  { ticker: 'ATVI', company: 	'Activision Blizzard'},
  { ticker: 'NTDOY', company: 	'Nintendo'},
  { ticker: 'NKE', company: 	'Nike'},
  { ticker: 'INTC', company: 	'Intel'},
  { ticker: 'IQ', company: 	'iQIYI'},
  { ticker: 'VOO', company: 	'Vanguard'},
  { ticker: 'S', company: 	'Sprint'},
  { ticker: 'WFT', company: 	'Weatherford'},
  { ticker: 'KO', company: 	'Coca-Cola'},
  { ticker: 'BRK', company: 'Berkshire Hathaway'},
  { ticker: 'TLRY', company: 	'Tilray'},
  { ticker: 'BA', company: 	'Boeing'},
  { ticker: 'MJ', company: 	'ETFMG Alternative Harvest'},
  { ticker: 'JD', company: 	'JD.com'},
  { ticker: 'V', company: 	'Visa'},
  { ticker: 'AUY', company: 	'Yamana Gold'},
  { ticker: 'SPY', company: 	'SPDR'},
  { ticker: 'GERN', company: 	'Geron'},
  { ticker: 'PYPL', company: 	'PayPal'},
  { ticker: 'TCEHY', company: 	'Tencent'},
  { ticker: 'GOOGL', company: 	'Alphabet'},
  { ticker: 'CSCO', company: 	'Cisco'},
  { ticker: 'CRM', company: 	'Salesforce'},
  { ticker: 'ROKU', company: 	'Roku'},
  { ticker: 'CRBP', company: 	'Corbus Pharmaceuticals'},
  { ticker: 'DBX', company: 	'Dropbox'},
  { ticker: 'WMT', company: 	'Walmart'},
  { ticker: 'JCP', company: 	'J.C. Penney'},
  { ticker: 'GM', company: 	'GM'},
  { ticker: 'VTI', company: 	'Vanguard Total'},
  { ticker: 'BILI', company: 	'Bilibili'},
  { ticker: 'NOK', company: 	'Nokia'},
  { ticker: 'GLUU', company: 	'Glu Mobile'},
  { ticker: 'VZ', company: 	'Verizon'},
  { ticker: 'VSLR', company: 	'Vivint Solar'},
  { ticker: 'SHOP', company: 	'Shopify'},
  { ticker: 'CARA', company: 	'Cara Therapeutics'},
  { ticker: 'SNE', company: 	'Sony'},
  { ticker: 'PFE', company: 	'Pfizer'},
  { ticker: 'ENPH', company: 	'Enphase Energy'},
  { ticker: 'CVS', company: 	'CVS'},
  { ticker: 'SPOT', company: 	'Spotify'},
  { ticker: 'COST', company: 	'Costco'},
  { ticker: 'TRXC', company: 	'TransEnterix'},
  { ticker: 'TWLO', company: 	'Twilio'},
  { ticker: 'PCG', company:	'PG&E'},
  { ticker: 'KHC', company:	'Kraft Foods'},
  { ticker: 'INSY', company:	'Insys Therapeutics'},
  { ticker: 'AKS', company:	'AK Steel'},
  { ticker: 'LUV', company:	'Southwest Airlines'},
  { ticker: 'CRSP', company:	'CRISPR'},
  { ticker: 'FDX', company:	'FeDex'},
  { ticker: 'VKTX', company:	'Viking Therapeutics'},
  { ticker: 'JPM', company:	'JPMorgan Chase'},
  { ticker: 'DNR', company:	'Denbury'},
  { ticker: 'SPWR', company:	'SunPower'},
  { ticker: 'UAA', company:	'Under Armour'},
  { ticker: 'BOTZ', company:	'Global X Robotics'},
  { ticker: 'SFIX', company:	'Stitch Fix'},
  { ticker: 'AMAT', company:	'Applied Materials'},
  { ticker: 'YETI', company:	'YETI'},
  { ticker: 'EA', company:	'EA'},
  { ticker: 'QCOM', company:	'Qualcomm'},
  { ticker: 'TGT', company:	'Target'},
  { ticker: 'TEVA', company:	'Teva Pharmaceutical'},
  { ticker: 'JNJ', company:	'Johnson & Johnson'},
  { ticker: 'IIPR', company:	'Innovative Industrial Properties'},
  { ticker: 'ACB', company:	'Aurora Cannabis'},
  { ticker: 'GE', company:	'GE' },
  { ticker: 'AAPL', company:	'Apple' },
  { ticker: 'F', company:	'Ford' },
  { ticker: 'CRON', company:	'Cronos Group'},
  { ticker: 'MSFT', company:	'Microsoft' },
  { ticker: 'GPRO', company:	'GoPro' },
  { ticker: 'FIT', company:	'Fitbit' },
  { ticker: 'AMD', company:	'AMD'},
  { ticker: 'FB', company:	'Facebook' },
  { ticker: 'CGC', company:	'Canopy Growth'}
];

const generateInBetween = (min, max, type) => {
  if (type === 'interger') {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  } else {
    return (Math.random() * (max - min)) + min; 
  }
}

module.exports.generateData = (index, randomIndex) => {
  return {
    id: index,
    stockId: companyData[randomIndex].ticker,
    stockInfo: index,
    stockData: index,
    averageStock: generateInBetween(90, 200).toFixed(2),
    changePercent: generateInBetween(1, 4).toFixed(2)
  }
};

module.exports.stockInfo = (index) => {
  return {
    id: index,
    stockCompany: companyData[randomIndex].company,
    relatedTags: generateTags(generateInBetween(2, 5, 'interger')),
    noOfOwners: faker.random.number(),
    recommendationPercent: generateInBetween(30, 90, 'interger'),
  }
};

module.exports.stockData = (index) => {
  return {
    id: index,
    day: generateDataPoints(),
    week: generateDataPoints(),
    month: generateDataPoints(),
    threeMonth: generateDataPoints(),
    year: generateDataPoints(),
    fiveYear: generateDataPoints()
  }
};

  
const generateDataPoints = () => {
  let returnArr = [];
  returnArr.push(+generateInBetween(50, 200).toFixed(2));
  for (var i = 0; i < 10; i++) {
    returnArr.push(Math.abs(generateInBetween(+returnArr[i] - generateInBetween(5, 25, 'interger'), +returnArr[i] + generateInBetween(5, 25, 'interger')).toFixed(2)));
  }
  return returnArr;
}

const generateTags = (number) => {
  number = number || 3;
  let returnArr = []
  for (let i = 0; i < number; i++) {
    returnArr.push(faker.fake("{{commerce.department}}"));
  }
  return returnArr;
}



// module.exports.generateData = (index) => {
//   var randomIndex = Math.floor(Math.random() * Math.floor(100));
//   return {
//     id: index,
//     stockId: companyData[randomIndex].ticker,
//     stockInfo: {
//       stockCompany: companyData[randomIndex].company,
//       relatedTags: generateTags(generateInBetween(2, 5, 'interger')),
//       noOfOwners: faker.random.number(),
//       recommendationPercent: generateInBetween(30, 90, 'interger'),
//     },
//     stockData: {
//       day: generateDataPoints(),
//       week: generateDataPoints(),
//       month: generateDataPoints(),
//       threeMonth: generateDataPoints(),
//       year: generateDataPoints(),
//       fiveYear: generateDataPoints()
//     },
//     averageStock: generateInBetween(90, 200).toFixed(2),
//     changePercent: generateInBetween(1, 4).toFixed(2)
//   }
// };