import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    a:visited{
        text-decoration:none;
        color:${props => props.theme.colors.azulEscuro};
    }

  }

  body {
    font: 400 14px Poppins, sans-serif;
  }

  button{
    font: 400 16px Poppins, sans-serif;
  }
`
