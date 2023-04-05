//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
  string public name;
  string public symbol;
  uint256 public decimals = 18;
  uint256 public totalSupply = 1000000 * (10**decimals);

  constructor(string memory _name, string memory _symbol, uint256 memory _totalSupply){
    name = _name;
    symbol = _symbol;
    totalSupply = _totalSupply;
  }
}