import React from 'react';
import Loading from './Loading';
import Pokemon from './Pokemon';


const Content = (props) => {

    const {pokemones, loading} = props;

    return (
        <div>

            {loading ?
                <Loading />
                :
                <div className="container-fluid row content-pokedex">
                <h1 className="text-center pb-5 pt-5 pt-sm-0 mt-2 mt-sm-0">Pokedex</h1>
                
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
