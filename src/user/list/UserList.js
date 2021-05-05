import React, { useState, useEffect } from 'react';
import axios from 'axios';

const userData = [
    { id: 1, name: 'Boris' },
    { id: 2, name: 'Gabriel' },
    { id: 3, name: 'Géraldine' },
]

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // HTTP CALL
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => { setUsers(res.data); });

    })

    const listItems = users.map(user =>
        <li key={user.id}>{user.name}</li>
    )

    return (
        <ul>
            {listItems}
        </ul>
    );
}

// equivalent syntax
// const UserList = () => {

// }
// export default UserList