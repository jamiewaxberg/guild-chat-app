import React from 'react';

function ChatMessage(props) {
    const {
        messageItem,
        currentUser
    } = props;

    const {
        message,
        user
    } = messageItem;

    return (
        // The ternary here controls which messages appear to be sent by the current user
        <span className={currentUser === user ? 'sentMessage chatMessage' : 'receivedMessage chatMessage'}>{message}</span>
    );
}

export default ChatMessage;
