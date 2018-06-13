import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import { selectUser } from './actions/user';
import { connect } from 'react-redux';
import { loadInitialData } from './actions/shared';

class App extends Component {
  //TODO: move this into Login component
  handleUserSelected = (userId) => {
    this.dispatch(selectUser(userId));
  }

  componentDidMount() {
    this.props.dispatch(loadInitialData())
  }

  render() {
    if(this.props.authUser) {
      return (
        <div>
          Would you rather app!!
        </div> );
    }

    return (
      <Login />
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  }
}

export default connect(mapStateToProps)(App);
