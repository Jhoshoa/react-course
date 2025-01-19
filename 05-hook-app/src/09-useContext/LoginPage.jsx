import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {

  const {user, setUser} = useContext( UserContext );
  console.log( user );

  return (
    <>
        <h1>Login Page</h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3)}
        </pre>

        <button
            className='btn btn-primary'
            onClick={ () => setUser({id: 987, name: 'loki', email: 'loki@go.com'}) }
        >
          Agregar
        </button>
    </>
  )
}

export default LoginPage
