describe("Token", () => {
  it("has a name", async () => {
    //Fetch the token
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    //Read the Token
    //Check the Token
  });
});
