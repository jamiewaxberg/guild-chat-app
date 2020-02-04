import React from 'react';
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatApp() {
    return (
        <div className="chatApp">
            {/* map over messages, agnostic of user. messages should be a flat array of objects */}
            <ChatMessage/>
            {/* text box */}
            <ChatInput/>
        </div>
    );
}

export default ChatApp;
