import React from 'react';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import Header from './Header';

const UNANSWERED = 0;
const ANSWERED = 1;

class HomePage extends React.Component {
  state = {
    questionView: UNANSWERED
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <Header /> 
        <div className='content'>
         <h1>Would You Rather</h1>
           <QuestionList answered={this.state.questionView === ANSWERED} />
          <div>
            <button className="answer-buttons"
              disabled={this.state.questionView === UNANSWERED}
              onClick={() => this.setState({questionView: UNANSWERED})}>Unanswered questions</button>
            <button  className="answer-buttons"
              disabled={this.state.questionView === ANSWERED}
              onClick={() => this.setState({questionView: ANSWERED})}>Answered questions</button>
          </div>
         
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