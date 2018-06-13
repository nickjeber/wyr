import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render(){
    return (
      <div className='login-container'>
        <h4>Log in</h4>
        <div className='login-form'>
          <span>Select user from the list</span>
          <select>
            {this.props.users.map((user) => (
              <option key={user.id}>{user.name}</option>
            ))}
          </select>
          <button>Log in</button>
        </div>
        <h4>Or sign up</h4>
        <div className='signup-form'>
        </div>
      </div>
    );
  }
}

const mapStateToPorps = (state) => {
  return {
    users: state.users || []
  }
}

export default connect(mapStateToPorps)(Login);