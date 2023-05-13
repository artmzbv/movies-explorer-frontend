import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NotFoundPage from '../NotFound/NotFoundPage';

function App() {
  const [popupMenuOpened, setPopupMenuOpened] = useState(false)
  const closeMenuPopup = () => {
    setPopupMenuOpened(false)
  }

  return (
    <div className='page'>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Main />} />
    <Route path="/movies" exact element={<Movies
      popupMenuOpened={popupMenuOpened}
      popupMenuClosed={closeMenuPopup}
      setPopupMenuOpened={setPopupMenuOpened}/>} />
    <Route path="/saved" exact element={<SavedMovies
      popupMenuOpened={popupMenuOpened}
      popupMenuClosed={closeMenuPopup}
      setPopupMenuOpened={setPopupMenuOpened}/>} />
    <Route path="/profile" exact element={<Profile
      popupMenuOpened={popupMenuOpened}
      popupMenuClosed={closeMenuPopup}
      setPopupMenuOpened={setPopupMenuOpened}/>} />
    <Route path="/signin" exact element={<Login/>} />
    <Route path="/signup" exact element={<Register/>} />
    <Route path="/*" exact element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
