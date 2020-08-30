import React from "react";

const NominatedMovieCard = ({
  title,
  year,
  poster,
  id,
  nominations,
  setNominations,
}) => {
  return (
    <div>
      <img src={poster !== "N/A" ? poster : null} alt={`poster for ${title}`} />
      <h3>{title}</h3>
      <p>({year})</p>
      <button
        onClick={() =>
          setNominations(nominations.filter((nom) => nom.id !== id))
        }
      >
        Remove
      </button>
    </div>
  );
};

export default NominatedMovieCard;
