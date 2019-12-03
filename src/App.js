import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import UserEntry from './userEntry';
import UserList from './userList';
import PropTypes from 'prop-types'


class App extends Component {

  state = {
    users: [],
  }


  userExist = (userName) => {
    
    const allUserNames = this.state.users.map((user) => {
      const userNames = [];
      userNames.push(user);
      return userNames
    })

    for (let user of allUserNames) {
      if (user === userName) {
        return true;
      }
    }
    return false;
  };
}

storeUserHandler = (user) => {
  this.setState((prevState) => ({ users: [...prevState.users, user] }))
}

render() {
  const { users } = this.state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <UserEntry onStoreUser={this.storeUserHandler} />
      <UserList users={users} />
    </div>
  );
}
}


UserEntry.propTypes = {
  onStoreUser: PropTypes.func.isRequired
}
UserList.prototypes = {
  users: PropTypes.array.isRequired
}

export default App;
