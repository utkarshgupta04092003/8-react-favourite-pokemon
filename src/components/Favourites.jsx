import React, { useContext } from 'react';
import { favlist } from './FavContext';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Favourites() {

  const { list, removeFromList } = useContext(favlist);
  const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  function handleRemove(e) {
    removeFromList(e.target.id);
  }

  return (!list || list.length === 0) ? (
    <React.Fragment>
      <Header />
      <h2 className="text-2xl font-bold text-center my-5">Oops! Nothing to show</h2>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Header />
      <h2 className="text-2xl font-bold my-5 text-center">Favourite Pokemon</h2>
      <div className="flex flex-wrap justify-center mt-4">

        {list.map((i) => (
          <div key={i.imageId} className="m-4 w-48 border border-gray-300 rounded-md text-center">
              <Link to={'/details/'+i.imageId}>
              <figure className='w-full'>
                <img src={IMAGE_BASE_URL + i.imageId + '.png'} alt={i.imageId} className="w-3/4  mx-auto" />
                <figcaption className="font-bold text-lg capitalize">{i?.name}</figcaption>
              </figure>
              </Link>
              <button
                onClick={handleRemove}
                id={i.imageId}
                className="my-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
        ))}
      </div>
    </React.Fragment>
  )
}
