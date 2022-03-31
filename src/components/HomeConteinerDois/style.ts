import styled from 'styled-components'

export const Container = styled.div`
  margin: auto auto;
  height: 24rem;
  padding: 1rem 0rem;
  max-width: 100%;
  background: ${props => props.theme.colors.backgroundCinza};

  .containerCitacao {
    height: 20rem;
    display: flex;
    align-items: center;

    .citacao {
      height: 100%;
      color: ${props => props.theme.colors.azulEscuro};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span {
        font-weight: 700;
      }
    }
    .descricao {
      width: 100%;

      .conteinerBtn {
        padding: 1rem 0rem;
        display: flex;
        justify-content: center;

        button {
          border: none;
          border-radius: 5px;
          background: ${props => props.theme.colors.azulEscuro};
          padding: 0.4rem 5rem;
          color: ${props => props.theme.colors.branco};
          font-weight: 700;
        }
      }
    }
  }
`

export const Centralizer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const TextChamada = styled.h1`
  font-size: 48px;
  width: 80%;
  text-align: left;
  font-weight: 400;
`

export const TextAdj = styled.p`
  font-size: 20px;
  width: 80%;
  text-align: left;
  color: ${props => props.theme.colors.cinza};
`

export const TextBasic = styled.p`
  font-size: 20px;

  text-align: center;
  color: ${props => props.theme.colors.cinza};
`

export const TextTitle = styled.p`
  padding: 0px 0px 0px 1rem;
  font-size: 36px;
  text-align: center;
  text-decoration: underline;
  width: 40%;
  margin: 0 auto;
  font-weight: 700;
  color: ${props => props.theme.colors.backgroundCinza};
  background: ${props => props.theme.colors.azulEscuro};
`
