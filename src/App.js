import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import { connect } from 'react-redux';
import { loadInitialData } from './actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadInitialData())
  }

  render() {
    if(this.props.authedUser) {
      return (
        <div className='app-container'>
          <div className='header'>
            <UserInfo />
          </div>
          <div className='content'>
            <h3>Would you rather!</h3>
          </div>
          <div className='footer'>
            made by S.Tynskyi
          </div>
        </div> 
      );
    }

    return (
      <Login />
    );
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(App);
