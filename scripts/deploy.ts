import { ethers } from "hardhat";

async function main() {

    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 60;

    console.log("Starte Deployment...");
    
    const guestbook = await ethers.deployContract("Guestbook");
    await guestbook.waitForDeployment();

    console.log(`Gästebuch deployed auf Adresse: ${guestbook.target}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});