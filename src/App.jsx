import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';



class App extends Component {
 
  constructor(props){
    super(props);
    // setting state should ONLY happen within constructor.
    this.state = { 
      
        currentUser: {name: "Bob"},
        messages: [
          {
            id: 1,
            username: "Bob",
            content: "Has anyone seen my marbles?",
          },
          {
            id: 2,
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ]
      
     };
     this.onNewMessage = this.onNewMessage.bind(this);
 }


//just for fun
componentDidMount() {
  setTimeout(() => {
  const newMessage = {id: 3, username: 'Andrea', content: 'Hello, there!'};
  const messages = this.state.messages.concat(newMessage)
  this.setState({messages:messages})
}, 1000);
}

// dynamic content
onNewMessage(content){
  setTimeout(() => {
    console.log("Simulating incoming message");
    const newMessage = {id:this.state.messages.length +1,username:this.state.currentUser.name, content: content};
    const messagesWithNewMessage = this.state.messages.concat(newMessage);
    this.setState({messages: messagesWithNewMessage})
  }, 1000);
}

 
  render() {

    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>  
      <MessageList messages = { this.state.messages } />
      <ChatBar currentUser= { this.state.currentUser.name } onNewMessage = {this.onNewMessage} />
      </div>
    );
  }
}
export default App;
