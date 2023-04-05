const { ethers } = require("hardhat");

async function main() {
  //Fetch Contract to deploy
  const Token = await ethers.getContractFactory("Token");

  //Deploy Contract
  const token = await Token.deploy();
  await.T
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
