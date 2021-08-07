import React, { Component } from 'react';
import logoPersonal from '../assets/images/logo.png';

class Footer extends Component {
    render() {
        return(
            <footer className="d-flex flex-column align-content-center py-3">
                <p>Creado por Ronald Labrador
                    <span> </span>
                    <img src={logoPersonal} alt="Logo personal" class="img-fluid" width="40"/>
                </p>
                <p>2021 - Pokedex</p>
            </footer>
        );
    }
}

export default Footer;