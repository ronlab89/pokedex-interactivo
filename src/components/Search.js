import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
                    
                    <Pokemon pokemon={pokemon} />

                    </section>
                }
            </div>
        );
}

export default Search;