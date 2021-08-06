import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    changeInput = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            <div className="d-flex justify-content-around align-items-center">
                <div className="paginas">
                    <p>Pag 1 de 20</p>
                    <button className="btn btn-primary pagina">
                        <FontAwesomeIcon icon={faChevronCircleLeft} />
                    </button>
                    <span>  </span>
                    <button class="btn btn-primary pagina">
                        <FontAwesomeIcon icon={faChevronCircleRight}/>
                    </button>
                </div>
                <div className="busqueda">
                    <form>
                        <input 
                        placeholder="Busca tu pokemon"
                        onChange={this.changeInput.bind(this)}
                        />
                        <button> <FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                    <div className="">{this.state.input}</div>
                </div>
            </div>
        );
    }
}

export default Search;