import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT_PATH } from '../constants';

import NewConversationForm from './NewConversationForm';
import MessagesContainer from './MessagesContainer';
import Cable from './Cable';
import Conversation from './Conversation';

class ConversationsContainer extends React.Component {

  constructor(){
    super()

    this.state = {
      conversations: [],
      selectedConversation: null
    }
  }

  componentDidMount = () => {
    fetch(`${API_ROOT_PATH}/conversations`)
      .then(res => res.json())
      .then(res => this.setState({conversations: res}))
  }

  handleNewConversation = (response) => {
    //receives new conversation from conversation channel
    this.setState({
      conversations: [...this.state.conversations, response.conversation]
    })
  }

  handleNewMessage = (response) => {
    //receives new message from message channel
    let foundConversation = this.state.conversations.find(
      convo => convo.id === response.message.conversation.id
    )
    foundConversation.messages = [...foundConversation.messages, response.message]
    this.setState({
      conversations: [...this.state.conversations]
    })
  }

  handleConvoClick = (convo) => {
    this.setState({
      selectedConversation: convo
    })
  }

  render() {
    const listOfConversations = this.state.conversations.map(convo => (
      <Conversation key={convo.id} handleConvoClick={this.handleConvoClick} convo={convo} />
    ))

    let selectedConversation;

    if (this.state.selectedConversation){
      selectedConversation = <MessagesContainer currentUser={this.props.currentUser} conversation={this.state.selectedConversation}/>
    } else {
      selectedConversation = <p>Please Choose a Conversation Above</p>
    }

    return (
      <Fragment>
        <ActionCable
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleNewConversation}
        />
        {this.state.conversations.length ? (
          <Cable conversations={this.state.conversations} handleNewMessage={this.handleNewMessage}/>
        ) : null}
        <h2 className="title">Conversations</h2>
        <NewConversationForm />
        <ul className="conversations-list">
          {listOfConversations}
        </ul>
        <h2 className="title">Messages</h2>
        {selectedConversation}
      </Fragment>
    );
  }
}

export default ConversationsContainer;
