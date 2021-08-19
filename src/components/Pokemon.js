import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoriteContext';


const Pokemon = (props) => {

    const {pokemon} = props;
    const {favoritePokemons, updateFavoritePokemon} = useContext(FavoriteContext);

    const blackHeart = '🖤';
    const redHeart = '❤';
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemon(pokemon.name);
    }

    return(

        <div className="col-3 mb-5">
            <div className="card poke-card px-2">
                {/* Imagen */}
                <div className="card-img-top">
                    <img
                        src={pokemon.sprites.front_default}
                        alt="Pokemon"
                        className="img-fluid"
                    />
                </div>
                {/* Body card */}
                <div className="card-body">
                    <div>
                        <h2 className="text-capitalize">{pokemon.name}</h2>
                    </div>
                    <div>
                        <p>
                            Weight: {pokemon.weight} <br />
                            Height: {pokemon.height}
                        </p>
                    </div>
                </div>
                {/* Footer card */}
                <div className="card-footer row g-0">
                    <div className="col-6 d-flex flex-column">
                        <div className="d-flex flex-row justify-content-start">
                            <ul className="nav mb-3">
                            {
                                pokemon.types.map((type, idt) => {
                                    return (
                                        <li key={idt} className="nav-item me-3 text-capitalize">
                                            🧬{type.type.name}
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                        <div className="d-flex justify-content-start">
                            <ul className="nav">
                            {
                                pokemon.abilities.map((ability, ida) => {
                                    return (
                                        <li key={ida} className="nav-item me-1 text-capitalize">
                                            🛡{ability.ability.name}
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <div className="d-flex justify-content-end">
                            <button onClick={clickHeart} className="btn">
                                {heart}
                            </button>
                        </div>
                        <div className="d-flex justify-content-end">
                            <p>ID: {pokemon.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default Pokemon;