import "./Movies.css"
import React, {useState} from 'react'
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import cards from "../../utils/constants/cards"

function Movies(){
    const [cards, setCards] = useState([]);
    return(
        <section className="movies">
        {/* <Header/> */}
        <main className="main">
        <SearchForm/>
        {/* <Preloader /> */}
        <MoviesCardList cards={cards}/>
        </main>
        {/* <Footer /> */}
        </section>
    )
}

export default Movies