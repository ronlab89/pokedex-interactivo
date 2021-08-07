import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Search />
        {/* <Content /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
