pragma solidity 0.4.25;

import "./IERC20.sol";

contract ISynth is IERC20 {
    bytes4 public currencyKey;
    function burn(address account, uint amount) external;
    function issue(address account, uint amount) external;
    function triggerTokenFallbackIfNeeded(address sender, address recipient, uint amount) external;
}