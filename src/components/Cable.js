import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = (props) => {
  ///sets up channel subscription for each conversation
  let conversations = props.conversations.map(convo => (
    <ActionCable
      key={convo.id}
      channel={{ channel: 'MessagesChannel', conversation: convo.id }}
      onReceived = {props.handleNewMessage}
    />
  ))
  return (
    <Fragment>
      {conversations}
    </Fragment>
  );
}

export default Cable;
