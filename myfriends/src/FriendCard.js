//Thursday Feb 15, Day 6

import React, { Component } from 'react';
import './App.css';
// import { friends } from './data/ListofFriends';

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
  toggleChild = () => {
    this.setState({ showDetails: !this.state.showDetails});
  }

  toggleAll = () => {
    Object.keys(this.state).map(id => this.toggleChild);
  }

  // toggleDetails = () => {
  //   this.setState({ [id] : !this.state[id]});
  // }
  //
  // toggleAll = () => {
  //   Object.keys(this.state).map(id => toggleDetails);
  // }

  render() {
    const { id, first, last, isBestFriend, age } = this.props;
      return (
        <div style={{marginTop: "15px"}}>
          <div> {`${first} ${last}`} </div>
          <button onClick={this.toggleDetails}>Details: </button>
          {this.state.showDetails && (
            <div>
              {`id: ${id} Age:  ${age} isBestFriend: ${isBestFriend}`}
            </div>
          )}
        </div>

        // const { id, first, last, isBestFriend, age, toggle } = this.props;
        //   return (
        //     <div style={{marginTop: "15px"}}>
        //       <div> {`${first} ${last}`} </div>
        //       <button onClick={() => toggle(id)}>Details: </button>
        //       {this.state.showDetails && (
        //         <div>
        //           {`id: ${id} Age:  ${age} isBestFriend: ${isBestFriend}`}
        //         </div>
        //       )}
        //     </div>
      )
    }
}

export default FriendCard;
