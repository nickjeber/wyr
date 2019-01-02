import React from 'react';
import Nav from './Nav';
import UserInfo from './UserInfo';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <UserInfo />
        <Nav />
      </div>
    );
  }
}