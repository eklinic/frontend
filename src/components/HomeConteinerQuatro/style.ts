import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.backgroundCinza};
  margin: auto auto;
  padding: 1rem 0rem;
  max-width: 100%;
  color: ${props => props.theme.colors.azulEscuro};



  .conteinerSelect {
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media(max-width:600px){
        flex-wrap:wrap;
    }

    .selecionar {
      margin: 2rem 0rem;
      width: 20rem;
      height: 8rem;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-weight: 700;

      @media(max-width:600px){
        margin: 1rem 0rem;
    }

      h3 {
        width: 30%;
      }

      .vetor {
        display:flex;
        align-items:center;
        justify-content:center;
        height: 120px;
      }
    }
    .preencher {
      background: ${props => props.theme.colors.azulEscuro};
      border: 3px solid ${props => props.theme.colors.azulEscuro};
      color: ${props => props.theme.colors.branco};
    }

    .sempreencher {
      background: transparent;
      border: 3px solid ${props => props.theme.colors.azulEscuro};
      color: ${props => props.theme.colors.azulEscuro};
    }
  }

  .conteinerExplicacao {
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media(max-width:600px){
        flex-wrap:wrap;
    }

    .box {
      width: 13rem;
      border-radius: 20px;
      border: 1px solid ${props => props.theme.colors.azulEscuro};
      padding: 0.4rem;
      height:6rem;
      display:flex;

      @media(max-width:600px){
        width:12rem;
        margin-bottom:1rem;
        }

      .title {
        display: flex;
        justify-content: left;
        align-items: center;

        .number {
          margin-right: 1rem;
          background: ${props => props.theme.colors.azulEscuro};
          color: ${props => props.theme.colors.backgroundCinza};
          min-width: 3rem;
          height: 3rem;
          border-radius: 100px;
          text-align: center;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .image {
        padding: 1rem;
        height: 50%;
      }
    }
  }

  .conteinerButtons{
      width: 100%;
      margin:2rem 0rem 1.5rem;
      display:flex;
      justify-content:center;

      button{
          margin: 0rem 1rem;
          padding:1rem;
          border:none;
          font-weight:700;
          width:20rem;
          cursor:pointer;

      }

      .ativo{
          background:${props => props.theme.colors.azulEscuro};
          color:${props => props.theme.colors.branco};
      }

      .inativo{
          background:none;
          border:1px solid ${props => props.theme.colors.azulEscuro};
          color:${props => props.theme.colors.azulEscuro};

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

  @media(max-width:600px){
    width: 80%;
    padding: 0px 0px 0px 0rem;
  }
`
