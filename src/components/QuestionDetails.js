import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';

class QuestionDetails extends React.Component {
  renderAnswerMark = (selectedOption) => {
    const isChecked = this.props.currentUser.answers[this.props.question.id] === selectedOption;
    return (
      <button
        disabled={true} 
        className={'vote-button ' + (isChecked ? 'selected' : '')}></button>
    );
  }

  render() {
    return (
      <div>
        <AppHeader />
        {this.props.notFound && <span>Requested question not found</span>}
        {!this.props.notFound && (<div className='content'>
          <h4>Would You Rather</h4>
          <div className='question-details-content'>
            <div className='question-details-user-info'>
              Author:
              <img className='user-avatar' src={this.props.author.avatarURL} alt='author' />
              <span>{this.props.author.name}</span>
            </div>
            <div className='option-text'>
              <span><b>Option one:</b> {this.renderAnswerMark('optionOne')}{this.props.question.optionOne.text}</span>
            </div>
            <div className='option-text'>
              <span><b>Option two:</b> {this.renderAnswerMark('optionTwo')}{this.props.question.optionTwo.text}</span>
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}

const mapStateToProps = ({questions, users, authedUser}, {match}) => {
  const id = match.params.id;
  const question = questions[id];

  if(!question) {
    return {
      notFound: true
    }
  }

  return {
    question: question,
    users: users,
    currentUser: users[authedUser],
    answer: users[question.author].answers[question.id],
    author: users[question.author]
  };
}

export default connect(mapStateToProps)(QuestionDetails);