import React from "react";
import { connect } from "react-redux";
import { selectUser } from "../actions/user";

class Login extends React.Component {
  state = {
    selectedUser: null
  };

  userChanged = e => {
    this.setState({
      selectedUser: e.target.value
    });
  };

  logIn = () => {
    this.props.dispatch(selectUser(this.state.selectedUser));
  };

  render() {
    return (
      <div className="login-container">
        <h1>Would You Rather</h1>
        <div className="login-form">
          <select className="selector" onChange={this.userChanged}>
            <option value={null}>Select user...</option>
            {this.props.users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button onClick={this.logIn}>Log in</button>
        </div>
      </div>
    );
  }
}

const mapStateToPorps = state => {
  const users = Object.keys(state.users).map(key => state.users[key]);
  return {
    users
  };
};

export default connect(mapStateToPorps)(Login);
