import axios from "axios";
import { UseMovieContext } from "../../controller/ControllerMovie"
import { useEffect, useState } from "react";
import { ContainerDetails, ContainerInput, ContainerMovie, Details, MainContainerInput, Note } from "./style";
import { InputRating } from "../../components/InputRating";
import Star from '@mui/icons-material/Star';
import { Menu } from "../../components/Menu";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const { movie, mediaType } = UseMovieContext();
  const [video, setVideo] = useState();
  const [trailerUnvailable, setTrailerUnvaiable] = useState(false);

  const { idMovie } = useParams();
  console.log(idMovie)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${mediaType}/${idMovie}/videos?api_key=769b0eb2ecaa9ef5b9707f80f43c6c63&language=en-US`)
    .then((response) => {
      if(response.data.results.length <= 0){
        setTrailerUnvaiable(!trailerUnvailable)
      }
      response.data.results.map((item) => item.type === 'Trailer' ? setVideo(item.key) : '')
    })
  }, [idMovie, mediaType])

  return(
    <div>
      <Menu />
      <ContainerMovie>
        {
          trailerUnvailable
          ? 'Trailer Indisponivel'
          : <iframe src={`https://www.youtube.com/embed/${video}?autoplay=1&controls=0&title=0`} allow="autoplay"></iframe>
        }
      </ContainerMovie>
      <ContainerDetails>
        <Details>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} width='150px' />
          <div>
            <h3>{movie.title ?? movie.name}</h3>
            <Note>
              <Star sx={{fontSize: 30, color: 'yellow'}} /> 
              <p>{movie.vote_average.toFixed(2)}</p>
            </Note>
            <h5 style={{marginTop: '15px'}}>Data de Lançamento: <span>{movie.release_date}</span></h5>
            <p>{movie.overview}</p>
          </div>
        </Details>
      </ContainerDetails>

      <MainContainerInput>
        <ContainerInput>
          <InputRating />
        </ContainerInput>
      </MainContainerInput>
    </div>
  );
}