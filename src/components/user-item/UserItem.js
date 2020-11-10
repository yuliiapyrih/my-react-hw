import React, {Component} from 'react';


class UserItem extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		let {users} = this.props;

		return (
			<div>
                {
                    users.status && (
                        <div>
                            Name: {users.name}, age: {users.age}.
                        </div>
                    )
                }
                {
                    !users.status && (
                        <b>
                            Name: {users.name}, age: {users.age}.
                        </b>
                    )
                }
			</div>
		);
	}
}

export default UserItem;