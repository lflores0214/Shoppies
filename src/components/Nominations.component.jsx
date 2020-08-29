import React from "react";
import NominatedMovieCard from "./NominatedMovieCard.Component";
const Nominations = ({ nominations }) => {
  return (
    <div>
      {nominations.length ? (
        nominations.map((nom) => {
          return (
            <NominatedMovieCard
              title={nom.title}
              year={nom.year}
              poster={nom.poster}
              id={nom.key}
            />
          );
        })
      ) : (
        <p>nominate a movie</p>
      )}
    </div>
  );
};

export default Nominations;
