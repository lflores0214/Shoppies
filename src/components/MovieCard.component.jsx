import React from "react";

const MovieCard = ({
  title,
  year,
  poster,
  setNominations,
  nominations,
  id,
  movies,
  setMovies,
  isNominated
}) => {
  const movObj = {
    title: title,
    year: year,
    poster: poster,
    id: id,
  };

  const nominate = (e) => {
    e.preventDefault();
    if (nominations.length < 5) {
      setNominations([...nominations, movObj]);
      setMovies(
        movies.map((el) => (el.id === id ? { ...el, isNominated: true } : el))
      );
    } else {
      alert("You can only nominate 5 movies");
    }
  };
console.log(isNominated)
  return (
    <div>
      <img src={poster} alt={`movie poster for ${title}`} />
      <p>
        {title} <span>({year})</span>
      </p>
      <button disabled={isNominated} onClick={nominate}>Nominate</button>
    </div>
  );
};

export default MovieCard;
