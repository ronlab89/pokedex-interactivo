import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Search />
      </header>
    </div>
  );
}

export default App;
