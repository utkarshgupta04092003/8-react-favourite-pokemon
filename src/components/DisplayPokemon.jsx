import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function DisplayPokemon({ name, url, imageId }) {

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`;
    const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    const dataToPass = { name: 'John Doe', age: 25 };



    return (
        <div className="border border-gray-600" >

            {/* <div onClick={()=>    navigate('/routeB', { state: { yourData: 'Hello from Route A' } }) }> */}
                <Link to={`/details/${imageId}`}>
                    <div className="img">
                        <img src={IMAGE_BASE_URL + imageId + '.png'} alt={imageId} />
                    </div>
                    <div className="details">
                        Name : {name}
                        {/* url : {url} */}
                        Image id: {imageId}
                    </div>
                </Link>
            {/* </div> */}



         </div>
    )
}
