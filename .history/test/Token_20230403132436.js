describe("Token", () => {
  it("has a name", async () => {
    //Fetch the token
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    //Read the Token
    const name = token.name();
    //Check the Token
  });
});
