import React, {Component} from 'react';
import {databaseRef} from "./MessageService";

class ChatInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    // post to database
    sendMessage(currentUser) {
        databaseRef.push({
            user: currentUser,
            message: this.state.value
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

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
