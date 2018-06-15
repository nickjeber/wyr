import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { answerQuestion } from '../actions/questions';

class QuestionList extends React.Component {
  answerQuestion = (questionId, answer) => {
    this.props.dispatch(answerQuestion(this.props.authedUser, questionId, answer));
  }

  render() {
    return (
      <div className='question-container'>
        {this.props.questions.map((question) => (
          <Question key={question.id} 
            optionOne={question.optionOne.text} 
            optionTwo={question.optionTwo.text}
            id={question.id}
            answerQuestion={this.answerQuestion}/>
        ))}
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
    : Object.keys(state.questions)
      .filter(key => !currentUser.answers[key])
      .map(key => state.questions[key]);

  return {
    questions,
    authedUser: currentUser.id
  }
}

export default connect(mapStateToProps)(QuestionList);