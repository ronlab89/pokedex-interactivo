import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



const Content = (props) => {
    const {pokemones} = props;
    
    return (
        <div className="h-100 container-fluid row">
            <h1>Pokedex</h1>
            {pokemones.map((pokemon, id) => {
                return(
                    <div key={id} className="col-3 mb-5">
                        <div className="card poke-card px-2">
                            {/* Imagen */}
                            <div className="card-img-top">
                                <img
                                    src={pokemon.sprites}
                                    alt="Pokemon"
                                    className="img-fluid"
                                />
                            </div>
                            {/* header */}
                            {/* Body card */}
                            <div className="card-body">
                                <div>
                                    <h2>{pokemon.name}</h2>
                                </div>
                                <div>
                                    <p>
                                        Peso: {pokemon.weight} Kg <br />
                                        Altura: {pokemon.height} Cm
                                    </p>
                                </div>
                            </div>
                            {/* Footer card */}
                            <div className="card-footer row g-0">
                                <div className="col-6 d-flex flex-column">
                                    <div className="d-flex justify-content-start">
                                        <p>
                                            Tipo: {pokemon.types}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <p>
                                            Poder: {pokemon.abilities}
                                        </p>
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
                )
            })}
               
        </div>
    );

}

export default Content;
