import React from 'react';
import { Link } from 'react-router-dom';

const DisplayPokemon = ({ name, imageId }) => {
  const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  return (
    <div className="border border-gray-600 p-4 transition duration-300 ease-in-out transform hover:scale-105">

      <Link to={`/details/${imageId}`} className="flex flex-col items-center text-center">
        <div>
          <img src={`${IMAGE_BASE_URL}${imageId}.png`} alt={imageId} className="object-cover" />
        </div>
        <div className="details mt-2">
          <span className="text-lg font-bold capitalize">{name}</span>
        </div>
      </Link>

    </div>
  );
};

export default DisplayPokemon;
