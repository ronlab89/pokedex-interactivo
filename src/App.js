import React from 'react';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Global from './Api';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Content from './components/Content';
import Footer from './components/Footer';
const {useState, useEffect} = React;

function App() {

  let url = Global.url;

  const [pokemones, setPokemones] = useState([]);

  const getPokemons = () => {
    axios.get(url + 'pokemon/?limit=20&offset=0')
      .then(res => {
        setPokemones(res.data.results);
      })
      .catch(error => {
        return error;
      })
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Search />
        <Content pokemones={pokemones}/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
