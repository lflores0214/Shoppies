import React from "react";

import { ResNomContainer } from './styles/ResNom.styles';

import MovieCard from "./MovieCard.component";

const Results = ({
  movies,
  setNominations,
  nominations,
  setMovies,
  search,
}) => {
  return (
    <>
      <ResNomContainer>
  {movies.length ? (<h3>Results for "{`${search}`}"</h3>): null}
        {movies.length ? (
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                poster={movie.poster}
                isNominated={movie.isNominated}
                nominations={nominations}
                setNominations={setNominations}
                setMovies={setMovies}
                movies={movies}
              />
            );
          })
        ) : (
          <div>
            <h3>Search for movies to nominate</h3>
          </div>
        )}
      </ResNomContainer>
    </>
  );
};

export default Results;
