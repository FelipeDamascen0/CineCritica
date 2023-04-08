import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchMovie = createContext();

export const SearchMovieProvider = ({ children }) => {
  const [movieName, setMovieName] = useState();
  const [moviesFound, setMoviesFound] = useState();
  return(
    <SearchMovie.Provider
      value={{
        movieName,
        moviesFound,
        setMoviesFound,
        setMovieName
      }}
    >
      {children}
    </SearchMovie.Provider>
  );
}

export const UseSearchMovieContext = () => {
  const {movieName, setMovieName, moviesFound, setMoviesFound} = useContext(SearchMovie);
  const history = useNavigate();

  const handleSearchInput = (value) => {
    return setMovieName(value.target.value);
  }

  const searchMovie = (movieName) => {
    setMovieName(movieName);
    history('/moviesFounded')
  }

  const loadMovies = async () => {
    const moviesFounded = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=769b0eb2ecaa9ef5b9707f80f43c6c63&language=pt-BR&query=${movieName}`)
    setMoviesFound(moviesFounded.data.results)
  }

  return{
    searchMovie,
    handleSearchInput,
    loadMovies,
    movieName,
    moviesFound
  }
}