pragma solidity 0.4.25;

/**
 * @title SynthetixEscrow interface
 */
interface ISynthetixEscrow {
    function balanceOf(address account) external view returns (uint);
}