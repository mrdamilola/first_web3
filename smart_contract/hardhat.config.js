

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CFmMOe-APGI_WZ8L0fFpzLlGxclcf-kF',
      accounts: ['188eb36bb8baa766081d1c06964b6a4d4df94f3afe5f8f72ee57e36c42fd75b8']
    }
  }
}