import React, { Component } from 'react';
import './App.css';

import ConversationsContainer from './components/ConversationsContainer'

class App extends Component {
  render() {
    return (
      <div>
        Hello from App
        <ConversationsContainer />
      </div>
    );
  }
}

export default App;
