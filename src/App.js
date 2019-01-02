import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import { connect } from "react-redux";
import { loadInitialData } from "./actions/shared";
import HomePage from "./components/HomePage";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddQuestion from "./components/AddQuestion";
import QuestionDetails from "./components/QuestionDetails";
import LeaderBoard from "./components/LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadInitialData());
  }

  render() {
    if (this.props.authedUser) {
      return (
        <Router>
          <div style={{ height: "100%" }} className="app-container">
            <LoadingBar />
            <Route path="/" exact component={HomePage} />
            <Route path="/add" component={AddQuestion} />
            <Route path="/login" component={Login} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/question/:id" component={QuestionDetails} />
          </div>
        </Router>
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
  };
};

export default connect(mapStateToProps)(App);
