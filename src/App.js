import './App.css';
import {users} from './data/users';
import React from 'react';
import UserItem from './components/user-item/UserItem';
import UserList from './components/user-list/UserList';

function App() {

	return (
		<div>
			<UserList/>
		</div>);
}

export default App;
