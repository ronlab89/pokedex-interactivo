import React from 'react';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
import { getPokemons } from './Api';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Content from './components/Content';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import { FavoriteProvider } from './contexts/favoriteContext';
const {useState, useEffect} = React;

const localStorageKey = "favorite_pokemon";

function App() {

  // const [allPokes, setAllPokes] = useState([]);
  // const [pokes, setPokes] = useState([]);
  const [pokemones, setPokemones] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  // const getPokemons = (limit = 20, offset = 0) => {
    // axios.get(urlAll + `pokemon/?limit=${limit}&offset=${offset}`)
      // .then(res => {
        // setAllPokes(res.data)
        // return (res.data.results)
      // })
      // .catch(error => {
        // return error; 
      // })
  // }

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(20, 20 * page);
      console.log(`Data ${data}`);
      const links = data.results.map(async (pokemon) => {
        try {
          const res = await axios.get(pokemon.url);
          return res.data;
        }
        catch (err) {
          return err;
        }
      })
      console.log(`LINKS: ${links}`)
      const getAllPokes = await Promise.all(links);
      setPokemones(getAllPokes)
      setLoading(false);
      setTotal(Math.ceil(data.count / 20));
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

  const loadFavoritePokemon = () => {
    const pokeFav = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokeFav);
  }

  useEffect(() => {
    loadFavoritePokemon();
    console.log('FAvorito una sola vez');
  }, [])

  useEffect(() => {
    getPokemons();
  }, [])

  useEffect(() => {
      fetchPokemons();
  }, [page]);

  const updateFavoritePokemon = (name) => {
    const update = [...favorites]
    const isFavorite = favorites.indexOf(name);
    if(isFavorite >= 0) {
      update.splice(isFavorite, 1); 
    }else {
      update.push(name);
    }
    setFavorites(update);
    window.localStorage.setItem(localStorageKey, JSON.stringify(update));
  }

  return (
   <FavoriteProvider value={{
     favoritePokemons: favorites,
     updateFavoritePokemon: updateFavoritePokemon
   }}>
    <div className="App">
      <header className="App-header">
        <Navbar />
        </header>
        <section className="">
        <Search />
        <Pagination
          page={page + 1}
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
   </FavoriteProvider> 
  );
}

export default App;