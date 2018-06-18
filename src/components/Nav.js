import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render(){
    return (
      <div className='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add question</Link>
        <Link to='/leaderboard'>Leader board</Link>
      </div>
    );
  }
}