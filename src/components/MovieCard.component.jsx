import React from "react";

const MovieCard = ({ title, year, poster }) => {
  return (
    <div>
      <img src={poster} alt={`movie poster for ${title}`}/>
      <p>
        {title} <span>({year})</span>
      </p>
    </div>
  );
};

export default MovieCard
