import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {

  const {user} = useContext( UserContext );
  console.log( user );
  return (
    <>
        <h1>Login Page</h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3)}
        </pre>
    </>
  )
}

export default LoginPage
