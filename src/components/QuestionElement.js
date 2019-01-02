import React from "react";
import { Link } from "react-router-dom";

export default class QuestionElement extends React.Component {
  state = {
    optionOne: this.props.answer === "optionOne",
    optionTwo: this.props.answer === "optionTwo"
  };

  optionTwoChanged = e => {
    if (this.props.answer) {
      return;
    }

    e.preventDefault();

    this.setState(prev => ({
      optionOne: false,
      optionTwo: !prev.optionTwo
    }));

    this.props.answerQuestion(this.props.id, "optionTwo");
  };

  optionOneChanged = e => {
    if (this.props.answer) {
      return;
    }

    e.preventDefault();

    this.setState(prev => ({
      optionTwo: false,
      optionOne: !prev.optionOne
    }));

    this.props.answerQuestion(this.props.id, "optionOne");
  };

  render() {
    return (
      <div className="question">
        <Link to={`/question/${this.props.id}`}>
          <div>
            <label
              className="option-label"
              onClick={e => this.optionOneChanged(e)}
            >
              <button
                disabled={this.props.answer}
                className={
                  "vote-button " + (this.state.optionOne ? "selected" : "")
                }
                onClick={e => this.optionOneChanged(e)}
              />
              {this.props.optionOne}
            </label>
          </div>
          <div>
            <label
              className="option-label"
              onClick={e => this.optionTwoChanged(e)}
            >
              <button
                disabled={this.props.answer}
                className={
                  "vote-button " + (this.state.optionTwo ? "selected" : "")
                }
                onClick={e => this.optionTwoChanged(e)}
              />
              {this.props.optionTwo}
            </label>
          </div>
          <div className="link-to-results">
            Click Here to View Poll Results &raquo;
          </div>
        </Link>
      </div>
    );
  }
}
