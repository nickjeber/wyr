import React from 'react';
import { connect } from 'react-redux';
import QuestionElement from './Question';
import { answerQuestion } from '../actions/questions';

class QuestionList extends React.Component {
  handleAnswerQuestion = (questionId, answer) => {
    this.props.dispatch(answerQuestion(this.props.authedUser, questionId, answer));
  }

  render() {
    return (
      <div className='question-container'>
        {this.props.questions.map((question) => (
          <QuestionElement key={question.id} 
            answer={this.props.currentUser.answers[question.id]}
            optionOne={question.optionOne.text} 
            optionTwo={question.optionTwo.text}
            id={question.id}
            answerQuestion={this.handleAnswerQuestion}/>
        ))}
        {this.props.questions.length === 0 && 
        (
          <div>No questions left</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, {answered}) => {
  const currentUser = state.users[state.authedUser];

  const questions = answered ? 
    Object.keys(state.questions)
      .filter(key => currentUser.answers[key])
      .map(key => state.questions[key])
      .sort((a, b) => a.timestamp > b.timestamp)
    : Object.keys(state.questions)
      .filter(key => !currentUser.answers[key])
      .map(key => state.questions[key])
      .sort((a, b) => a.timestamp > b.timestamp);

  return {
    questions,
    currentUser,
    authedUser: currentUser.id
  }
}

export default connect(mapStateToProps)(QuestionList);