import { FormStyle } from "./style";

export const InputRating = () => {
  return(
    <FormStyle>
      <h1>Faça sua avaliação</h1>
      <input type="text" placeholder="Digite seu nome Completo" />

      <div style={{width: '100%'}}>
        <textarea placeholder="Fale sobre o que achou deste Filme!">

        </textarea>
      </div>
    </FormStyle>
  );
}