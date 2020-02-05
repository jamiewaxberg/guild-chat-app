import React from 'react';
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import {databaseRef} from "./MessageService";

// import * as firebase from "firebase";
//
// const firebaseConfig = {
//     apiKey: "AIzaSyDGT3qQa-brMROyi0wxdaFPao2Yo9XmMGs",
//     authDomain: "guild-chat-app.firebaseapp.com",
//     databaseURL: "https://guild-chat-app.firebaseio.com",
//     projectId: "guild-chat-app",
//     storageBucket: "guild-chat-app.appspot.com",
//     messagingSenderId: "989822746315",
//     appId: "1:989822746315:web:d16c3ebb698c87f133254e"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//
// const db = firebase.database();
// const ref = db.ref("/messages");

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "Jamie",
            messages: []
        };
        this.getMessages();
    }

    getMessages() {
        databaseRef.once('value', snapshot => {
            // convert messages list from snapshot
            this.setState({ messages: snapshot.val() });
        });
    };

    render() {
        console.log(this.state.messages)
        return (
            <div className="chatApp">
                {/* map over messages, agnostic of user. messages should be a flat array of objects */}
                {this.state.messages.map(messageItem => <ChatMessage key={messageItem.message} messageItem={messageItem} currentUser={this.state.user}/>)}
                {/* text box */}
                <ChatInput/>
            </div>
        );
    }

}

export default ChatApp;
