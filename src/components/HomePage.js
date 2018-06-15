import React from 'react';
import UserInfo from './UserInfo';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import { loadQuestions } from '../actions/shared';

const UNANSWERED = 0;
const ANSWERED = 1;

class MainContent extends React.Component {
  state = {
    questionView: UNANSWERED
  }

  componentDidMount() {
    this.props.dispatch(loadQuestions());
  }

  render() {
    return (
      <div className='app-container'>
        <div className='header'>
          <UserInfo />
        </div>
        <div className='content'>
          <h3>Would you rather!</h3>
          <div>
            <button 
              disabled={this.state.questionView === UNANSWERED}
              onClick={() => this.setState({questionView: UNANSWERED})}>Unanswered questions</button>
            <button 
              disabled={this.state.questionView === ANSWERED}
              onClick={() => this.setState({questionView: ANSWERED})}>Answered questions</button>
          </div>
          <QuestionList answered={this.state.questionView === ANSWERED} />
        </div>
        <div className='footer'>
          made by S.Tynskyi
        </div>
      </div> 
    );
  }
}

const mapStoreToProps = (store) => {
  return {
  }
}

export default connect(mapStoreToProps)(MainContent);