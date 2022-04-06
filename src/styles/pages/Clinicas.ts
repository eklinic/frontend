import styled from 'styled-components'

export const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  color:#ffffff;

  .conteudo{
    display:flex;

    @media(max-width:600px){
        flex-direction: column-reverse;
    }
  }

  .boxes{
    padding:0.5rem;
    max-height:87vh;
    display:flex;
    flex-wrap:wrap;
    overflow:auto;
    width:100%;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: none;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #9e9e9e;
        border-radius: 10px;
        border: 1px solid #ffffff;
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
