import React from 'react';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Global from './Api';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Loading from './components/Loading';
import Content from './components/Content';
import Footer from './components/Footer';
const {useState, useEffect} = React;

function App() {
  
  let urlAll = Global.url;

  const [pokes, setPokes] = useState([]);
  const [pokemones, setPokemones] = useState([]);
  // const [page, setPage] = useState();
  // const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

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

  const fetchPokemons = async () => {
    try {
      const links = pokes.map(async (pokemon) => {
        try {
          const res = await axios.get(pokemon.url);
          return res.data;
        }
        catch (err) {
          return err;
        } //url de cada pokemon
      })
      const getAllPokes = await Promise.all(links);
      setPokemones(getAllPokes)
      setLoading(false);
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
      getPokemons();
      fetchPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Search />
        {loading ? (
          <Loading />
          ) : (
            <Content pokemones={pokemones}/>
          )
        }
        <Footer />
      </header>
    </div>
  );
}

export default App;