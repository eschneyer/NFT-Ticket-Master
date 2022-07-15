//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTTicket is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    constructor() public ERC721("NFTTicket", "NFT") {}
    
    uint256 public price = 6000000000000000;
    uint256 public maxSupply = 10;
    function mintNFT(address recipient)
        public payable
        returns (uint256)
    {
        require(msg.value == price, "Wrong payment sent!");
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);

        return newItemId;
    }

    function withdraw(address payable addr) public onlyOwner {
        uint256 balance = address(this).balance;
        addr.transfer(balance);
    }
}
