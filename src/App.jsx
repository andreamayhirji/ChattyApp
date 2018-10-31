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
     this.socket = new WebSocket(`ws://${window.location.hostname}:3001`)
 }


  componentDidMount() {

    setTimeout(() => {
      const newMessage = {id: 3, username: 'Andrea', content: 'Hello, there!'};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages:messages})
    }, 1000);

    // this will listen for a message from the WebSocket, and console.log the data from that event.
    this.socket.onmessage = function(event){ 
      console.log(event.data); 
    };

    // some other stuff for later
    // socket.onopen = () => socket.send('things in the thing, stuff in the stuff');

    // socket.send("A message for you");
    // socket.onopen = function(event) {
    //   socket.send('NEW CONNECTION');
    //   console.log('NEW')
    // };

  }

  // dynamic content
  onNewMessage(content){
    setTimeout(() => {
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
