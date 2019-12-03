import React, { Component } from 'react';

import PropTypes from 'prop-types'


const initState = {
  user: {
    firstName: '',
    lastName: '',
    userName: '',
    gamesPlayed: 0,
  },
  userExists: false,
}

class UserEntry extends Component {

  state = initState

  //this is a better way to change state in a non-mutable way
  changeHandler(e) {
    const { name, value } = e.target;
    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  }

  contactExists = currUsername => {
    const users = this.props.allUsers;
    for (let user of users) {
      if (user.userName === currUsername) {
        return true;
      }
    }
    return false;
  };

  addUserHandler = (e) => {
    e.preventDefault();
    const { onStoreUser } = this.props
    const userExists = this.contactExists(this.state.user.userName);

    if (!userExists) {
      onStoreUser(this.state.user)
      this.setState(initState)
    }

    this.setState(() => ({
      userExists,
    }));
  }

  //this disabled is too long will need to write something cleaner latter
  isDisabled = () => {
    const { firstName, lastName, userName } = this.state.user;
    if (firstName.length === 0 || lastName.length === 0 || userName.length === 0) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { firstName, lastName, userName } = this.state.user
    

    return (
      <div>
        <form onSubmit={this.addUserHandler}>
          <div style={{ display: `flex`, flexDirection: `column`, width: `400px`, margin: `auto`, marginTop: `40px`, alignContent: `left` }}>
            <div style={{ display: `flex`, alignItems: `center`, justifyContent: `spaceBetween` }}>
              <label>Your first name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="Your first name?"
                value={firstName}
                onChange={(e, name) => this.changeHandler(e, name)}
              />
            </div >
            <div style={{ display: `flex`, alignItems: `center`, justifyContent: `spaceBetween` }}>
              <label>Your last name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Your last name?"
                value={lastName}
                onChange={(e, name) => this.changeHandler(e, name)}
              />
            </div>
            <div style={{ display: `flex`, alignItems: `center`, justifyContent: `spaceBetween` }}>
              <label>User name:</label>
              <input
                type="text"
                name="userName"
                placeholder="Your last name?"
                value={userName}
                onChange={(e, name) => this.changeHandler(e, name)}
              />
            </div>
            <button disabled={this.isDisabled()}>SUBMIT</button>
          </div>
        </form>
        {this.state.userExists ? 
        (<p>ERROR</p>)
        :
        ('')}
      </div>

    );
  }
}

UserEntry.propTypes = {
  onStoreUser: PropTypes.func.isRequired,
}

export default UserEntry;