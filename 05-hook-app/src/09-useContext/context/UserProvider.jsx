import React from 'react'
import { UserContext } from './UserContext';

const user = {
    id: 123,
    name: 'Josoe I',
    email: 'josoe@google.com',
}

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        { children }
    </UserContext.Provider>
  )
}

export default UserProvider;