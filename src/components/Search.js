import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Global from '../Api';
import axios from 'axios';
const {useState} = React;

const Search = () => {

    let url = Global.url;
    
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const changeInput = (event) => {
        setSearch(event.target.value);
    }

    const searchPoke = (e) => {
        e.preventDefault();
        axios.get(url+'pokemon/'+search)
             .then(res => {
                setPokemon(res.data);
             })
             .catch(error => {
                 console.log(error);
             })
    }

        return (
            <div className="search-wrap">
                <div className="d-flex justify-content-around align-items-center">
                    {/* Paginación */}
                    <div className="paginas">
                        <p>Pag 1 de 20</p>
                        <button className="btn btn-primary pagina">
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                        </button>
                        <span>  </span>
                        <button className="btn btn-primary pagina">
                            <FontAwesomeIcon icon={faChevronCircleRight}/>
                        </button>
                    </div>
                    {/* Busqueda de pokemones */}
                    <div className="busqueda">
                            <input 
                            placeholder="Busca tu pokemon.."
                            onChange={changeInput}
                            />
                            <button className="btn" onClick={searchPoke}> 
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                    </div>
                </div>
                {pokemon &&
                    <section className="wrap-card h-50 container d-flex justify-content-center align-items-center">
                    <div className="card poke-card px-2">
                        {/* Imagen */}
                        <div className="card-img-top">
                            <img
                                src={pokemon.sprites.front_default}
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
                                    Tipo: {pokemon.types[0].type.name}
                                </p>
                                </div>
                                <div className="d-flex justify-content-start">
                                <p>
                                    Poder: { pokemon.abilities[0].ability.name }
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
                    </section>
                }
            </div>
        );
}

export default Search;