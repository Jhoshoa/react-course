import React, { useState} from 'react'

const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState(initialForm);
  
    // const { username, email, password } = formState;
  
    const onInputChange = (event) => {
  
        const {name, value } = event.target
        //console.log({name, value})
        setFormState({...formState, [name]: value})
    }

    const onResetForm = () => {
        console.log( initialForm );
        
        setFormState( initialForm );
    }
      
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

export default useForm
