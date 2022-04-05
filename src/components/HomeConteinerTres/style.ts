import styled from 'styled-components'

export const Container = styled.div`
  height: 100%TextChamada;
  padding: 1rem 0rem;
  color: ${props => props.theme.colors.azulEscuro};
  display: flex;

  .call {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .conteinerConteudo {
    margin: 1rem 0rem;
    display: flex;
    width: 100%;

    @media(max-width:600px){
        flex-wrap:wrap;
    }

    .conteinerBeneficios {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      color: ${props => props.theme.colors.azulEscuro};

      @media(max-width:600px){
        width: 100%;
        }

      .beneficios {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        color: ${props => props.theme.colors.branco};
        margin: 1rem 0rem;

        .cardBeneficio {
          width: 35%;
          height: 12rem;
          box-shadow: 1px 1px 50px ${props => props.theme.colors.sombraCinza};
          padding: 0.5rem;
          margin: 0.25rem;
          text-align: center;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          transition-property: opacity, transform, -webkit-transform;
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

          .vetor {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            height: 110px;
          }

          .text {
            width: 100%;
            height: 3.35rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .prof {
          background: ${props => props.theme.colors.azulEscuro};
        }
        .clinica {
          background: ${props => props.theme.colors.azulModerado};
        }
      }
    }
  }
`

export const Centralizer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`
export const TextChamada = styled.h1`
  padding: 0px 0px 0px 1rem;
  font-size: 36px;
  text-align: center;
  text-decoration: underline;
  width: 40%;
  margin: 0 auto;
  font-weight: 700;
  color: ${props => props.theme.colors.azulEscuro};

  @media(max-width:600px){
    padding: 0px 0px 0px 0rem;
    width: 100%;

        }
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
