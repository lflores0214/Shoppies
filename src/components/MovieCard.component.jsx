import React from "react";

const MovieCard = ({
  title,
  year,
  poster,
  setNominations,
  nominations,
}) => {
  const nomObj = {
    title: title,
    year: year,
    poster: poster,
    nominated: true,
  };
  const nominate = (e) => {
    e.preventDefault();
    setNominations([...nominations, nomObj]);
  };
  return (
    <div>
      <img src={poster} alt={`movie poster for ${title}`} />
      <p>
        {title} <span>({year})</span>
      </p>
      <button onClick={nominate}>Nominate</button>
    </div>
  );
};

export default MovieCard;
