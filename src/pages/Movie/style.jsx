import styled from "styled-components";

export const ContainerMovie = styled.div`
  position: relative; 
  padding-top: 56.25%;
  border: none;
  iframe{
    position: absolute;
    top: 0;
    left: 0; 
    width: 100%;  
    max-width: 100%;
    height: 100%;
    border: none;
  }
  @media (min-width: 800px) { 
    padding-top: 0;
    height: 350px;
    display: flex;
    justify-content: center;
    iframe{
      position: relative;
      width: 50%;
      height: 350px;
      border: none;
    }
  }
`

export const ContainerDetails = styled.div`
  display: flex; 
  justify-content: center;
  margin-top: 20px;
  img{
    height: 200px;
  }
`

export const Details = styled.div`
  display: flex;  
  width: 50%;
  @media (max-width: 900px) {
    width: 90%;
    p{
      max-height: 100px;
    }
  }

  img{
    margin-right: 15px;
    max-width: 500px;
  }

  p{
    margin-top: 10px;
    max-height: 50px;
    max-width: 300px;
    overflow-x: hidden;
    color: #555;
    font-weight: bold;
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
  }
`

export const Note = styled.div`
  display: flex;
  align-items: center;
  p{
    margin-left: 5px;
    color: #fff;
  }
`

export const ContainerInput = styled.div`
  width: 90%;
  @media (min-width: 800px) {
    width: 50%;
  }
`
export const MainContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; /* altera a direção do flexbox para empilhar verticalmente */
  justify-content: center; /* centraliza verticalmente o conteúdo */
  align-items: center;
`