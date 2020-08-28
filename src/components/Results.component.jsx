import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard.component";

const Results = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=3ee71779`)
      .then((response) => {
        console.log(response.data.Search);
        setMovies(
          response.data.Search.map((movie) => {
            return {
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster,
              id: movie.imdbID,
            };
          })
        );
        console.log(movies)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(movies.length)
  return (
    <>
      <div>
        <form>
          <label htmlFor="search">Movies</label>
          <input type="text" name="search" onChange={handleChange}></input>
        </form>
      </div>
      <div>
        {movies.length ? (
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                poster={movie.poster}
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
