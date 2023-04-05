const { ethers } = require(chai);

describe("Token", () => {
  it("has a name", async () => {
    //Fetch the token
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    //Read the Token
    const name = await token.name();
    //Check the Token
    name.should.equal("My Token");
  });
});
