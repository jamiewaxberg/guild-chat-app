import React, {Component} from 'react';
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import {databaseRef} from "./MessageService";

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Hardcoded user, this would be replaced with whatever user is authorized if an auth feature is added
            currentUser: "Jamie",
            messages: {}
        };
        this.getMessages();
    }

    // Getting messages from database
    getMessages() {
        databaseRef.on('value', snapshot => {
            this.setState({ messages: snapshot.val() });
        });
    };

    render() {
        return (
            <div className="chatApp">
                {/*Mapping over messages, agnostic of user. The appearance of which user sent which message is controlled via styling*/}
                {Object.keys(this.state.messages).map(messageItem => <ChatMessage key={this.state.messages[messageItem].message} messageItem={this.state.messages[messageItem]} currentUser={this.state.currentUser}/>)}
                <ChatInput currentUser={this.state.currentUser}/>
            </div>
        );
    }

}

export default ChatApp;
