
import { useParams } from "react-router";
import { useEffect, useState, useContext } from 'react';
import { favlist } from "./FavContext";
import Header from "./Header";
export default function Details() {

    const { imageId } = useParams();
    const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
    const{list, addToList} = useContext(favlist);

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(API_URL + imageId)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setData(result);
        })
        
    }, [imageId]);
    // console.log(useParams());


    let currentData = {
        imageId: imageId,
        name: data?.name,
        abilities: data?.abilities.map((item)=>(item.ability.name)).join(', '),
        height: data?.height,
        weight: data?.weight,
        species: data?.species.name,
        held_items: (data?.held_items.map((i)=>(i.item.name)).join(', ')  || 'Nothing'),
        types: data?.types.map((i)=>(i.type.name)).join(', '),        
        front_default: data?.sprites.front_default,
        back_default: data?.sprites.back_default,
        showdown_front_default: data?.sprites.other.showdown.front_default,
        showdown_back_default: data?.sprites?.other?.showdown?.back_default,

    };
    
    // console.log('current data', currentData.abilities);

    const handleAddFavourite=()=>{
        console.log('Added to favourites');
        addToList(currentData);
        console.log('list from details', list)
    }
    return (!data)? <h1>Loading...</h1> :(
        <div>
            <Header/>
            details.jsx -
            <div>
               
                <div className="details">

                    <div className="images flex flex-wrap">
                        <figure>
                            <img src={currentData.front_default} alt="front default" />
                            <figcaption>Front view</figcaption>
                        </figure>

                        <figure>
                            <img src={currentData.back_default} alt="back default" />
                            <figcaption>Back view</figcaption>
                        </figure>

                        <figure>
                            <img src={currentData.showdown_front_default} alt="front default" />
                            <figcaption>Front animated view</figcaption>
                        </figure>


                        <figure>
                            <img src={currentData.showdown_back_default} alt="back default" />
                            <figcaption>Back animates view</figcaption>
                        </figure>


                    </div>


                    Id: {imageId} <br />
                    Name: {currentData.name} <br />
                    Abilities: {currentData.abilities} <br />
                    Height: {currentData.height} <br />
                    Weight: {currentData.weight} <br />
                    Species: {currentData.species} <br />
                    Held Items: {currentData.held_items} <br />
                    Types: {currentData.types}


                </div>
                <div>Stats</div>
                <div>{data?.stats.map((i)=>(
                    <div >
                        {i.stat.name} - {i.base_stat}
                    </div> 
                    ))}</div>

            </div>



            <button onClick={handleAddFavourite}>Add to Favourite</button>
        </div>
    )
}