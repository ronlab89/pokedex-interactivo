import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Pokemon from './Pokemon';
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
            <div className="search-wrap p-5 row">
                    <div className="d-flex justify-content-center align-items-center">
                        {/* Busqueda de pokemones */}
                        <div className="busqueda">
                            <div className="input-group flex-nowrap">
                                <form className="form-floating">
                                    <input
                                    className="form-control" 
                                    placeholder="Busca tu pokemon.."
                                    onChange={changeInput}
                                    id="floatingInput"
                                    />
                                    <label htmlFor="floatingInput">Busca tu pokemon..</label>
                                </form>
                                <button className="btn btn-search" onClick={searchPoke}> 
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </div>
                {pokemon &&
                    <section className="wrap-card h-50 d-flex justify-content-center align-items-center p-5 me-5 mt-4">
                        <Pokemon pokemon={pokemon} />
                    </section>
                }
            </div>
        );
}

export default Search;