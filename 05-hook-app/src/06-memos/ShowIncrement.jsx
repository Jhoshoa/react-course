import React, { memo } from 'react'

const ShowIncrement = memo(({ increment }) => {

    console.log("Me volvi a renderizar!!! :(");

  return (
    <button
        className='btn btn-primary'
        onClick={ increment }
    >
        Incrementar
    </button>
  )
})

export default ShowIncrement
