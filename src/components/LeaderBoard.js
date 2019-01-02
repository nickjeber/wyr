import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class LeaderBoard extends React.Component {
  getNumAskedQuestions = (user) => {
    return Object.keys(this.props.questions)
            .filter(key => this.props.questions[key].author === user.id).length;
  }

  render() {
    return (
      <div>
        <Header />
        <div className='content'>
          <h1>Leader board</h1>
          {this.props.users.map(user => (
            <div key={user.id} className='leaderboard-user-info'>
              <img className='user-avatar' src={user.avatarURL} alt='author' />
              <div className='leaderboard-user-info-container'>
                <div><strong>{user.name}</strong></div>
                <div>{this.getNumAskedQuestions(user)} asked questions</div>
                <div>{Object.keys(user.answers).length} answers</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({questions, users}) => {
  const orderedUsers = Object.keys(users).sort((aKey, bKey) => {
    const nAnswersA = Object.keys(users[aKey].answers).length;
    const nAnswersB = Object.keys(users[bKey].answers).length;
    const nAuthorA = Object.keys(questions).filter(key => questions[key].author === aKey).length;
    const nAuthorB = Object.keys(questions).filter(key => questions[key].author === bKey).length;
    
    return (nAuthorB + nAnswersB) - (nAuthorA + nAnswersA);
  })
  .map(key => users[key]);

  return {
    questions,
    users: orderedUsers
  }
}

export default connect(mapStateToProps)(LeaderBoard);