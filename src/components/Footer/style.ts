import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.azulEscuro};
  color:${props => props.theme.colors.branco};

`

export const Centralizer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height:100%;
  text-align:right;
  font-size:12px;
`
export const TextChamada = styled.h1`
  padding: 0px 0px 0px 1rem;
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
