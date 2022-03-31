import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`

export const Centralizer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Traco = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 30rem;
  border-bottom: 2px solid ${props => props.theme.colors.cinza};
  opacity: 0.2;
`
