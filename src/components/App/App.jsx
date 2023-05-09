import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NotFoundPage from '../NotFound/NotFoundPage';
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='page'>
    {/* <Header/> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Main />} />
    <Route path="/movies" exact element={<Movies/>} />
    <Route path="/saved" exact element={<SavedMovies/>}/>
    <Route path="/profile" exact element={<Profile/>} />
    <Route path="/signin" exact element={<Login/>} />
    <Route path="/signup" exact element={<Register/>} />
    <Route path="/*" exact element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
