import React, {Component} from 'react';



class ChatBar extends Component {
    constructor(props){
        super(props);
        // setting state should ONLY happen within constructor.
        this.handleKeyPress = this.handleKeyPress.bind(this);
     }


    handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.props.onNewMessage(event.target.value);
            //console.log('pressed enter');
            //console.log(event.target.value);
            //return event.target.value
        }
    }
    render(){


        return(
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue= { `Name: ${this.props.currentUser.name} ` } />
                <input className="chatbar-message" onKeyPress={ this.handleKeyPress } placeholder="Type a message and hit ENTER" />
            </footer>
        )
    }
}


export default ChatBar;