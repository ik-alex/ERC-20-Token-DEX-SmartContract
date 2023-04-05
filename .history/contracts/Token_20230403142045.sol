//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
  string public name = "My Token";
  string public symbol = "DApp";
  uint256 public decimals = 18;
  uint256 public totalSupply = 1000000 * (10**decimals)
}