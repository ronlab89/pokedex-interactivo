import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Pokemon = (props) => {
    
    const {pokemon} = props;
    console.log('Objeto para la Card');
    console.log(pokemon);

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
                                        <li key={idt} className="nav-item me-3">
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
                                        <li key={ida} className="nav-item me-1">
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
                            <button className="btn">
                                <FontAwesomeIcon icon=
                                    {faHeart} />
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