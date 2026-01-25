# Eternal Guestbook

A decentralized, immutable guestbook application built on the Ethereum blockchain (Sepolia Testnet). This project demonstrates the implementation of smart contracts using Solidity, the Hardhat development environment, and TypeScript for testing and interaction.

**Repository:** [https://github.com/paco-37/eternal-guestbook.git](https://github.com/paco-37/eternal-guestbook.git)

---

## Project Overview

The Eternal Guestbook allows users to store messages permanently on the blockchain. Once a message is written, it cannot be altered or deleted, ensuring a censorship-resistant and tamper-proof history of entries.

This project serves as a foundational example of full-stack Web3 development, covering smart contract development, testing, deployment, and on-chain interaction.

---

## Features

* **Immutable Storage** – Messages are stored directly on the Ethereum blockchain.
* **Public Access** – Anyone can read the complete history of guestbook entries.
* **Interaction Scripts** – Automated scripts for deployment and contract interaction.
* **Comprehensive Testing** – Unit tests to ensure correct contract logic and basic security guarantees.

---

## Technical Stack

* **Solidity (v0.8.28)** – Smart contract development
* **Hardhat** – Ethereum development environment
* **TypeScript** – Type-safe scripting and testing
* **Ethers.js** – Interaction with the Ethereum blockchain
* **Alchemy** – Blockchain node provider

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/paco-37/eternal-guestbook.git
cd eternal-guestbook
```

### 2. Install Dependencies

```bash
yarn install
```

---

## Configuration

This project requires environment variables to interact with the Sepolia test network.

Create a `.env` file in the root directory and add the following values:

```env
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
CONTRACT_ADDRESS=0x82ceC911459E5a7e5C33AeB4B05Bd140BbF397fA
```

> **Note:** The `.env` file is excluded from version control to protect sensitive credentials.

---

## Usage

### Running Tests

Execute the full test suite to verify the smart contract logic:

```bash
yarn hardhat test
```

---

### Deployment

Deploy the smart contract to the Sepolia Testnet:

```bash
yarn hardhat run scripts/deploy.ts --network sepolia
```

---

### Interaction

Write a new entry to the guestbook using the interaction script:

```bash
yarn hardhat run scripts/interact.ts --network sepolia
```

---

## Deployed Contract Information

* **Network:** Sepolia Testnet
* **Contract Address:** `0x82ceC911459E5a7e5C33AeB4B05Bd140BbF397fA`
* **Explorer:** View on Sepolia Etherscan

---

## License

This project is provided for educational and demonstration purposes. Refer to the repository for licensing details.
