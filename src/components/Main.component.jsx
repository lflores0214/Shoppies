import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  MainContainer,
  SearchContainer,
  ResNomContainer,
  Input,
  Label,
} from "./styles/Main.styles";

import Results from "./Results.component";
import Nominations from "./Nominations.component";

const Main = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState(
    localStorage.getItem("nominations")
      ? JSON.parse(localStorage.getItem("nominations"))
      : []
  );

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=3ee71779`)
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (search.length === 0) {
      setMovies([]);
    }
  }, [search]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <MainContainer>
      <SearchContainer>
        <Label htmlFor="search">Movie Title</Label>
        <Input
          placeholder="Search by movie title"
          type="text"
          name="search"
          onChange={handleChange}
        ></Input>
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
