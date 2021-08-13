import React, {Component} from 'react';
import logo from '../assets/images/pokelogo.png';
import logoApi from '../assets/images/pokeapi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    render(){
        return (
            <div className="wrap-nav d-flex flex-column">
                <nav className="navbar navbar-expand bg-dark navbar-dark">
                    <ul className="navbar-nav d-flex justify-content-between align-items-center">
                        <li className="nav-item ms-5">
                            <img src={logoApi} alt="Logo PokeAPI" className="img-fluid logo-api" width="100" />
                        </li>
                        <li className="nav-item">
                            <a href="/">
                            <img src={logo} alt="Pokebola" className="img-fluid" width="100"/>
                            </a>
                        </li>
                        <li className="nav-item favoritos text-center me-5">
                            <a className="nav-link" href="favoritos.html">Ver Poke Favoritos</a>
                            <p className="lead"># Poke
                            <span> 
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            </p>
                        </li>
                    </ul>
                </nav>
        </div>
        );
    }
}

export default Navbar;