import React, { useState, useEffect } from 'react'
import Header from './Header';
import DisplayPokemon from './DisplayPokemon';

export default function Home() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);
    const [fetchAPI, setFetchAPI] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch(fetchAPI)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setIsLoading(false);
                // setPrev(result.prev);
                console.log(data);
                // console.log(data.results);
                console.log(isLoading);
                console.log(result);
                console.log(fetchAPI)
            })
            .catch(err => {
                console.log(err);
            })

    }, [fetchAPI]);


    const handleNext = () => { setIsLoading(true); setFetchAPI(data.next); setCurrentPage(currentPage + 1); }
    const handlePrev = () => { setIsLoading(true); setFetchAPI(data.previous); setCurrentPage(currentPage - 1); }


    return (
        <div>
            <Header />
            <hr />


            {isLoading ? <h1>loading...</h1> :
                (<div>

                    <div className="border border-red-500 flex flex-wrap justify-center">

                        {data && (data.results).map((item, index) => (
                            <DisplayPokemon name={item.name} url={item.url} imageId={parseInt(currentPage) * 20 + parseInt(index + 1)} key={parseInt(currentPage) * 20 + parseInt(index + 1)} />
                        ))}


                    </div>
                    <div>

                        {data?.next && <button onClick={handleNext}>Next</button>}
                        {data?.previous && <button onClick={handlePrev}>Previous</button>}

                    </div>
                </div>
                )}
        </div>
    )
}
