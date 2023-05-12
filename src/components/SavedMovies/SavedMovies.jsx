import React from "react";

import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Proloader from "../Preloader/Preloader";
import Burger from "../Burger/Burger";

function SavedMovies({setPopupMenuOpened, popupMenuOpened, popupMenuClosed}){
    const isLoading = false;

    return (
      <section className="saved">
        <Navigation setIsOpened={setPopupMenuOpened}/>
        <main className="main">
        <article className="saved__content">
        <SearchForm />
          {isLoading ? (
            <Proloader />
          ) : (
          <MoviesCardList/>)}
        </article>
        <Burger isOpened={popupMenuOpened} popupMenuClosed={popupMenuClosed}/>
        </main>
        <Footer />
      </section>
    );
  }

export default SavedMovies