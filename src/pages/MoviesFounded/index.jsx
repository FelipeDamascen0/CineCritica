import { useEffect } from "react"
import { UseSearchMovieContext } from "../../controller/SearchController"
import { MainContainerMovieFounded } from "./style";
import { Menu } from "../../components/Menu";
import { UseMovieContext } from "../../controller/ControllerMovie";

export const MoviesFounded = () => {
  const { loadMovies, moviesFound } = UseSearchMovieContext();
  const { selectMovie } =  UseMovieContext();
  useEffect(() => {
    loadMovies()
  }, [])

  console.log(moviesFound)

  return(
    <div>
      <Menu />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <MainContainerMovieFounded>
          {
            moviesFound?.map((item) => {
              return(
                <div>
                  <img key={item.id} src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} onClick={() => selectMovie(item)} width="150px" />
                </div>
              );
            })
          } 
        </MainContainerMovieFounded>
      </div>

    </div>
  );
}