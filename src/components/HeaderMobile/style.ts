import styled from "styled-components"

export const ConteinerMenu = styled.div`
    width:100%;
    height:5.43rem;
    color: ${props => props.theme.colors.azulEscuro};
    background-color:${props => props.theme.colors.branco};
    box-shadow: 0px 1px 8px ${props => props.theme.colors.sombraCinza};
    padding:0rem 1rem;



    .flexRow{
        height:5.43rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        .conteinerLogo{
            width:70%;

            .logo{
                max-width:100%;
            }
        }
    }
`

export const ConteinerSubMenu = styled.div`
    width:100%;
    height:90vh;
    padding:0rem 1rem;

    .conteinerNav{
        height:50%;

        .menu {
            padding:1rem;
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: space-around;
            list-style: none;
            width: 100%;
            height:100%;
            text-decoration:none;


            a{
                text-decoration:none;
                color:${props => props.theme.colors.azulEscuro};
                font-size:130%;
            }

            .menuItemNormal{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                width:100%;
                height:100%;
                border-bottom: 1px solid ${props => props.theme.colors.sombraCinza};

                .line {
                    width: 2rem;
                    border-bottom: 2px solid ${props => props.theme.colors.alaranjado};


                }
            }


        }
    }
    .conteinerButtons{
        padding:1rem;
        display:flex;
        justify-content:space-around;
        list-style: none;
        width: 100%;
        max-height:130%;
        text-decoration:none;
        text-align:center;
        font-size:110%;

        .btnIr {
          padding: 1rem 2rem;
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
`
