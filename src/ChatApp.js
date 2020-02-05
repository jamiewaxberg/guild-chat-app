import React, {Component} from 'react';
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import {databaseRef} from "./MessageService";

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "Jamie",
            messages: {}
        };
        this.getMessages();
    }

    getMessages() {
        databaseRef.on('value', snapshot => {
            this.setState({ messages: snapshot.val() });
        });
    };

    render() {
        return (
            <div className="chatApp">
                {Object.keys(this.state.messages).map(messageItem => <ChatMessage key={this.state.messages[messageItem].message} messageItem={this.state.messages[messageItem]} currentUser={this.state.currentUser}/>)}
                <ChatInput currentUser={this.state.currentUser}/>
            </div>
        );
    }

}

export default ChatApp;
