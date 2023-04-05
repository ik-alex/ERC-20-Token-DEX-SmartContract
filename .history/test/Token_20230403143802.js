const { ethers } = require("hardhat");
const { expect } = require("chai");
const { utils } = require("ethers");

const tokens = (n) => {
  ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Token", () => {
  let token;

  beforeEach(async () => {
    //Fetch the token
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy();
  });

  it("has a correct name", async () => {
    //Read the Token
    // const name = await token.name();
    //Check the Token
    expect(await token.name()).to.equal("My Token");
  });

  it("has correct symbol", async () => {
    //Read the Token
    // const symbol = await token.symbol();
    //Check the Token
    expect(await token.symbol()).to.equal("DApp");
  });

  it("has correct decimals", async () => {
    expect(await token.decimals()).to.equal("18");
  });

  it("has correct total supply", async () => {
    const value = ethers.utils.parseUnits("1000000", "ether");
    expect(await token.totalSupply()).to.equal(value);
  });
});
