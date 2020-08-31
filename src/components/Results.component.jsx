import React from "react";

import MovieCard from "./MovieCard.component";

const Results = ({ movies, setNominations, nominations, setMovies }) => {
  
  return (
    <>
      <div>
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
            <h1>Search for movies to nominate</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
