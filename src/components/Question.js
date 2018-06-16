import React from 'react';

export default class QuestionElement extends React.Component {
  state = {
    optionOne: this.props.answer === 'optionOne',
    optionTwo: this.props.answer === 'optionTwo'
  }

  optionTwoChanged = () => {
    this.setState((prev) => ({
      optionOne: false,
      optionTwo: !prev.optionTwo
    }));

    this.props.answerQuestion(this.props.id, 'optionTwo');
  }

  optionOneChanged = () => {
    this.setState((prev) => ({
      optionTwo: false,
      optionOne: !prev.optionOne
    }));

    this.props.answerQuestion(this.props.id, 'optionOne');
  }

  render() {
    return (
      <div className='question'>
        <div>
          <label>
            <input type='checkbox' 
              onChange={this.optionOneChanged} 
              disabled={this.props.answer}
              checked={this.state.optionOne}/>
            {this.props.optionOne}
          </label>
        </div>
        <div>
          <label>
            <input type='checkbox' 
              onChange={this.optionTwoChanged}
              disabled={this.props.answer}
              checked={this.state.optionTwo}/>
            {this.props.optionTwo}
          </label>
        </div>
      </div>
    );
  }
}