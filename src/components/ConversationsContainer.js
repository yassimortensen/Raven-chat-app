import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT_PATH } from '../constants';

import NewConversationForm from './NewConversationForm';
import MessagesContainer from './MessagesContainer';
import CableArea from './CableArea';

class ConversationsContainer extends React.Component {

  state = {
    conversations: [],
    selectedConversation: null
  }

  componentDidMount = () => {
    fetch(`${API_ROOT_PATH}/conversations`)
      .then(res => res.json())
      .then(res => this.setState({conversations: res}))
  }

  handleNewConversation = (response) => {
    this.setState({
      conversations: [...this.state.conversations, response]
    })
  }

  handleNewMessage = (response) => {
    let foundConversation = this.state.conversations.find(
      convo => convo.id === response.conversation_id
    )
    foundConversation.messages = [...foundConversation.messages, response]
    //////this might not work...
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
    console.log(this.state)

    const listOfConversations = this.state.conversations.map(convo => (
      <li key={convo.id} onClick={() => this.handleConvoClick(convo)}>
        {convo.topic}
      </li>
    ))

    let selectedConversation;

    if (this.state.selectedConversation){
      selectedConversation = <MessagesContainer conversation={selectedConversation}/>
    } else {
      selectedConversation = <p>Please Choose a Conversation Above</p>
    }

    return (
      <div>
        <ActionCable
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleNewConversation}
        />
        {this.state.conversations.length ? (
          <CableArea conversations = {this.state.conversations} handleNewMessage={this.handleNewMessage}/>
        ) : null}
        <h2>Conversations</h2>
        <ul className="conversations-list">
          {listOfConversations}
        </ul>
        {selectedConversation}
        <NewConversationForm />
      </div>
    );
  }
}

export default ConversationsContainer;
