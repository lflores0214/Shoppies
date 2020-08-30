import React from "react";

const NominatedMovieCard = ({ title, poster, year, id }) => {
  return (
    <div>
      <img src={poster != "N/A" ? poster : null} alt={`poster for ${title}`} />
      <h3>{title}</h3>
      <p>({year})</p>
    </div>
  );
};

export default NominatedMovieCard;
