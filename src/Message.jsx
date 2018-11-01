import React, {Component} from 'react';

class Message extends Component {
    constructor(props){
        super(props);
        this.postMessage = this.postMessage.bind(this);
    }

    postMessage() {

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
            { this.postMessage() }
        </div>
        )
    }

}

export default Message;