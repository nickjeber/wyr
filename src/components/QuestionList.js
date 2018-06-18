import React from 'react';
import { connect } from 'react-redux';
import QuestionElement from './QuestionElement';
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

const mapStateToProps = ({users, authedUser, questions}, {answered}) => {
  const currentUser = users[authedUser];

  const filteredQuestions = answered ? 
    Object.keys(questions)
      .filter(key => currentUser.answers[key])
      .map(key => questions[key])
      .sort((a, b) => b.timestamp - a.timestamp)
    : Object.keys(questions)
      .filter(key => !currentUser.answers[key])
      .map(key => questions[key])
      .sort((a, b) => b.timestamp - a.timestamp);

  return {
    questions: filteredQuestions,
    currentUser,
    authedUser: currentUser.id
  }
}

export default connect(mapStateToProps)(QuestionList);