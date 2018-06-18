import React from 'react';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';

const UNANSWERED = 0;
const ANSWERED = 1;

class HomePage extends React.Component {
  state = {
    questionView: UNANSWERED
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <AppHeader />
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

export default connect(mapStoreToProps)(HomePage);