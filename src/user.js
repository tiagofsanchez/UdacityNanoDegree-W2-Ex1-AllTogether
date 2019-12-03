import React from "react";

const User = props => {
  
    const { user , showGame } = props

    let numberOfGames = '*'
    if(showGame===true) {
        numberOfGames= user.gamesPlayed 
    }

    return (
        <li key={user.userName}>{user.userName} played {numberOfGames} number of games!</li>
    );
};

export default User;
