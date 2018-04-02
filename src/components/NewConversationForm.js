import React from 'react';
import { API_ROOT_PATH, HEADERS } from '../constants';

class NewConversationForm extends React.Component {

  state = {
    topic: ''
  }

  handleChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${API_ROOT_PATH}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    })
    this.setState({ topic: '' })
  }

  render() {
    return (
      <div className="conversation-form">
        <form onSubmit={this.handleSubmit}>
          <label>New Conversation:</label><br />
          <input type="text" value={this.state.topic} onChange={this.handleChange} />
          <input type="submit" className="w3-btn w3-white w3-border w3-border-green w3-round-xlarge" style={{marginLeft: '1%'}}/>
        </form>
      </div>
    );
  }
}

export default NewConversationForm;
