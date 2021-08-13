import React from 'react';
// import axios from 'axios';
import Pokemon from './Pokemon';
// const {useState, useEffect} = React;


const Content = (props) => {

    const {pokemones} = props;

    console.log('Recibiendo props del App component');
    console.log(pokemones);

    return (
        
        <div className="vh-100 container-fluid row">
            <h1 className="text-center">Pokedex</h1>
            
            {pokemones.map((pokemon, id) => {
                return(
                    <Pokemon key={id} pokemon={pokemon} />
                )
            })}
               
        </div>
    );

}

export default Content;
