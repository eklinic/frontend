import styled from 'styled-components'

export const Container = styled.div`

  margin: auto auto;

  .divisor {
    width: 50%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    height: 3rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.azulModerado};
    color: ${props => props.theme.colors.azulModerado};

    button {
      border: none;
      background-color: transparent;
      color: ${props => props.theme.colors.azulEscuro};
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      cursor: pointer;
    }
    .ativado {
      width: 50%;
      height: 3rem;
      border-radius: 8px;
      color: ${props => props.theme.colors.branco};
      background: ${props => props.theme.colors.azulModerado};
    }
  }

  .conteinerConteudo {
    display: flex;
    align-items: center;
    height: 30rem;

    .conteinerText {
      position: relative;
      width: 50%;

      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .textAdj {
        font-size: 14px;
      }

      span {
        color: ${props => props.theme.colors.azulEscuro};
      }

      .btnSaibaMais {
        padding: 2rem 1rem;

        button {
          border: none;
          padding: 0.5rem 5rem;
          color: ${props => props.theme.colors.branco};
          background: ${props => props.theme.colors.cinza};
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;

          :hover {
            background: ${props => props.theme.colors.azulModerado};
          }
        }
      }
    }

    .conteinerImg {
      max-width: 500px;
      height: 100%;
      margin: 2rem;
      display: flex;
      align-items: center;
    }
  }
`

export const Centralizer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const TextChamada = styled.h1`
  font-size: 40px;
  width: 80%;
  text-align: left;
`

export const TextAdj = styled.p`
  font-size: 20px;
  width: 80%;
  text-align: left;
  color: ${props => props.theme.colors.cinza};
`
