import React, { useState, useEffect } from 'react';
import Header from './Header';
import DisplayPokemon from './DisplayPokemon';

export default function Home() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchAPI, setFetchAPI] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [currentPage, setCurrentPage] = useState(0);

    const [searchTerm, setSearchTerm] = useState('');
    const [modifiedTerms, setModifiedTerms] = useState([]);

    useEffect(() => {
        fetch(fetchAPI)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setIsLoading(false);
                setModifiedTerms(result.results)
                console.log('from useeffect', result)
            })
            .catch(err => {
                console.log(err);
            });
    }, [fetchAPI]);

    const handleNext = () => {
        setIsLoading(true);
        setFetchAPI(data.next);
        setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        setIsLoading(true);
        setFetchAPI(data.previous);
        setCurrentPage(currentPage - 1);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('clicked handle search', searchTerm);
        let modified = [];
        for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].name.includes(searchTerm)) {
                console.log(data.results[i]);
                modified.push(data.results[i]);
            }
        }
        console.log('modified', modified);
        setModifiedTerms(modified);
    }

    return (
        <div>
            <Header />
            <hr />

            {isLoading ? (
                <h1 className="text-center mt-8 text-xl font-bold">Loading...</h1>
            ) : (
                <div className="container mx-auto my-4">
                    {/* form */}
                    <form onSubmit={handleSearch} className="mb-4 flex justify-center items-center my-5">
                        {/* <label htmlFor="search" className="text-lg font-semibold mr-2">Search Pokemon:</label> */}
                        <input
                            type="text"
                            id="search"
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value) }}
                            placeholder="Enter Pokemon Name"
                            className="p-2 border border-gray-300 rounded"
                        />
                        <button type="submit" className="bg-gray-800 hover:text-gray-300 text-white px-4 py-2 rounded ml-5">Search</button>
                    </form>

                    {/* form end */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {data &&
                            data.results.map((item, index) => (
                                <DisplayPokemon
                                    name={item.name}
                                    imageId={currentPage * 20 + index + 1}
                                    key={currentPage * 20 + index + 1}
                                />
                            ))}
                    </div> */}


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {modifiedTerms.length == 0 ? <h1>No items found.</h1> :
                            modifiedTerms.map((item, index) => (
                                <DisplayPokemon
                                    name={item.name}
                                    imageId={currentPage * 20 + index + 1}
                                    key={currentPage * 20 + index + 1}
                                />
                            ))}
                    </div>


                    <div className="flex justify-center items-center mt-4">
                        {data?.previous && (
                            <button
                                onClick={handlePrev}
                                className="bg-gray-800 hover:text-gray-300 text-white font-bold py-2 px-4 rounded"
                            >
                                Previous
                            </button>
                        )}
                        <p className="px-4  text-xl font-bold">
                            Page {currentPage + 1}
                        </p>

                        {data?.next && (
                            <button
                                onClick={handleNext}
                                className="bg-gray-800 hover:text-gray-300 text-white font-bold py-2 px-4 rounded"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}