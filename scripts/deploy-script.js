const { ethers } = require("hardhat");


async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Account used for deployment: ", deployer.address)
    console.log("Deploying GTFO.sol...")

    const Contract = await ethers.getContractFactory("GTFORUG")
    const contract = await Contract.deploy()

    console.log("GTFO.sol has been deployed to: ", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });