const hre = require("hardhat");

async function main() {
  const IFO = await hre.ethers.getContractFactory("IFO");
  const ifo = await IFO.deploy();

  await ifo.deployed();

  console.log(
    `IFO is deployed to${ifo.address}`
  );


  const LongsToken = await hre.ethers.getContractFactory("LongsToken");
  const longsToken = await LongsToken.deploy("LongsToken", "LNS");

  await longsToken.deployed();

  console.log(
    `LongsToken is deployed to${longsToken.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
