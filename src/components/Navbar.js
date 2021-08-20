import React from 'react';
import logo from '../assets/images/pokelogo.png';
import logoApi from '../assets/images/pokeapi.png';
import pokeFav from '../assets/images/pokeFav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import FavoriteContext from '../contexts/favoriteContext';

const {useContext} = React;

const Navbar = () => {

    const { favoritePokemons } = useContext(FavoriteContext);
    
        return (
            <div className="wrap-nav d-flex flex-column">
                <nav className="navbar navbar-expand bg-dark navbar-dark">
                    <ul className="navbar-nav d-flex flex-column flex-sm-row justify-content-between align-items-center">
                        <li className="nav-item ms-5 d-none d-sm-block">
                            <img src={logoApi} alt="Logo PokeAPI" className="img-fluid logo-api" width="100" />
                        </li>
                        <li className="nav-item">
                            <a href="/">
                            <img src={logo} alt="Pokebola" className="img-fluid logo" width="100"/>
                            </a>
                        </li>
                        <li className="nav-item favoritos text-center me-5">
                            {/* Favorites Modal */}
                            <button id="fav" type="button" className="btn nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Ver Poke Favoritos
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Estos son tus Pokemones favoritos:</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <ul className="nav row">
                                            {favoritePokemons.length < 1 ?
                                                (
                                                    <div className="d-flex justify-content-center align-items-center message-fav">
                                                        <h2 className="d-block">Aun no tienes pokemones favoritos</h2>
                                                    </div>
                                                )
                                                : (
                                                favoritePokemons.map((fav, id) => {
                                                return (
                                                    <li key={id} className="nav-item me-3 mb-3 text-capitalize fw-bold col-lg-2 col-sm-3 col-4 d-flex p-3">
                                                        <img src={pokeFav} alt="Poke favorito logo" width="20" className="img-fluid me-2" /> <span className="me-2 text-reset">
                                                            {fav}
                                                        </span>
                                                    </li>
                                                )
                                                })
                                            )}
                                            </ul>
                                        </div>
                                        <div className="modal-footer">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Fin Favorites Modal */}
                            <div className="d-flex justify-content-center align-content-center">
                            <p className="lead"># <span>{favoritePokemons.length}</span> Poke</p>
                            <span className="px-2 pt-1">
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            </div>
                        </li>
                    </ul>
                </nav>
        </div>
        )
}

export default Navbar;