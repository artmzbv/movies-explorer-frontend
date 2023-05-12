import React from "react";

import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Proloader from "../Preloader/Preloader"
import Burger from "../Burger/Burger";

export default function Movies({setPopupMenuOpened, popupMenuOpened, popupMenuClosed, isSaved}) {
  const isLoading = false;

  return (
    <>
    <section className="movies">
      <Navigation setIsOpened={setPopupMenuOpened}/>
      <main className="main">
      <article className="movies__content">
      <SearchForm />
        {isLoading ? (
          <Proloader />
        ) : (
        <MoviesCardList
        />)}
      <button type="button" className="movies__button">
          Ещё
      </button>
      </article>
      <Burger isOpened={popupMenuOpened} popupMenuClosed={popupMenuClosed}/>
      </main>
    </section>
    <Footer />
    </>
  );
}
