import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const {useState} = React;

const Search = (props) => {

    const { onSearch } = props;    
    const [search, setSearch] = useState('');

    const changeInput = (event) => {
        setSearch(event.target.value);
        if (event.target.value.length === 0) {
            onSearch(null);
        }
    };

    const onClick = async (e) => {
        e.preventDefault();
        onSearch(search);
    };

        return (
            <div className="search-wrap p-5 row">
                    <div className="d-flex justify-content-center align-items-center">
                        {/* Busqueda de pokemones */}
                        <div className="busqueda">
                            <div className="input-group flex-nowrap">
                                <form className="form-floating">
                                    <input
                                    type="search"
                                    className="form-control Search" 
                                    placeholder="Busca tu pokemon.."
                                    onChange={changeInput}
                                    id="floatingInput Search"
                                    />
                                    <label htmlFor="floatingInput">Busca tu pokemon..</label>
                                </form>
                                <button className="btn btn-search" onClick={onClick}> 
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        );
}

export default Search;