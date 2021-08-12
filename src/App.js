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
  
  let urlAll = Global.url;

  const [pokes, setPokes] = useState([]);
  // const [datos, setDatos] = useState([]);
  const [pokemones, setPokemones] = useState([]);

  const getPokemons = () => {
    axios.get(urlAll + 'pokemon/?limit=20&offset=0')
      .then(res => {
        return setPokes(res.data.results)
      })
      .catch(error => {
        return error;
      })
  }

  console.log('1.- Funcion para traer todos los pokemones')
  console.log(pokes)

  // const getPokemonData = (url) => {
      // axios.get(url)
        // .then(res => {
          // return setDatos(res.data.results)
        // })  
        // .catch(error => {
          // return error;
        // })
  // }

  // console.log('2.- Datos')
  // console.log(datos)

      //A partir de aqui es el axios.all
  const fetchPokemons = async () => {
    try {
      // const data = pokes; // Well

      const links = pokes.map((pokemon) => {
          return axios.get(pokemon.url)
            .then(res => {
              return res.data
            })
            .catch(err =>{
              return err
            }) //url de cada pokemon
      })
      console.log('Links Resp')
      console.log(links)
      const getAllPokes = await Promise.all(links)
      setPokemones(getAllPokes)
    }catch(err) {
      return err
    }
  } 

    // console.log('Resultado para pasar por las props')
    // console.log(pokemones)

      //Fin del axios.all


  useEffect(() => {
      getPokemons();
      // getPokemonData();
      fetchPokemons();
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