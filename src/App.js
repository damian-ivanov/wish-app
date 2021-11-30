import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Create from './components/Create/Create';
import WishList from './components/WishList/WishList';
import WishItem from './components/WishItem/WishItem';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <div className="title">
          <h1>Share your Christmas wish!</h1>
          <h3>See the how it is rated by Santa</h3>
        </div>
        <img src="https://c.tenor.com/D_gQuXRVQ2wAAAAC/sports-sportsmanias.gif" className="App-logo" alt="logo" />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WishList />} />
          <Route path="/create" element={<Create />} />
          <Route path="/wish" element={<WishItem />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
