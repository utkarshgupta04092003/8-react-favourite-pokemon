import { useParams } from "react-router";
import { useEffect, useState, useContext } from 'react';
import { favlist } from "./FavContext";
import Header from "./Header";

export default function Details() {
    const { imageId } = useParams();
    const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
    const { list, addToList } = useContext(favlist);

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(API_URL + imageId)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result);
            });
    }, [imageId]);

    let currentData = {
        imageId: imageId,
        name: data?.name,
        abilities: data?.abilities.map((item) => item.ability.name).join(', '),
        height: data?.height,
        weight: data?.weight,
        species: data?.species.name,
        held_items: data?.held_items.map((i) => i.item.name).join(', ') || 'Nothing',
        types: data?.types.map((i) => i.type.name).join(', '),
        front_default: data?.sprites.front_default,
        back_default: data?.sprites.back_default,
        showdown_front_default: data?.sprites.other.showdown.front_default,
        showdown_back_default: data?.sprites?.other?.showdown?.back_default,
    };

    const handleAddFavourite = () => {
        console.log('Added to favourites');
        addToList(currentData);
        console.log('list from details', list);
    };

    return !data ? <h1 className="text-center mt-8 text-xl font-bold">Loading...</h1> : (
        <div>
            <Header />
            <div className="container mx-auto mt-2">
                <div className="text-2xl font-bold mb-2">Details</div>


                <div className="flex flex-wrap w-full justify-around my-5">


                    <figure className="">
                        <img src={currentData.showdown_front_default} alt="front default" className="w-24 h-24" />
                        <figcaption>Front view</figcaption>
                    </figure>


                    <figure>
                        <img src={currentData.showdown_back_default} alt="back default" className="w-24 h-24" />
                        <figcaption className="">Back view</figcaption>
                    </figure>


                </div>

                <div className="flex w-full p-5">

                    <div className="border border-gray-500 w-1/2">

                        <h2 className="text-2xl font-bold text-center">Basic Details</h2>


                        <table className="table-auto w-full mb-8 border border-gray-500">
                            <tbody>
                                <tr>
                                    <td className="font-bold pr-4 border border-gray-500">Id:</td>
                                    <td className="capitalize border border-gray-500">{imageId}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4 border border-gray-500">Name:</td>
                                    <td className="capitalize border border-gray-500">{currentData.name}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4 border border-gray-500">Abilities:</td>
                                    <td className="capitalize border border-gray-500">{currentData.abilities}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4 border border-gray-500">Height:</td>
                                    <td className="capitalize border border-gray-500">{currentData.height}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4 border border-gray-500">Weight:</td>
                                    <td className="capitalize border border-gray-500">{currentData.weight}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4 border border-gray-500">Species:</td>
                                    <td className="capitalize border border-gray-500">{currentData.species}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4 border border-gray-500">Held Items:</td>
                                    <td className="capitalize border border-gray-500">{currentData.held_items}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4 border border-gray-500">Types:</td>
                                    <td className="capitalize border border-gray-500">{currentData.types}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    {/* <div className="text-2xl font-bold mb-4">Stats</div> */}
                    <div className=" border-gray-500 w-1/2">
                        <h2 className="text-2xl font-bold text-center border border-gray-500">Statistics</h2>


                        <table className="table-auto w-full">
                            
                            <tbody>
                                {data?.stats.map((i) => (
                                    <tr key={i.stat.name}>
                                        <td className="capitalize font-bold border border-gray-500">{i.stat.name}</td>
                                        <td className="border border-gray-500">{i.base_stat}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="my-8">
                    <button
                        onClick={handleAddFavourite}
                        className="bg-gray-800 hover:text-gray-300 text-white font-bold py-2 px-4 rounded"
                    >
                        Add to Favourites
                    </button>
                </div>
            </div>
        </div>
    );
}
