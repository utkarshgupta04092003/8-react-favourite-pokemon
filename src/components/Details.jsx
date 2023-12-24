
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
export default function Details(props) {

    const { imageId } = useParams();
    const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(API_URL + imageId)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result);
            })

    }, [imageId]);
    console.log(useParams());


    const handleAddFavourite=()=>{
        console.log('Added to favourites');
    }
    return (
        <div>
            details.jsx -
            <div>
               
                <div className="details">

                    <div className="images flex flex-wrap">
                        <figure>
                            <img src={data?.sprites.front_default} alt="front default" />
                            <figcaption>Front view</figcaption>
                        </figure>

                        <figure>
                            <img src={data?.sprites.back_default} alt="back default" />
                            <figcaption>Back view</figcaption>
                        </figure>

                        <figure>
                            <img src={data?.sprites.other.showdown.front_default} alt="front default" />
                            <figcaption>Front animated view</figcaption>
                        </figure>


                        <figure>
                            <img src={data?.sprites?.other?.showdown?.back_default} alt="back default" />
                            <figcaption>Back animates view</figcaption>
                        </figure>


                    </div>


                    Id: {imageId} <br />
                    Name: {data?.name} <br />
                    Abilities: {data?.abilities.map((item)=>(item.ability.name)).join(', ')} <br />
                    Height: {data?.height} <br />
                    Weight: {data?.weight} <br />
                    Species: {data?.species.name} <br />
                    Held Items: {data?.held_items.map((i)=>(i.item.name)).join(', ')  || 'Nothing'} <br />
                    Types: {data?.types.map((i)=>(i.type.name)).join(', ')}


                </div>
                <div>Stats</div>
                <div>{data?.stats.map((i)=>(
                    <div>
                        {i.stat.name} - {i.base_stat}
                    </div> 
                    ))}</div>

            </div>



            <button onClick={handleAddFavourite}>Add to Favourite</button>
        </div>
    )
}