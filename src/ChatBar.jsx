import React, {Component} from 'react';



class ChatBar extends Component {
    constructor(props){
        super(props);
        // setting state should ONLY happen within constructor.
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        
     }


    handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.props.addMessage(event.target.value);

        }
    }

    handleUsernameChange(event) {
        if(event.key === 'Enter') {
            this.props.changeUsername(event.target.value);
        }
    }

    render(){


        return(
            <footer className="chatbar">
                {/* <input className="chatbar-username" onKeyPress={ this.handleUsernameChange } defaultValue= { this.props.currentUser}  /> */}
                <input className="chatbar-username" onKeyPress={ this.handleUsernameChange }  placeholder="Enter your Username" />
                <input className="chatbar-message" onKeyPress={ this.handleKeyPress } placeholder="Type a message and hit ENTER" />
            </footer>
        )
    }
}


export default ChatBar;