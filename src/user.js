import React from "react";
import PropTypes from 'prop-types'

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

User.propTypes = { 
    showGame: PropTypes.bool.isRequired
}

export default User;
