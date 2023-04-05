const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Token", () => {

beforeEach( async => (){
  //Fetch the token
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
})

  it("has a correct name", async () => {
    
    //Read the Token
    const name = await token.name();
    //Check the Token
    expect(name).to.equal("My Token");
  });

  it("has correct symbol", async () => {
    //Fetch the token
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    //Read the Token
    const symbol = await token.symbol();
    //Check the Token
    expect(symbol).to.equal("DApp");
  });
});
