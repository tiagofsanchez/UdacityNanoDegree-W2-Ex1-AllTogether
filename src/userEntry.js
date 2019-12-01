import React, { Component } from 'react';

import PropTypes from 'prop-types'


const initState = {
  firstName: '',
  lastName: '',
  userName: ''
}

class UserEntry extends Component {

  state = initState

  changeHandler(e, name) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addUserHandler = (e) => {
    e.preventDefault();
    const { onStoreUser } = this.props 
    onStoreUser(this.state) 
    this.setState(initState)
  }


  //this disabled is too long will need to write something cleaner latter
  isDisabled = () => {
    const { firstName , lastName , userName } = this.state;
    if( firstName.length === 0 || lastName.length === 0 || userName.length === 0 ) {
      return true
    } else {
      return false
    }
  }
 
  render() {

    const { firstName, lastName, userName } = this.state
    return (
      <div style={{ display: `flex`, flexDirection: `column`, marginTop: `40px` }}>
        <form onSubmit={this.addUserHandler}>
          <div>
            <label>Your first name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name?"
              value={firstName}
              onChange={(e, name) => this.changeHandler(e, name)}
            />
          </div >
          <div>
            <label>Your last name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Your last name?"
              value={lastName}
              onChange={(e, name) => this.changeHandler(e, name)}
            />
          </div>
          <div>
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
        </form>
      </div>
    );
  }
}

UserEntry.propTypes = {
  onStoreUser: PropTypes.func.isRequired,
}

export default UserEntry;