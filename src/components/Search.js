import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Global from '../Api';
import axios from 'axios';
const {useState} = React;

const Search = () => {

    const url = Global.url;

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
                            <button onClick={searchPoke}> 
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                    </div>
                </div>
                <div className="card">
                    {pokemon &&

                    <div className="card-body">
                        <div>
                            <img
                            src={pokemon.sprites.front_default}
                            alt="Pokemon"
                            className="img-fluid"
                            width="200"
                            />
                        </div>
                        <div>
                            Nombre: {pokemon.name}
                        </div>
                        <div>
                            Peso: {pokemon.weight} Kg
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
}

export default Search;