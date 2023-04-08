import { useEffect, useState } from "react";
import { Api } from "../../services";
import { UseMovieContext } from "../../controller/ControllerMovie";


export const Movies = () => {
  const { page, selectGenre, loadMovies, data } = UseMovieContext();

  const fetchMovies = async () => {
    try {
      const movies = await Api.getHomeList(page);
      return movies;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
    loadMovies(fetchMovies)
  }, [page])

  return(
    <div style={{display: 'flex', justifyContent: 'center',flexDirection: 'row', flexWrap: 'wrap'}}>
      {
        data.map((item) => {
          return(
            <div style={{marginLeft: '10px'}} key={item.id}>
              <div style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.back_drop})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '369px',
                height: '184.5px',
                margin: '10px'
              }}>
                <h1 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-end',
                  }} 
                    onClick={() => selectGenre(item.items.data.results, item.id)}
                >
                  <span style={{
                    backgroundColor: 'transparent',
                    padding: '0px 0 20px 20px'
                  }}>{item.title}</span>
                </h1>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}