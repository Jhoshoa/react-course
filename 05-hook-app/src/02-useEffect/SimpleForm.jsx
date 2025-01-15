import React, { useEffect, useState } from 'react'

const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
      username: 'josoe',
      email: 'josoe@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = (event) => {
      //console.log(event.target.value);
      const {name, value } = event.target
      console.log({name, value})
      setFormState({...formState, [name]: value})
    }

    // I had to comment the <StrictMode> in the main.jsx this only necesaryin dev mode

    // This is called only the first time it is rendered the component
    // due to the [] in the second parameter of the useEffect
    useEffect(() => {
      console.log("useEffect called!");
    }, []);

    // This will be called everytime the formState change
    useEffect(() => {
      console.log("El formState cambio!!");
    }, [formState]);

    // This will be called everytime the email change
    useEffect(() => {
      console.log("email changed !!!!!!");
    }, [email]);

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
            type="text"
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input 
            type='email'
            className='form-control mt-2'
            placeholder='email@emai.com'
            name='email'
            value={email}
            onChange={onInputChange}
        />
    </>
  )
}

export default SimpleForm;
