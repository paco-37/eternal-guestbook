import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {

  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "0x82ceC911459E5a7e5C33AeB4B05Bd140BbF397fA";

  console.log(`Verbinde mit Contract auf Adresse: ${CONTRACT_ADDRESS}`);

  const guestbook = await ethers.getContractAt("Guestbook", CONTRACT_ADDRESS);

  console.log("Lese aktuelle Einträge...");
  let entries = await guestbook.getAllEntries();
  console.log(`Anzahl Einträge vorher: ${entries.length}`);

  const message = "Hello Blockchain! Dies ist mein erster Eintrag.";
  console.log(`Schreibe neuen Eintrag: "${message}"`);
  
  const tx = await guestbook.writeMessage(message);

  console.log("Warte auf Bestätigung der Blockchain (Mining)...");
  await tx.wait(); 

  entries = await guestbook.getAllEntries();
  console.log(`Anzahl Einträge nachher: ${entries.length}`);
  console.log(`Neuster Eintrag: "${entries[entries.length - 1].message}" von ${entries[entries.length - 1].writer}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});