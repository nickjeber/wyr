import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { answerQuestion } from "../actions/questions";

class QuestionDetails extends React.Component {
  state = {
    optionsDisabled: this.props.answer
  };

  optionChanged = option => {
    this.setState({ optionsDisabled: true });
    this.props.dispatch(
      answerQuestion(this.props.currentUser.id, this.props.question.id, option)
    );
  };

  renderAnswerMark = selectedOption => {
    const isChecked =
      this.props.currentUser.answers[this.props.question.id] === selectedOption;
    return (
      <button
        disabled={this.state.optionsDisabled}
        className={"vote-button " + (isChecked ? "selected" : "")}
        onClick={() => this.optionChanged(selectedOption)}
      />
    );
  };

  renderStat = option => {
    if (this.props.answer) {
      const totalVotes = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length; 
      const votes = this.props.question[option].votes.length;
      const votesInPercent = (
        (votes / totalVotes * 100)
      ).toFixed(2);
      return (
        <span>
          {votes} vote(s) ({votesInPercent}%)
        </span>
      );
    }

    return null;
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.notFound && <span>Requested question not found</span>}
        {!this.props.notFound && (
          <div className="content">
            <h1>Would You Rather</h1>
            <div className="question-details-content">
              <div className="question-details-user-info">
                <img
                  className="user-avatar"
                  src={this.props.author.avatarURL}
                  alt="author"
                />
                <span className="author-name">{this.props.author.name}</span>
              </div>
              <div className="option-text">
                <span>
                  {this.renderStat("optionOne")}{" "}
                  {this.renderAnswerMark("optionOne")}
                  {this.props.question.optionOne.text}
                </span>
              </div>
              <div className="option-text">
                <span>
                  {this.renderStat("optionTwo")}{" "}
                  {this.renderAnswerMark("optionTwo")}
                  {this.props.question.optionTwo.text}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, { match }) => {
  const id = match.params.id;
  const question = questions[id];

  if (!question) {
    return {
      notFound: true
    };
  }

  return {
    question: question,
    users: users,
    currentUser: users[authedUser],
    answer: users[authedUser].answers[question.id],
    author: users[question.author]
  };
};

export default connect(mapStateToProps)(QuestionDetails);
