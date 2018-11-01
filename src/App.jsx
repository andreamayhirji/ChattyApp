import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';



class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
        currentUser: {name: "Bob"},
        messages: [] //messages from teh server will be stroed here
     };
     
     this.addMessage = this.addMessage.bind(this);
     this.socket = new WebSocket(`ws://${window.location.hostname}:3001`)
 }


  componentDidMount() {

    // setTimeout(() => {
    //   const newMessage = {id: 3, username: 'Andrea', content: 'Hello, there!'};
    //   const messages = this.state.messages.concat(newMessage)
    //   this.setState({messages:messages})
    // }, 1000);

    // this will listen for a message from the WebSocket, and console.log the data from that event.
    // this.socket.onmessage = function(event){ 
    //   console.log(event.data); 
    // };
    this.socket.onopen = function(event) {
      console.log('Client connected to server');
    }

    this.socket.onmessage = function(event){
      console.log('what is the event', event)
      const newMessage = {
        id: data.id,
        username: data.currentUser, 
        content: data.content
      };
      const messagesWithNewMessage = this.state.messages.concat(newMessage);
      this.setState({messages: messagesWithNewMessage})
     
    }

    // some other stuff for later
    // socket.onopen = () => socket.send('things in the thing, stuff in the stuff');

    // socket.send("A message for you");
    // socket.onopen = function(event) {
    //   socket.send('NEW CONNECTION');
    //   console.log('NEW')
    // };

  }

  // dynamic content
  addMessage(content){
      const newMessage = {username:this.state.currentUser.name, content: content};
      this.socket.send(JSON.stringify(newMessage));

      // const messagesWithNewMessage = this.state.messages.concat(newMessage);
      // this.setState({messages: messagesWithNewMessage})
  }



  // this.socket.on('message', function incoming(data) {
  //   console.log()
  // })

 
  render() {

    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>  
      <MessageList messages = { this.state.messages } />
      <ChatBar currentUser= { this.state.currentUser.name } addMessage = {this.addMessage} />
      </div>
    );
  }
}
export default App;
