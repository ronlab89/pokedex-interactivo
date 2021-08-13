import React from 'react';
import pokeLeft from '../assets/images/pokeLeft.png';
import pokeRight from '../assets/images/pokeRight.png';

const Pagination = (props) => {
    return (
        <div className="pagination-wrap p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="page.js">
                            <img src={pokeLeft} alt="poke-left" width="30" className="img-fluid"/>
                        </a>
                    </li>
                    <li className="page-item">
                        <a href="page.js" className="page-link">1</a>
                    </li>
                    <li className="page-item">
                        <a href="page.js" className="page-link">2</a>
                    </li>
                    <li className="page-item">
                        <a href="page.js" className="page-link">3</a>
                    </li>
                <a className="page-link" href="page.js">
                    <img src={pokeRight} alt="poke-right" width="30" className="img-fluid"/>
                </a>
                </ul>
            </div>
        </div>
    );
}

export default Pagination;