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
 }

//  componentDidMount() {
//    setTimeout(() => {
//      this.setState({ loading: false }); //triggers a re-render
//    }, 3000)
//  }
 
 
  render() {
    // if(this.state.loading) {
    //   return <h1>Loading...</h1>
    // }

    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>  
      <MessageList messages = { this.state.messages }/>
      <ChatBar currentUser= { this.state.currentUser } />
      </div>
    );
  }
}
export default App;
