const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Token", () => {
  let token;

  beforeEach(async () => {
    //Fetch the token
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy();
  });

  it("has a correct name", async () => {
    expect(await token.name()).to.equal("My Token");
  });

  it("has correct symbol", async () => {
    //Read the Token
    // const symbol = await token.symbol();
    //Check the Token
    expect(await token.symbol()).to.equal("DApp");
  });
});
