import React, { useEffect } from "react";

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
    console.log(nominations);
  }, [nominations]);
  const nominate = (e) => {
    e.preventDefault();
    if (nominations.length < 5) {
      setNominations([...nominations, movObj]);
    } else {
      alert("You can only nominate 5 movies");
    }
  };
  return (
    <div>
      <img src={poster} alt={`movie poster for ${title}`} />
      <p>
        {title} <span>({year})</span>
      </p>
      <button disabled={isNominated} onClick={nominate}>
        Nominate
      </button>
    </div>
  );
};

export default MovieCard;
