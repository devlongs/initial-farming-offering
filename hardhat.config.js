require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.6.12",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/3YrcgwycZ0vi8HGXjNQVIkaeVL7-n497",
      },
    },

    goerli: {
      url: process.env.URL,
      accounts: [
        process.env.PRIVATE,
      ],
    },
  },
};
