import React from 'react';
import { API_ROOT_PATH, HEADERS } from '../constants';

class NewMessageForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      content: '',
      user_id: 0,
      conversation_id: 0
    }
  }

  componentDidMount = () => {
    this.setState({
      content: '',
      user_id: this.props.currentUser.id,
      conversation_id: this.props.conversation.id
    })
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('will receive', nextProps)
    this.setState({
      content: '',
      user_id: nextProps.currentUser.id,
      conversation_id: nextProps.conversation.id
    })
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${API_ROOT_PATH}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    })
    .then(this.setState({ content: '' }))
  }

  render() {

    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label><br />
          <input type="text" value={this.state.content} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewMessageForm;
