require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.12",
  networks: {
    avax: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts: [process.env.DEPLOYER_PK],
      gasPrice: 100333122862,
      nonce: 0
    }
  }
};