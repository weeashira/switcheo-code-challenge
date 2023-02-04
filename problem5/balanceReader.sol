// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

interface ERC20 {
    function balanceOf(address owner) external returns (uint256);
}

contract BalanceReader {
    struct TokenBalance {
        address token;
        uint balance;
    }

    function getBalances(address wallet, address[] memory tokens) public returns (TokenBalance[] memory) {
        TokenBalance[] memory balances = new TokenBalance[](tokens.length);

        for (uint i = 0; i < tokens.length; i++) {
            ERC20 token = ERC20(tokens[i]);
            balances[i].token = tokens[i];
            balances[i].balance = token.balanceOf(wallet);
        }
        return balances;
    }
}