import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
        currentUser: {name: 'Anonymous'},
        messages: [], //messages from the server will be stroed here
        count: 0
     };
     
     this.addMessage = this.addMessage.bind(this);
     this.changeUsername = this.changeUsername.bind(this);
     this.socket = new WebSocket(`ws://${window.location.hostname}:3001`)
 }


//  this.socket.onmessage = (event) => {

//   let usersOnline = JSON.parse(event)
//   console.log('usersOnline',usersOnline);
//   if(JSON.parse(event.type) === 'usersOnline' ) {
//     console.log('inside');
//     // this.setState({count:}

//     }

//Listeners that load and wait for an event to trigger them:

  componentDidMount() {

    this.socket.onopen = function(event) {
      console.log('Client connected to server');
    }
    this.socket.onmessage = (event) => {
      
      let parsed = JSON.parse(event.data)
      console.log('parsed', parsed)

      if(parsed.type === 'usersOnline' ) {
        this.setState({ count:parsed.content })
      } else {
        const messagesWithNewMessage = this.state.messages.concat(parsed);
        this.setState({messages: messagesWithNewMessage})
      }
    }
  }


//before we send to server we do these things:

  addMessage(content){
      const newMessage = {
        type: 'postMessage',
        username: this.state.currentUser.name, 
        content: content
      };
      // send thie newMessage to the server 
      this.socket.send(JSON.stringify(newMessage));
  }

  changeUsername(newUsername) {
    const newUser = {
      type: 'postNotification',
      username: newUsername,
      content: `${ this.state.currentUser.name } has changed their name to ${ newUsername }`
    }
    this.setState( { currentUser: { name:newUsername } } )
    this.socket.send(JSON.stringify(newUser));
    }


// render the content based on events:

  render() {
    return (
      <div>
      <NavBar count={this.state.count} />
      <MessageList messages = { this.state.messages } />
      <ChatBar currentUser= { this.state.currentUser.name } addMessage = {this.addMessage} changeUsername = { this.changeUsername } />
      </div>
    );
  }
}
export default App;
