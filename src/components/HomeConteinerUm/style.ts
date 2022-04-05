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

    @media(max-width:600px){
        flex-direction:column;
        height: 100%;
    }

    .conteinerText {
      position: relative;
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      @media(max-width:600px){
        padding-top:2rem;
        flex-direction:column;
        width: 100%;
    }

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

        @media(max-width:600px){
            max-width:80%;
        }

        .imgs{
            object-fit: contain;
            max-width: 100%;

            @media(max-width:600px){
            object-fit: none;
            height:100%;
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
  font-size: 40px;
  width: 80%;
  text-align: left;

  @media(max-width:600px){
    font-size: 34px;
    width: 90%;
    text-align: center;
  }
`

export const TextAdj = styled.p`
  font-size: 20px;
  width: 80%;
  text-align: left;
  color: ${props => props.theme.colors.cinza};

  @media(max-width:600px){
    font-size: 28px;
    width: 90%;
    text-align: center;
  }
`
