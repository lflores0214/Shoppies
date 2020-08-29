import React, { useEffect, useState } from "react";

import axios from "axios";

import Results from "./Results.component";
import Nominations from "./Nominations.component";
const Main = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=3ee71779`)
      .then((response) => {
        response.data.Search ? setMovies(
          response.data.Search.map((movie) => {
            return {
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster,
              id: movie.imdbID,
              nominated: false,
            };
          })
        ) : 
        console.log(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log("nominations",nominations);
  return (
    <div>
      <div>
        <form>
          <label htmlFor="search">Movies</label>
          <input type="text" name="search" onChange={handleChange}></input>
        </form>
      </div>
      <Results movies={movies} setNominations={setNominations} nominations={nominations} />
      <Nominations nominations={nominations} />
    </div>
  );
};

export default Main;
