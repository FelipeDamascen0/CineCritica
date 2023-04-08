import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { MovieProvider } from "../controller/ControllerMovie";
import { Movie } from "../pages/Movie";
import { MoviesGenre } from "../components/Genres";
import { SearchMovieProvider } from "../controller/SearchController";
import { MoviesFounded } from "../pages/MoviesFounded";

export const AppRoutes = () => {
  return(
    <MovieProvider>
      <SearchMovieProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:nameMovie" element={<Movie />} />
            <Route path="/:idGenre/:page" element={<MoviesGenre />} />
            <Route path="/moviesFounded" element={<MoviesFounded />} />
          </Routes>
        </BrowserRouter>
      </SearchMovieProvider>
    </MovieProvider>
  );
}