import { UseSearchMovieContext } from "../../controller/SearchController";
import { ContainerMenuInput, MainContainerMenu } from "./style";
import { BsSearch } from 'react-icons/bs'

export const Menu = () => {

  const { movieName, handleSearchInput, searchMovie } = UseSearchMovieContext();

  return(
    <MainContainerMenu>
      <ContainerMenuInput>
        <input type="text" placeholder="Pesquisar Filme" onChange={(event) => handleSearchInput(event)} />
        <button onClick={() => searchMovie(movieName)}>
          <BsSearch />
        </button>
      </ContainerMenuInput>
    </MainContainerMenu>
  );
}