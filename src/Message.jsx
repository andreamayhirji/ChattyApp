import React, {Component} from 'react';

class Message extends Component {
    constructor(props){
        super(props);
        this.postMessage = this.postMessage.bind(this);
    }

    postMessage() {
        console.log('props?',this.props.type)
        console.log('username:', this.props.username)
        console.log('content:', this.props.content)
        console.log('key id', this.props.id)
        console.log('message type?', this.props.type)

        switch(this.props.type) {
            case 'incomingMessage':
                return (
                <div className="message">
                    <span className="message-username">{ this.props.username }</span>
                    <span className="message-content">{ this.props.content }</span>
                </div>
            )
            case 'incomingNotification':
                return (
                <div className="message system">{ this.props.content }</div>
                )
        }  
    }  

    render(){
        return (
        <div>
            {/* <div className="message">
                <span className="message-username">{ this.props.message.username }</span>
                <span className="message-content">{ this.props.message.content }</span>
            </div> */}

                { this.postMessage() }
    </div>
        )
    }

}

export default Message;