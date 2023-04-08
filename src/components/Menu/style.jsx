import styled from "styled-components";


export const MainContainerMenu = styled.div`
  width: 100%; 
  display: flex; 
  justify-content: center;
  margin: 20px 0 20px 0;
`

export const ContainerMenuInput = styled.div`
  width: 50%; 
  display: flex; 
  justify-content: center;
  input{
    width: 100%;
    padding-left: 10px;
    border: 1px solid #fff;
    height: 20px;
    :focus{
      outline: none;
      padding: 5px;
    }
  }

  button{
    border:none;
    padding: 0 10px 0 10px;
    margin-left: 10px;
  }
`