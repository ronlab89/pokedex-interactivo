import React from 'react';
import Loading from './Loading';
import Pokemon from './Pokemon';
// const {useState, useEffect} = React;


const Content = (props) => {

    const {pokemones, loading} = props;

    console.log('Recibiendo props del App component');
    console.log(pokemones);

    return (
        <div>

            {loading ?
                <Loading />
                :
                <div className="container-fluid row content-pokedex">
                <h1 className="text-center">Pokedex</h1>
                
                {pokemones.map((pokemon, id) => {
                    return(
                        <Pokemon key={id} pokemon={pokemon} />
                        );
                    })}
        </div>
        }
        </div>
    );

}

export default Content;
