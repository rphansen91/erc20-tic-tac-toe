const Bet = artifacts.require("Bet");
const Moralis = artifacts.require("Moralis");

module.exports = function (deployer) {
  deployer.deploy(Bet);
  deployer.deploy(Moralis);
};
