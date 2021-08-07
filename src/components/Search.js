import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Global from '../Api';
import axios from 'axios';

class Search extends Component {

    url = Global.url;

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            pokes: [],
            status: null
        }
    }

    componentDidMount() {
        this.searchPoke();
    };
    

    changeInput = (event) => {
        this.setState({
            input: event.target.value,
            pokes: this.state.pokes
        });
    }


    searchPoke = () => {
        console.log('Funcionando el metodo');
        axios.get(this.url + 'pokemon/')
            .then(res => {
                this.setState({
                    input: '',
                    pokes: res.data,
                    status: 'success'
                });
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="d-flex justify-content-around align-items-center">
                {/* Paginación */}
                <div className="paginas">
                    <p>Pag 1 de 20</p>
                    <button className="btn btn-primary pagina">
                        <FontAwesomeIcon icon={faChevronCircleLeft} />
                    </button>
                    <span>  </span>
                    <button className="btn btn-primary pagina">
                        <FontAwesomeIcon icon={faChevronCircleRight}/>
                    </button>
                </div>
                {/* Busqueda de pokemones */}
                <div className="busqueda">
                    <form>
                        <input 
                        placeholder="Busca tu pokemon.."
                        onChange={this.changeInput.bind(this)}
                        />
                        <button onClick={this.searchPoke.bind(this)}> 
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                    {this.state.status === 'success' &&
                    <div className="">
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default Search;