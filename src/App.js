import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { connect } from 'react-redux';
import { loadInitialData } from './actions/shared';
import MainContent from './components/HomePage';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadInitialData())
  }

  render() {
    if(this.props.authedUser) {
      return (
        <div style={{height: '100%'}}>
          <LoadingBar />
          <MainContent />
        </div>
      );
    }

    return (
      <div>
        <LoadingBar />
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(App);
