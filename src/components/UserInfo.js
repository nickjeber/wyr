import React from "react";
import { connect } from "react-redux";
import { selectUser } from "../actions/user";

class UserInfo extends React.Component {
  logout = () => {
    this.props.dispatch(selectUser(null));
  };

  render() {
    return (
      <div className="user-info">
        <img
          src={this.props.user.avatarURL}
          className="user-avatar"
          alt="User avatar"
        />
        <span>
          Welcome back, <strong>{this.props.user.name}</strong>
        </span>
        <button title="Click to log out" onClick={this.logout}>
          <i>(Log out)</i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users[state.authedUser]
  };
};

export default connect(mapStateToProps)(UserInfo);
