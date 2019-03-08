pragma solidity 0.4.25;

/**
 * @title Synth interface
 */
contract ISynth {
    uint public totalSupply;
    bytes4 public currencyKey;
    function burn(address account, uint amount) external;
    function issue(address account, uint amount) external;
    function triggerTokenFallbackIfNeeded(address sender, address recipient, uint amount) external;
    function transfer(address to, uint value) public returns (bool);
    function transfer(address to, uint value, bytes data) public returns (bool);
    function transferFrom(address from, address to, uint value) public returns (bool);
}
