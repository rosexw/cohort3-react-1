//Thursday Feb 15, Day 6

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { friends } from './data/ListofFriends';

class FriendCard extends Component {
  constructor () {
    super();
    this.state ={
      showDetails: false,
    }

      // friends.reduce((acc, curr) => {
      //   return {...acc, [curr.id]:false}
      // }, {});
  }
  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails});
  }

  render() {
    const { first, last, isBestFriend, age } = this.props;
      return (
        <div style={{marginTop: "15px"}}>
          <div> {`${first} ${last}`} </div>
          <button onClick={this.toggleDetails}>Details: </button>
          {this.state.showDetails && (
            <div>
              {`Age:  ${age} isBestFriend: ${isBestFriend}`}
            </div>
          )}
        </div>
      )
    }
}

export default FriendCard;
