import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    a:visited{
        text-decoration:none;
        color:${props=>props.theme.colors.azulEscuro};
    }
  }

  body {
    font: 400 16px Roboto, sans-serif;
  }
`
