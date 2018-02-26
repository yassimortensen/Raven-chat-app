import React, { Component } from 'react';
import './App.css';

import ConversationsContainer from './components/ConversationsContainer'
import { API_ROOT_PATH, HEADERS } from './constants';

class App extends Component {

  state = {
    username: '',
    currentUser: ''
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${API_ROOT_PATH}/users`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(res => this.setState({
      username: '',
      currentUser: res
    }))
  }

  render() {
    let loggedIn;

    if (this.state.currentUser){
      loggedIn = <ConversationsContainer currentUser={this.state.currentUser}/>
    } else {
      loggedIn =
        <div>
          <h2>Please Log In Below</h2>
          <form onSubmit={this.handleSubmit}>
          <label>Username:</label><br />
          <input type='text' value={this.state.username} onChange={this.handleChange} />
          <input type='submit' />
          </form>
        </div>
    }
    return (
      <div className='App'>
        {loggedIn}
      </div>
    );
  }
}

export default App;
