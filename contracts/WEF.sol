// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFT } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";

contract WEF is OFT {
    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) OFT(_name, _symbol, _lzEndpoint, _delegate) Ownable(_delegate) {
        _mint(msg.sender, 100000000000000000000);
    }

    function _update(address from, address to, uint256 value) internal override {
        if (to == address(0) || from == address(0)) {
            super._update(from, to, value);
        } else {
            uint256 percent = value / 100;
            uint256 remaining = value - percent;
            super._update(from, address(0), percent);
            super._update(from, to, remaining);
        }
    }
}
