import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 0rem;
  height:10rem;
  color: ${props => props.theme.colors.azulEscuro};

  .conteinerConteudo{
    display:flex;
    height:100%;

        .conteinerChamada{
            width:50%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;

            @media(max-width:600px){
                padding-left:1rem;
            }
        }

        .conteinerMidias{
            margin:0 auto;
            width:40%;
            display:flex;
            justify-content:space-around;
            align-items:center;



            .link{
                cursor:pointer;
            }
        }
    }


`

export const Centralizer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height:100%;
`
export const TextChamada = styled.h1`
  padding: 0px 0px 0px 0rem;
  font-size: 36px;
  text-decoration: underline;
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
