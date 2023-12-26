import React, { useState, useEffect } from 'react';
import Header from './Header';
import DisplayPokemon from './DisplayPokemon';

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchAPI, setFetchAPI] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch(fetchAPI)
      .then(res => res.json())
      .then(result => {
        setData(result);
        setIsLoading(false);
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

  return (
    <div>
      <Header />
      <hr />

      {isLoading ? (
        <h1 className="text-center mt-8 text-xl font-bold">Loading...</h1>
      ) : (
        <div className="container mx-auto my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data &&
              data.results.map((item, index) => (
                <DisplayPokemon
                  name={item.name}
                  url={item.url}
                  imageId={currentPage * 20 + index + 1}
                  key={currentPage * 20 + index + 1}
                />
              ))}
          </div>

          <div className="flex justify-center mt-4">
            {data?.previous && (
              <button
                onClick={handlePrev}
                className="bg-gray-800 hover:text-gray-300 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Previous
              </button>
            )}

            {data?.next && (
              <button
                onClick={handleNext}
                className="bg-gray-800 hover:text-gray-300 text-white font-bold py-2 px-4 rounded ml-2"
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
