import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  MainContainer,
  SearchContainer,
  ResNomContainer,
  Input,
} from "./styles/Main.styles";

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
        if (response.data.Search) {
          setMovies(
            response.data.Search.map((movie) => {
              return {
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
                id: movie.imdbID,
                isNominated: false,
              };
            })
          );
          console.log(movies);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (search.length == 0) {
      setMovies([]);
    }
  }, [search]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <MainContainer>
      <SearchContainer>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Movie Title</label>
          <Input
            placeholder="Search by movie title"
            type="text"
            name="search"
            onChange={handleChange}
          ></Input>
        </form>
      </SearchContainer>
      <ResNomContainer>
        <Results
          movies={movies}
          setNominations={setNominations}
          nominations={nominations}
          setMovies={setMovies}
          search={search}
        />
        <Nominations
          nominations={nominations}
          setNominations={setNominations}
          movies={movies}
          setMovies={setMovies}
        />
      </ResNomContainer>
    </MainContainer>
  );
};

export default Main;
