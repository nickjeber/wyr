import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import { Redirect } from 'react-router-dom';
import { addQuestion } from '../actions/questions';

class AddPoll extends React.Component {
  state = {
    redirectToHome: false,
    optionOneText: '',
    optionTwoText: ''
  }

  onAddQuestion = () => {
    this.props.dispatch(addQuestion(this.state.optionOneText, this.state.optionTwoText, this.props.authedUser));
    this.setState({redirectToHome: true});
  }

  render() {
    if(this.state.redirectToHome) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <AppHeader />
        <div className='content'>
          <h4>Add new poll</h4>
          <div className='new-question-container'>
            <div>
              <div className='title'>Would you rather</div>
              <div className='option'>
                <span>Option one: </span>
                <input type='text' value={this.state.optionOneText} 
                  onChange={(e) => this.setState({optionOneText: e.target.value})} />
              </div>
              <div className='option'>
                <span>Option two: </span>
                <input type='text' value={this.state.optionTwoText}
                  onChange={(e) => this.setState({optionTwoText: e.target.value})}/>
              </div>
            </div>
            <div className='add-question-buttons'>
              <button 
                onClick={this.onAddQuestion} 
                disabled={!this.state.optionOneText.length || !this.state.optionTwoText.length}>Save</button>
              <button onClick={() => this.setState({redirectToHome: true})}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(AddPoll);