import React from "react";

import MovieCard from "./MovieCard.component";

const Results = ({ movies, setNominations, nominations }) => {
  return (
    <>
      <div>
        {movies.length ? (
          movies.map((movie) => {
            return (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                year={movie.year}
                poster={movie.poster}
                nominated={movie.nominated}
                nominations={nominations}
                setNominations={setNominations}
                
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
