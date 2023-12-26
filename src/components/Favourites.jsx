import React, {useContext} from 'react';
import { favlist } from './FavContext';
import Header from './Header';

export default function Favourites() {

  const {list, removeFromList} = useContext(favlist);
  const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  // console.log('fav list: ',list.imageId);

  return (!list  || list.length == 0) ? (<h1>No favourite</h1>) : (
    <div>
      <Header/>
      favourites - 
      { list.map((i,index)=>(
        // <span key={index}> {i?.imageId} </span>
        <div key={i.imageId}>

          <figure>
            <img src={IMAGE_BASE_URL + i.imageId + '.png'} alt={i.imageId} />
            <figcaption>{i?.name}</figcaption>
          </figure>

          
        </div>
      ))}

    </div>
  )
}

