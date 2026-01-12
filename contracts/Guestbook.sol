// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Guestbook {

    struct Entry { 
        address writer;
        string message;
        uint256 timestamp;
    }

    event NewEntry(address indexed writer, string message, uint256 timestamp);

    Entry[] public entries;

    function writeMessage(string memory _message) public {
        require(bytes(_message).length > 0, "Nachricht darf nicht leer sein");

        Entry memory newEntry = Entry ({
            writer: msg.sender,
            message: _message,
            timestamp: block.timestamp
        });

        entries.push(newEntry);

        emit NewEntry(msg.sender, _message, block.timestamp);
    }

}