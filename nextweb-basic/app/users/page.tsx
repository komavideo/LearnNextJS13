import React from 'react'

interface User {
  id: string
  name: string
}
const Users = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // { cache: 'no-store' }
    // { next: { revalidate: 10 } }
  )
  const users = await res.json()

  const userList = users.map((user: User) =>
    <li key={user.id}>
      {user.name}
    </li>
  );

  return (
    <div>
      <h1 className=' text-3xl'>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {userList}
      </ul>
    </div>
  )
}

export default Users