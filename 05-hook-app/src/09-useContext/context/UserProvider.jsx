import React, { useState } from 'react'
import { UserContext } from './UserContext';

const user = {
    id: 123,
    name: 'Josoe I',
    email: 'josoe@google.com',
}

const UserProvider = ({ children }) => {

    const [user, setUser] = useState();
  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    <UserContext.Provider value={{ user, setUser }}>  
        { children }
    </UserContext.Provider>
  )
}

export default UserProvider;