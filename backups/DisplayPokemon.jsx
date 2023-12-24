
export default function DisplayPokemon({ name, url, imageId }) {

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`;
    const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    return (
        <div>


            <div className="img">
                <img src={IMAGE_BASE_URL + imageId + '.png'} alt={imageId} />
            </div>
            <div className="details">
                Name : {name}
                {/* url : {url} */}
                Image id: {imageId}
            </div>



        </div>
    )
}
