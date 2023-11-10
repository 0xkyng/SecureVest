// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/OrganizationFactory.sol";
import {OxToken} from "../src/OxToken.sol";

contract OrganizationScript is Script {
    OrganizationFactory _OrganizationFactory;
    OxToken _oxToken;

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        _OrganizationFactory = new OrganizationFactory();
        _oxToken = new OxToken();
        _OrganizationFactory.createOrganization(
            "OxToken",
            "OxT",
            100000 * 10 ** 18,
            address(_oxToken)
        );
        vm.stopBroadcast();
    }
}
