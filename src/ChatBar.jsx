import React, {Component} from 'react';



class ChatBar extends Component {
    render(){
        return(
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue= { `Name: ${this.props.currentUser.name} ` } />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
            </footer>
        )
    }
}

// class CurrentUser extends Component {
//     render(){
//         const onChange = event => {

//         }
//     }
// }


export default ChatBar;