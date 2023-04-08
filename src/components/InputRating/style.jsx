import styled from "styled-components";


export const FormStyle = styled.form`
  margin-top: 20px;
  color: #fff;
  input{
    padding-left: 10px;
    width: 90%;
    height: 30px;
    border: 1px solid #fff;
    background-color: transparent;;
    :focus{
      outline: none;
    }
  }

  h1{
    margin-bottom: 20px;
    font-size: 20px;
  }

  textarea{
    width: 90%;
    height: 30px;
    padding-left: 10px;
    margin-top: 20px;
    border: 1px solid #fff;
    background-color: transparent;;
    color: #fff;
    :focus{
      outline: none;
    }
  }

  @media (min-width: 800px) {
    margin-top: 20px;
    input{
      width: 80%;
      height: 20px;
      border: 1px solid #fff;
      background-color: transparent;;
      :focus{
        outline: none;
      }
    }

    h1{
      margin-bottom: 20px;
    }

    textarea{
      width: 80%;
      padding-left: 10px;
      margin-top: 20px;
      border: 1px solid #fff;
      background-color: transparent;;
      :focus{
        outline: none;
      }
    }
  }

`