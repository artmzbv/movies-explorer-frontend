import React from "react";

import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Proloader from "../Preloader/Preloader"

function SavedMovies(){
    const isLoading = false;

    return (
      <section className="saved">
        <Navigation />
        <main className="main">
        <article className="saved__content">
        <SearchForm />
          {isLoading ? (
            <Proloader />
          ) : (
          <MoviesCardList   />)}
        </article>
        </main>
        <Footer />
      </section>
    );
  }

export default SavedMovies