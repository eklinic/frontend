import styled from 'styled-components'

export const Container = styled.div`
  min-width:50%;
  height:85vh;
  margin: 1rem;
  box-shadow: 0px 0px 5px ${props => props.theme.colors.sombraCinza};

  @media(max-width:600px){
    height:60vh;
    }

    .ConteinerJanela{
        text-align:center;
        width:12rem;
        color:${props => props.theme.colors.azulEscuro};
        display:flex;

        .perfil{
            height:5rem;
            width:5rem;
            border-radius:200px;
        }
        .texts{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            cursor:pointer;
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
