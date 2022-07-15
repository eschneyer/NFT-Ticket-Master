
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",//or 0.7.3?
   defaultNetwork: "hardhat",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`${PRIVATE_KEY}`]
      }
   },
}
