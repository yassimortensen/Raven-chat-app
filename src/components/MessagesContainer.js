import React from 'react';

import NewMessageForm from './NewMessageForm';

class MessagesContainer extends React.Component {

  render(){

    let orderedMessages = this.props.conversation.messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )
    let allMessages = orderedMessages.map(message => (
      <li key ={message.id}>{message.user.username}: {message.content}</li>
    ))

    return (
      <div className='messages-container'>
        <h2>{this.props.conversation.topic}</h2>
        <ul>
          {allMessages}
        </ul>
        <NewMessageForm conversation={this.props.conversation} currentUser={this.props.currentUser}/><br />
      </div>
    );
  }
}

export default MessagesContainer;
