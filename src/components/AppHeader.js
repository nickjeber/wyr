import React from 'react';
import Nav from './Nav';
import UserInfo from './UserInfo';

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className='header'>
        <Nav />
        <UserInfo />
      </div>
    );
  }
}