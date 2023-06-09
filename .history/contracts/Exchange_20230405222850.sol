//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Token.sol";

contract Exchange {
    address public feeAccount;
    uint256 public feePercent;

constructor(address _feeAccount, uint256 _feePercent){
    feeAccount = _feeAccount;
    feePercent = _feePercent;
}

function depositToken(address _token, uint256 _amount) public {
    //transfer token to the exchange
    Token(_token).transferFrom(msg.sender, address(this), _amount);
    //check for the balance of the token
     balanceOf[msg.sender] = balanceOf[msg.sender] - _amount;
    //emit the transfer event
}

}

