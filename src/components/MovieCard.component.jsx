import React, { useEffect } from "react";

import { MovieCardContainer, Img, Button } from "./styles/MovieCard.styles";

const MovieCard = ({
  title,
  year,
  poster,
  setNominations,
  nominations,
  id,
  movies,
  setMovies,
  isNominated,
}) => {
  const movObj = {
    title: title,
    year: year,
    poster: poster,
    id: id,
  };
  useEffect(() => {
    setMovies(
      movies.map((el) => {
        for (let i = 0; i < nominations.length; i++) {
          if (el.id === nominations[i].id) {
            el = { ...el, isNominated: true };
          }
        }
        return el;
      })
    );
  }, [nominations]);
  const nominate = (e) => {
    e.preventDefault();
    if (nominations.length < 5) {
      setNominations([...nominations, movObj]);
      localStorage.setItem(
        "nominations",
        JSON.stringify([...nominations, movObj])
      );
    } else {
      alert("You can only nominate 5 movies");
    }
  };

  return (
    <>
      <MovieCardContainer>
        <Img src={poster} alt={`movie poster for ${title}`} />
        <h3>
          {title} <span>({year})</span>
        </h3>
        <Button background="green" disabled={isNominated} onClick={nominate}>
          Nominate
        </Button>
      </MovieCardContainer>
    </>
  );
};

export default MovieCard;
