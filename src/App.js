import React from 'react';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { getPokemons, getPokemonData, searchPokemon } from './Api';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Content from './components/Content';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import { FavoriteProvider } from './contexts/favoriteContext';
const {useState, useEffect} = React;

const localStorageKey = "favorite_pokemon";

function App() {

  // const [pokes, setPokes] = useState([]);
  const [pokemones, setPokemones] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(20, 20 * page);
      const links = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const getAllPokes = await Promise.all(links);
      setPokemones(getAllPokes)
      setLoading(false);
      setTotal(Math.ceil(data.count / 20));
      setNotFound(false);
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
  }, [])

  useEffect(() => {
    getPokemons();
  }, [])

  useEffect(() => {
      if(!searching) {
        fetchPokemons();
      }
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

  const onSearch = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if(!result) {
      setNotFound(true);
      setLoading(false);
      return;
    }else {
      setPokemones([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
   <FavoriteProvider value={{
     favoritePokemons: favorites,
     updateFavoritePokemon: updateFavoritePokemon
   }}>
    <div className="App">
      {/* <header className="App-header"> */}
        <Navbar />
      {/* </header> */}
        <Search onSearch={onSearch}/>
        <Pagination
          page={page + 1}
          totalPages={total} 
          onLeftClick={lastPage}
          onRightClick={nextPage}
          />
          {notFound ? (
            <div class="alert alert-danger d-flex align-items-center justify-content-center" role="alert">
               <h2>⚠ No se encontro el pokemon que buscas!</h2> 
            </div>
          ) : (
            <React.Fragment>
              <Content loading={loading} pokemones={pokemones} />
              <Footer />
            </React.Fragment>
            
          )}
    </div>
   </FavoriteProvider> 
  );
}

export default App;