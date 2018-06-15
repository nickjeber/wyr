import React from 'react';

export default class Question extends React.Component {
  state = {
    optionOne: false,
    optionTwo: false
  }

  optionTwoChanged = () => {
    this.setState((prev) => ({
      optionOne: false,
      optionTwo: !prev.optionTwo
    }));

    this.props.answerQuestion(this.props.id, 'optionOne');
  }

  optionOneChanged = () => {
    this.setState((prev) => ({
      optionTwo: false,
      optionOne: !prev.optionOne
    }));

    this.props.answerQuestion(this.props.id, 'optionTwo');
  }

  render() {
    return (
      <div className='question'>
        <div>
          <label>
            <input type='checkbox' 
              onChange={this.optionOneChanged}
              checked={this.state.optionOne}/>{this.props.optionOne}
          </label>
        </div>
        <div>
          <label>
            <input type='checkbox' 
              onChange={this.optionTwoChanged}
              checked={this.state.optionTwo}/>{this.props.optionTwo}
            </label>
        </div>
      </div>
    );
  }
}