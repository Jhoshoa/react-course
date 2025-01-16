import React from 'react'

const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section
        style={{ height: 200 }}
    >
        <h2 className='text-capitalise'>#{id} - {name}</h2>

        {/* Imagenes */}
        <div>
            {
                sprites.map((image) => (
                    <img key={image} src={image} alt={name} />
                ))
            }
        </div>
    </section>
  )
}

export default PokemonCard;
