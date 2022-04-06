import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 3.2rem;
  top: 0;
  color: ${props => props.theme.colors.azulEscuro};
  background-color:${props => props.theme.colors.branco};
  box-shadow: 0px 1px 8px ${props => props.theme.colors.sombraCinza};

  @media (max-width:600px){
    height: 100%;
  }



  .centralizerMenu {
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .conteinerLogo{

        .logotipo {
            width: 100%;
            max-height: 100%;
            cursor:pointer;
        }
    }



    .lateralConteiner {
      width: 50%;
      display: flex;
      justify-content: space-around;

      .menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        height: 5rem;
        width: 70%;

        .link {
            text-decoration:none;
            cursor: pointer;
            color: ${props => props.theme.colors.azulEscuro};

          .line {
            width: 1rem;
            border-bottom: 2px solid ${props => props.theme.colors.alaranjado};
          }

          :hover {
            font-weight: 700;
            .line {
              width: 2rem;
              transition-timing-function: ease;
            }
          }
        }
      }
      .btnsContainer {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        button {
          padding: 0.5rem 1rem;
          background-color: ${props => props.theme.colors.azulModerado};
          border: none;
          color: ${props => props.theme.colors.branco};
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;

          :hover {
            background-color: ${props => props.theme.colors.azulEscuro};
          }
        }
      }
    }
  }
`

export const Traco = styled.div``
