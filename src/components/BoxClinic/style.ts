import styled from 'styled-components'

export const Container = styled.div`
 color: ${props => props.theme.colors.azulEscuro};
 box-shadow: 0px 0px 10px ${props => props.theme.colors.sombraCinza};
 max-width:97%;

 margin:0.5rem 0.5rem;
 display:flex;
 max-height:12rem;
 border-radius:10px;

 .images{
     width:50%;
 }

 .details{
    display:flex;
    flex-direction:column;
    padding:0.5rem 0.75rem;
    height:100%;
    width:50%;
    justify-content:space-between;

    .conteinerCaract{
        display:flex;
        justify-content:space-between;
        align-items:center;

        .caracteristicas{
            width:60%;
            h4{
                padding:0rem 0.74rem;
                background-color:${props => props.theme.colors.azulModerado};
                color:${props => props.theme.colors.branco};
                text-align:center;
                margin:5px;
            }
        }
        .containerPrice{
            display:flex;
            flex-direction:column;
            align-items:center;
        }
    }

    .links{
        padding:0rem 1rem;

        a{
            text-decoration:none;
            font-size:80%;
            cursor:pointer;

            :hover{
                font-weight:700;
            }
        }
    }
 }




`

export const Centralizer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height:100%;
  text-align:right;
  font-size:12px;
`
export const TextChamada = styled.h2`
  color: ${props => props.theme.colors.azulEscuro};
  text-align: left;

`

export const TextAdj = styled.p`
  font-size:90%;
  text-align: left;
  color: ${props => props.theme.colors.cinza};
`

export const TextObs = styled.p`
  font-size:90%;
  text-align: right;
  color: ${props => props.theme.colors.cinza};
`

export const TextBasic = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.cinza};
`
