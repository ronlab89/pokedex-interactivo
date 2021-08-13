import React from 'react'

const Loading = () => {
    return (
        <div className="container vh-75 text-center p-5">
            <h2 className="display-4 pt-5 pb-3">Cargando Pokemones</h2>
            <div className="spinner-grow text-danger" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;