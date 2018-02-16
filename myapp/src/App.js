import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { H1 } from './components/header';
import { friends } from './data/ListofFriends';
import { AllFriends } from './components/AllFriends';
import { BestFriends } from './components/BestFriends';
import { AverageAgeofBestFriends } from './components/AverageAgeofBestFriends';
import FriendCard from './FriendCard.js';

class App extends Component {
  constructor () {
    super();
    this.state =
      friends.reduce((acc, curr) => {
        return {...acc, [curr.id]:false}
      }, {});
  }

  toggleChild = id => {
    this.setState({ [id]: true});
  }

  render() {
    return (
      // <div className="App">
      //   <H1 text="Friends">Friends</H1>
      //   <h2>My Friends</h2>
      //   <p className="My-Friends">
      //     <AllFriends friends = { friends } />
      //   </p>
      //   <h2>My Best Friends</h2>
      //   <p className="My-Best-Friends">
      //     <BestFriends friends = { friends } />
      //   </p>
      //   <h2>The Average age of My Best Friends</h2>
      //   <p className="My-Best-Friends-Ages">
      //     <AverageAgeofBestFriends friends = { friends } />
      //   </p>
      // </div>
      <div>
        <h1>FRIENDS</h1>

        <ul>
          {friends.map(friend => <li>
            <FriendCard { ...friend } showDetails={this.state.showDetails}/>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
