import styled from "styled-components";

export const ContainerMovies = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 15px;
  ::-webkit-scrollbar-track{
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
    border-radius:0;
    background-color: #222;
  }

  ::-webkit-scrollbar{
    width: 5px;
    height: 10px;
    background-color: #222;
  }

  ::-webkit-scrollbar-thumb{
    border-radius:0;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #333;
  }
`
export const MoviesPoster = styled.div`
  margin-top: 1em;
  overflow-x: visible;
  img{
    &:hover{
      width: 155px;
      transition: 0.6s;
    }
    border-radius: 10px;
  }
`

export const PagesStyle = styled.div`
  text-align: center;
  font-size: 20px;
`