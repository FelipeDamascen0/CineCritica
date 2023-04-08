import { useEffect, useState } from "react";
import { UseMovieContext } from "../../controller/ControllerMovie";
import { MoviesPoster } from "../Movies/style";
import { Button, ButtonPage, Container, ContainerPages, MainContainer } from "./style";
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Api } from "../../services";
import { Menu } from "../Menu";
import { useParams } from "react-router-dom";

export const MoviesGenre = () => {
  const { moviesGenre, selectMovie, page, setPage, nextPage, previousPage, selectGenre } = UseMovieContext();
  const [totalPages, setTotalPages] = useState();
  
  const MAX_BUTTONS = 5;

  const getPageButtons = (totalPages, currentPage) => {
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > MAX_BUTTONS) {
      const halfMaxButtons = Math.floor(MAX_BUTTONS / 2);
      startPage = currentPage - halfMaxButtons;
      endPage = currentPage + halfMaxButtons;

      if (startPage < 1) {
        endPage = MAX_BUTTONS;
        startPage = 1;
      } else if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - MAX_BUTTONS + 1;
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
  
  const { idGenre } = useParams();
  const id = parseInt(idGenre - 1)
  useEffect(() => {
    const loadAll = async () => {
      const list = await Api.getHomeList(page);
      selectGenre(list[id].items.data.results, list[id].id, list[id].title, page)
      setTotalPages(list[id].items.data.total_pages)
    }
    loadAll()
  }, [page])

  return(
    <div>
      <Menu />
      <Container>
        <MainContainer>
          {
            moviesGenre.map((movie) => {
              return(
                <MoviesPoster key={movie.id} onClick={() => selectMovie(movie)}>
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} width="150px" />
                </MoviesPoster>
              );
            })
          }
          <ContainerPages>
            <Button onClick={() => previousPage()}>
              <GrPrevious color="#fff" size={20} />
            </Button>
            {
              getPageButtons(totalPages, page).map((pageNumber) => (
              <ButtonPage 
                key={pageNumber} 
                onClick={() => setPage(pageNumber)} 
                style={page === pageNumber ? {backgroundColor: '#fff', color:'#000'} : undefined}
              >
                {pageNumber}
              </ButtonPage>
            ))}
            <Button onClick={() => nextPage()}>
              <GrNext color="#fff" size={20} />
            </Button> 
          </ContainerPages>
        </MainContainer>
      </Container>
    </div>
  );
}