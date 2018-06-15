import React from 'react';
import UserInfo from './UserInfo';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import { loadQuestions } from '../actions/shared';

class MainContent extends React.Component {
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
          <div>Unanswered questions</div>
          <QuestionList />
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