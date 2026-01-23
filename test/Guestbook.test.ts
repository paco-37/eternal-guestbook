import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";

describe("Guestbook", function () {

    async function deployGuestbookFixture() {

        const [owner, otherAccount] = await ethers.getSigners();

        const GuestbookFactory = await ethers.getContractFactory("Guestbook");

        const guestbook = await GuestbookFactory.deploy();

        return { guestbook, owner, otherAccount };
    }

    describe("Deployment & Writing", function () {

        it("Should start with 0 entries", async function () {
            const { guestbook } = await loadFixture(deployGuestbookFixture);

            const entries = await guestbook.getAllEntries();

            expect(entries.length).to.equal(0);
        });

        it("Should allow adding a message", async function () {
            const { guestbook, owner } = await loadFixture(deployGuestbookFixture);

            const message = "Hello Blockchain!";

            await guestbook.writeMessage(message);

            const entries = await guestbook.getAllEntries();

            expect(entries.length).to.equal(1);
            expect(entries[0].message).to.equal(message);
            expect(entries[0].writer).to.equal(owner.address);
        });

        it("Should reject empty messages", async function () {
            const { guestbook } = await loadFixture(deployGuestbookFixture);

            await expect(guestbook.writeMessage("")).to.be.revertedWith("Nachricht darf nicht leer sein");
        });

        it("Should emit an event on new entry", async function () {
            const { guestbook, owner } = await loadFixture(deployGuestbookFixture);
            const message = "Hello Blockchain!";

            await expect(guestbook.writeMessage(message)).to.emit(guestbook, "NewEntry").withArgs(owner.address, message, anyValue);
        });

    });

});
