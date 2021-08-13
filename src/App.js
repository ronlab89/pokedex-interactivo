import React from 'react';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Global from './Api';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Content from './components/Content';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
const {useState, useEffect} = React;

function App() {
  
  let urlAll = Global.url;

  const [allPokes, setAllPokes] = useState([]);
  const [pokes, setPokes] = useState([]);
  const [pokemones, setPokemones] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const getPokemons = (limit = 20, offset = 20 * page) => {
    axios.get(urlAll + `pokemon/?limit=${limit}&offset=${offset}`)
      .then(res => {
        setAllPokes(res.data)
        return setPokes(res.data.results)
      })
      .catch(error => {
        return error; 
      })
  }

  // console.log('1.- Funcion para traer todos los pokemones')
  // console.log(pokes)

  const fetchPokemons = async () => {
    try {
      setLoading(true);
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
      setTotal(Math.ceil(allPokes.count / 20));
    } catch (err) {
      return err
    }
  }

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0); 
    setPage(nextPage);
  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  }

  useEffect(() => {
      getPokemons();
      fetchPokemons();
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        </header>
        <section>
        <Search />
        <Pagination
          page={page + 1}
          setPage={setPage}
          totalPages={total} 
          onLeftClick={lastPage}
          onRightClick={nextPage}
          />
          <Content
            loading={loading} 
            pokemones={pokemones}
          />
      </section>
      <Footer />
    </div>
  );
}

export default App;