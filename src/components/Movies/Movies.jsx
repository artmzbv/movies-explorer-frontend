import React from "react";

import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Proloader from "../Preloader/Preloader"

export default function Movies() {
  const isLoading = false;

  return (
    <section className="movies">
      <Navigation />
      <main className="main">
      <article className="movies__content">
      <SearchForm />
        {isLoading ? (
          <Proloader />
        ) : (
        <MoviesCardList/>)}
      </article>
      </main>
      <Footer />
    </section>
  );
}