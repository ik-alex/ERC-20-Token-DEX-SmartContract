const { ethers } = require("hardhat");
const { expect } = require("chai");
const { utils } = require("ethers");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Token", () => {
  let token;
  let accounts;
  let deployer;
  beforeEach(async () => {
    //Fetch the token
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy("My Token", "DApp", "1000000");

    accounts = await ethers.getSigners();
    deployer = accounts[0];
  });

  describe("deployment", () => {
    const name = "My Token";
    const symbol = "DApp";
    const decimals = 18;
    const totalSupply = tokens("1000000");

    it("has a correct name", async () => {
      //Read the Token
      // const name = await token.name();
      //Check the Token
      expect(await token.name()).to.equal(name);
    });

    it("has correct symbol", async () => {
      //Read the Token
      // const symbol = await token.symbol();
      //Check the Token
      expect(await token.symbol()).to.equal(symbol);
    });

    it("has correct decimals", async () => {
      expect(await token.decimals()).to.equal(decimals);
    });

    it("has correct total supply", async () => {
      // const value = ethers.utils.parseUnits("1000000", "ether");
      // const value = tokens("1000000");
      expect(await token.totalSupply()).to.equal(totalSupply);
    });

    it("assigns total supply to deployer", async () => {
      // const value = ethers.utils.parseUnits("1000000", "ether");
      // const value = tokens("1000000");
      expect(await token.balanceOf(deployer)).to.equal(totalSupply);
    });
  });

  //describe spending
});
