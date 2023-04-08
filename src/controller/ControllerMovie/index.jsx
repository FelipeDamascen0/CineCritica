import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState({});
  const [moviesGenre, setMoviesGenre] = useState([]);
  const [mediaType, setMediaType]= useState('');
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  return(
    <MovieContext.Provider
      value={{
        id,
        setId,
        data,
        setData,
        page,
        setPage, 
        movie, 
        setMovie, 
        mediaType, 
        setMediaType,
        moviesGenre,
        setMoviesGenre
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const UseMovieContext = () => {
  let { 
    page, 
    setPage, 
    movie, 
    setMovie,
    mediaType, 
    setMediaType, 
    moviesGenre, 
    setMoviesGenre, 
    setData, 
    data,
    id,
    setId
  } = useContext(MovieContext);
  const history = useNavigate();

  const nextPage = () => {
    return setPage(page += 1);
  }

  const previousPage = () => {
    return setPage(page === 1 ? page : page - 1);
  }
  
  const selectMovie = (movie) => {
    console.log(movie)
    history(`/movie/${movie.id}`)
    setMediaType(movie.media_type ?? 'movie')
    setMovie(movie);
  }

  const selectGenre = (genre, id, page) => {
    setId(id - 1 <= 0 ? 0 : id - 1)
    history(`/${id}/${page}`)
    return setMoviesGenre(genre)
  }

  const loadMovies = async (fetch) => {
    const movies = await fetch();
    return setData(movies)
  }

  return{
    page,
    setPage,
    id,
    setData,
    data,
    movie,
    mediaType,
    moviesGenre,
    setMoviesGenre,
    loadMovies,
    selectGenre,
    nextPage,
    previousPage,
    selectMovie
  }
}