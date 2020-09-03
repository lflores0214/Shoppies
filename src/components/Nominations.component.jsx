import React from "react";

import { ResNomContainer } from './styles/ResNom.styles';

import NominatedMovieCard from "./NominatedMovieCard.Component";

const Nominations = ({ nominations, setNominations, movies, setMovies }) => {
  return (
    <>
      <ResNomContainer>
        {nominations.length ? <h3>Nominations</h3> : null}
        {nominations.length ? (
          nominations.map((nom) => {
            return (
              <NominatedMovieCard
                title={nom.title}
                year={nom.year}
                poster={nom.poster}
                id={nom.id}
                key={nom.id}
                nominations={nominations}
                setNominations={setNominations}
                movies={movies}
                setMovies={setMovies}
              />
            );
          })
        ) : (
          <h3>Nominate a movie</h3>
        )}
      </ResNomContainer>
    </>
  );
};

export default Nominations;
