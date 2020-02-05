import React, {Component} from 'react';
import {databaseRef} from "./MessageService";

class ChatInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    // Post message to database with user
    sendMessage(currentUser) {
        databaseRef.push({
            user: currentUser,
            message: this.state.value
        })
    }

    // This handles the input text in a controlled way
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // On click of the sutbmit button, post to database & clear input field
    handleOnClick(currentUser) {
        this.sendMessage(currentUser);
        this.setState({value: ''});
    }

    render () {
        return (
            <div className="chatInputWrapper">
                <input type="text" id="chatInput" value={this.state.value} onChange={(e) => this.handleChange(e)} />
                <button onClick={() => this.handleOnClick(this.props.currentUser)}>Submit</button>
            </div>
        );
    }
}

export default ChatInput;
