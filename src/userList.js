import React, { Component } from 'react';

class UserList extends Component{
    
    state = {
        showGames: false
    }

    render() {
        const { showGames } = this.state;
        const { users } =this.props
        return (

            <ul>
                <li>
                {users.firstName}
                </li>
            </ul>

        )
    }

}

export default UserList; 