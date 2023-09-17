import React from 'react'

interface User {
  id: string
  name: string
  email: string
}
const Users = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // { cache: 'no-store' }
    // { next: { revalidate: 10 } }
  )
  const users = await res.json()


  return (
    <div>
      <h1 className=' text-3xl'>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user: User) =>
          <li key={user.id}>
            {user.name}
          </li>
        )}
      </ul>
      <hr />
      <table className='table table-zebra table-xs'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) =>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Users