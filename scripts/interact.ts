import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 

async function main() {

  const guestbook = await ethers.getContractAt("Guestbook", CONTRACT_ADDRESS);

  console.log("Lese aktuelle Einträge...");
  let entries = await guestbook.getAllEntries();
  console.log(`Anzahl Einträge vorher: ${entries.length}`);

  console.log("Schreibe neuen Eintrag...");
  const tx = await guestbook.writeMessage("Hallo von der Kommandozeile!");
  
  await tx.wait(); 

  entries = await guestbook.getAllEntries();
  console.log(`Anzahl Einträge nachher: ${entries.length}`);
  console.log(`Neuster Eintrag: "${entries[entries.length - 1].message}" von ${entries[entries.length - 1].writer}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});