import React, { Component } from 'react';
import './App.css';
import Login from './components/login';

class App extends Component {
  state = {
    user: null
  }

  render() {
    if(this.state.user)  {
      return (
        <div>
          Would you rather app!!
        </div> );
    }

    return (
      !this.state.user && (
        <Login users={[]}/>
      )
    );
  }
}

export default App;
