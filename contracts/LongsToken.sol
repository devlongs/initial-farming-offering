// SPDX-License-Identifier: MIT

// What version of solidity do I want to use
pragma solidity 0.6.12;

// import ERC20 base Contract from openzeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LongsToken is ERC20 {
    // We also want to call the constructor inside of ERC20 when our contructor is called.
    constructor(string memory _name, string memory _symbol) public
        ERC20(_name, _symbol)
    {
        // Get some tokens for ourselves

        _mint(msg.sender, 1000 * (10 * 18));
    }
}