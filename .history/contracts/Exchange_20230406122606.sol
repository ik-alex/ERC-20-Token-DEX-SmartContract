//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Token.sol";

contract Exchange {
    address public feeAccount;
    uint256 public feePercent;

event Deposit(address token, address user, uint256 amount, uint256 balance);
event Withdraw(address token, address user, uint256 amount, uint256 balance);

mapping(address => mapping(address => uint256)) public tokens;
constructor(address _feeAccount, uint256 _feePercent){
    feeAccount = _feeAccount;
    feePercent = _feePercent;
}

function depositToken(address _token, uint256 _amount) public {
    //transfer token to the exchange
    require(Token(_token).transferFrom(msg.sender, address(this), _amount));
    //updates user  balance
     tokens[_token][msg.sender] = tokens[_token][msg.sender] + _amount;
    //emit the transfer event
    emit Deposit(_token, msg.sender, _amount, tokens[_token][msg.sender]);
}

function withdrawToken(address _token, uint256 _amount) public {
    //transfer token to the user
    require(Token(_token).transfer(msg.sender, _amount));
    //updates user  balance
    tokens[_token][msg.sender] = tokens[_token][msg.sender] - _amount;
    emit Withdraw(_token, msg.sender, _amount, tokens[_token][msg.sender]);
}

//checks balance
function balanceOf(address _token, address _user) public view returns (uint256){
    return tokens[_token][_user];
}


}

