import React from "react";

import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";

export default function Movies() {
  return (
    <section className="movies">
      <Navigation />
      <main className="main">
        <SearchForm />
        <MoviesCardList/>
      </main>
      <Footer />
    </section>
  );
}