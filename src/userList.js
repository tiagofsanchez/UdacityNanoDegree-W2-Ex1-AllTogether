import React, { Component } from "react";
import User from "./user";

class UserList extends Component {
  state = {
    showGames: false
  };
 
  /*
  Why this does not work? (){} and needed to implement =()=>{}
  showGamesHandler() {
      this.setSate({
          showGames: !this.state.showGAmes
      })
  }

  Considering that in userEntry.js this (){} worked 
  changeHandler(e, name) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  */

  showGamesHandler = () => {
      this.setState({
          showGames: !this.state.showGames
      })
  }
  
  render() {
    const { showGames } = this.state;
    const { users } = this.props;

    let buttonName = "Show number of games";
    if (showGames===true) {
        buttonName = "Hide number of games"
    }

    return (
      <div style={{ width: `400px`, margin: `auto`, marginTop: `40px` }}>
        <button className="smallButton" onClick={this.showGamesHandler} >{buttonName}</button>
        <ul>
          {users.map(user => (
            <User user={user} showGame={showGames} key={user.userName}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;