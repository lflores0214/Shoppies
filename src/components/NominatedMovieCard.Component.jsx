import React from "react";

import { MovieCardContainer, Img, Button } from "./styles/MovieCard.styles";

const NominatedMovieCard = ({
  title,
  year,
  poster,
  id,
  nominations,
  setNominations,
  movies,
  setMovies,
}) => {
  const removeNomination = (e) => {
    e.preventDefault();
    setNominations(nominations.filter((nom) => nom.id !== id));
    setMovies(
      movies.map((el) => (el.id === id ? { ...el, isNominated: false } : el))
    );
  };

  return (
    <MovieCardContainer>
      <Img src={poster !== "N/A" ? poster : null} alt={`poster for ${title}`} />
      <h3>
        {title} <span>({year})</span>
      </h3>
      <Button background="red" onClick={removeNomination}>Remove</Button>
    </MovieCardContainer>
  );
};

export default NominatedMovieCard;
