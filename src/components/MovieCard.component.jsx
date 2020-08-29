import React from "react";

const MovieCard = ({ title, year, poster, setNominations, nominations }) => {
  const nomObj = {
    title: title,
    year: year,
    poster: poster,
    nominated: true,
  };
  const nominate = (e) => {
    e.preventDefault();
    if (nominations.length < 5) {
      setNominations([...nominations, nomObj]);
    } else {
      alert("You can only nominate 5 movies")
    }
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
