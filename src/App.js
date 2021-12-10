import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Create from './components/Create/Create';
import WishList from './components/WishList/WishList';
import WishDetails from './components/WishDetails/WishDetails';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import Logout from './components/Logout/Logout';
import MyProfile from './components/MyProfile/MyProfile';

import { initializeApp } from "firebase/app"
import { firebaseConfig } from './config/firebaseConfig';
import { getAuth } from "firebase/auth";
import Edit from './components/Edit/Edit';
import './App.css';

function App() {

  initializeApp(firebaseConfig);

  function RequireAuth() {
    const auth = getAuth();
    let location = useLocation();
  
    if (!auth.currentUser) {
      return <Navigate to="/login" state={{ prevPath: location.pathname }} />;
    }
    return <Outlet />;
  }

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
          <Route path="/wish/:wishId" element={<WishDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          

          <Route element={<RequireAuth />}>
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:wishId" element={<Edit />} />
          </Route>

        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
