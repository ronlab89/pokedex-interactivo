import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
    return (
        <div>
            <div className="d-flex justify-content-around align-items-center">
                <p>Pag 1 de 20</p>
                <button className="btn btn-primary pagina">
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </button>
                <span>  </span>
                <button className="btn btn-primary pagina">
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </button>
            </div>
        </div>
    );
}

export default Pagination;