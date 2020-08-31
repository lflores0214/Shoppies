import React from "react";

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
    <div>
      <img src={poster !== "N/A" ? poster : null} alt={`poster for ${title}`} />
      <h3>{title}</h3>
      <p>({year})</p>
      <button onClick={removeNomination}>Remove</button>
    </div>
  );
};

export default NominatedMovieCard;
