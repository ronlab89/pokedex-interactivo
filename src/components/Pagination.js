import React from 'react';
import pokeLeft from '../assets/images/pokeLeft.png';
import pokeRight from '../assets/images/pokeRight.png';

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className="pagination-wrap p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ul className="pagination">
                    <li className="page-item">
                        <button onClick={onLeftClick} className="page-link">
                            <img src={pokeLeft} alt="poke-left" width="30" className="img-fluid"/>
                        </button>
                    </li>
                    <li className="page-item">
                        <a href="page.js" className="page-link">{page} </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="page.js">de</a></li>
                    <li className="page-item"> 
                        <a href="page.js" className="page-link"> {totalPages}</a>
                    </li>
                <button onClick={onRightClick} className="page-link">
                    <img src={pokeRight} alt="poke-right" width="30" className="img-fluid"/>
                </button>
                </ul>
            </div>
        </div>
    );
}

export default Pagination;