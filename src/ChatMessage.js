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
        <span className={currentUser === user ? 'sentMessage chatMessage' : 'receivedMessage chatMessage'}>{message}</span>
    );
}

export default ChatMessage;
