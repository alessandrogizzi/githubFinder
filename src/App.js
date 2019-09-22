import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <NavBar/>
        <Users />
      </div>
    );
  }
}

export default App;
