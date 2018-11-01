
import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        const messages = this.props.messages.map(message => {
            console.log('what is message on messagelist?', message)

            return <Message 
                    key={ message.id } 
                    content={ message.content } 
                    type={ message.type }
                    username={ message.currentUser }
                    /> 
        })

        return (
            <main className="messages">
                {messages}
            </main>
        )
    }
}

export default MessageList;
