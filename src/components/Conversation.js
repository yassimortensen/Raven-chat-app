import React from 'react';

class Conversation extends React.Component {

  handleClick = () => {
    this.props.handleConvoClick(this.props.convo)
  }
  render(){
    return (
      <li className='link-hover' key={this.props.convo.id} onClick={this.handleClick}>
        {this.props.convo.topic}
      </li>
    );
  }
}

export default Conversation;
