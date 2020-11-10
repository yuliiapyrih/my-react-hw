import React, {Component} from 'react';
import {users} from '../../data/users';
import UserItem from '../user-item/UserItem';

class UserList extends Component {
	render() {
		return (
			<div>
				{
					users && users.map((user) => {
						return (
							<UserItem users={user} key={user.id}/>
						);
					})
				}
			</div>
		);
	}
}

export default UserList;