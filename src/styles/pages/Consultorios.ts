import styled from 'styled-components'
import theme from '../theme'

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  color:${props => props.theme.colors.azulEscuro};
  text-align:left;

  .clinica{
      display:flex;
      padding:0.8rem 0rem;

        @media(max-width:600px){
            flex-wrap:wrap;
        }

        .infosClinica{
            display:flex;
            flex-direction:column;
            width:60%;

            @media(max-width:600px){
                width:100%;
            }

            .infosTitle{
                padding:0.8rem 0rem;
            }

            .dadosClinica{

                .infosCaract{
                    padding:0.75rem 0rem;

                    .infosCompl{
                        padding:0.25rem 0rem;
                        font-size:120%;
                        display: flex;
                        align-items:center;
                        max-height:5rem;

                        @media(max-width:600px){
                            max-height:100%;
                        }

                        .infosHoras{
                            display:flex;
                            flex-direction:column;
                            align-items:center;
                            padding:0.5rem 1rem;
                            width:30%;

                            span{
                                font-weight: 700;
                            }
                        }

                        .infosDias{
                            display:flex;
                            align-items:center;
                            flex-wrap:wrap;
                            justify-content:center;

                            p{
                                border-radius:10px;
                                color:${props => props.theme.colors.cinza};
                                width:7rem;
                                text-align:center;
                                padding:0.125rem 0rem;
                                margin: 0.125rem 0.5rem;
                            }

                            .true{
                                background:${props => props.theme.colors.azulEscuro};
                                color:${props => props.theme.colors.branco};
                            }
                        }

                        .infosProfs{
                            width:50%;
                            display:flex;
                            flex-direction:column;
                            max-height:5rem;

                            @media(max-width:600px){
                                width:100%;
                            }

                            .profs{
                                max-width:100%;
                                display:flex;
                                flex-direction:column;
                                flex-wrap:wrap;
                                max-height:5rem;

                                p{
                                    border-radius:10px;
                                    color:${props => props.theme.colors.cinza};
                                    width:7rem;
                                    text-align:center;
                                    padding:0.125rem 0rem;
                                    margin: 0.125rem 0.5rem;
                                }

                                .true{
                                    background:${props => props.theme.colors.azulEscuro};
                                    color:${props => props.theme.colors.branco};
                                }
                            }
                        }

                        .infosItems{
                            width:50%;

                            @media(max-width:600px){
                                width:100%;
                            }

                            .items{
                                display:flex;
                                flex-direction:column;
                                align-items:center;
                                flex-wrap:wrap;
                                max-height:4rem;

                                p{
                                    display:flex;
                                    border-radius:10px;
                                    color:${props => props.theme.colors.cinza};
                                    text-align:center;
                                    padding:0.125rem 0rem;
                                    margin: 0.125rem 0.5rem;
                                }


                            }

                        }
                    }

                    .caracteristicas{
                        @media(max-width:600px){
                            display:flex;
                            flex-wrap:wrap;
                            justify-items:center;
                        }
                    }
                }


            }

        }
    }

    .descritivo{
        padding:1rem 0rem;
        .consultorios{
            display:flex;
            flex-wrap:wrap;
        }

        .consult{
            padding:1rem 0rem 0rem 0rem;
            width:50%;

            @media(max-width:600px){
                width:100%;
            }

            .title{
                display:flex;
                justify-content:space-between;

                @media(max-width:600px){
                        flex-wrap:wrap;
                    }

                .priceBox{
                    display:flex;
                    justify-content:space-between;
                    margin:0rem 1rem;
                    width:60%;
                    display:flex;

                    @media(max-width:600px){
                        padding:1rem 0rem;
                        width:100%;
                    }

                    p{
                        margin-right:0.5rem;
                    }

                    span{
                        font-size:150%;
                        font-weight:700;
                        padding-left:0.125rem;
                    }
                }
            }

            :nth-child(odd){
                .traco{
                    display:flex;

                    @media(max-width:600px){
                        display:none;
                    }
                }
            }

            .infosConsult{
                display:flex;
                justify-content:space-between;
                align-items:center;

                @media(max-width:600px){
                    flex-wrap:wrap;
                }

                .details{
                    height:20rem;
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:space-between;

                    @media(max-width:600px){
                        height:100%;
                    }

                    .caract{
                        display:flex;
                        flex-wrap:wrap;
                        justify-content:center;

                        p{
                            margin:0.3rem;

                            @media(max-width:600px){
                                margin:1rem;
                            }
                        }
                    }

                    .disponibilidade{
                        display:flex;
                        max-width:100%;
                        flex-wrap:wrap;
                        justify-content:center;

                        .dia{
                            border:1px solid black;
                            width:3.5rem;
                            text-align:center;
                            border-radius:5px;
                            padding:0.125rem;
                        }

                        @media(max-width:600px){
                            margin:1rem;
                        }
                    }

                    .boxbtn{
                        display: flex;
                        justify-content:center;

                        button{
                            width:10rem;
                            border:none;
                            display:flex;
                            padding:0.5rem;
                            justify-content:space-evenly;
                            align-items:center;
                            border-radius:5px;
                            cursor:pointer;
                            background:${props => props.theme.colors.azulModerado};
                            color:#ffffff;
                            font-size:120%;

                            @media(max-width:600px){
                                margin:0rem 0rem 1rem 0rem;
                            }


                            :hover{
                                background:${props => props.theme.colors.azulEscuro};
                                font-weight:700;
                            }
                        }
                    }

                    .profs{
                        display:flex;
                        max-width:100%;
                        flex-wrap:wrap;
                        justify-content:space-around;

                        p{
                            margin:0.125rem;
                            padding: 0.25rem;
                            color:${props => props.theme.colors.cinza};
                        }

                        .true{
                            background:${props => props.theme.colors.azulEscuro};
                            color:${props => props.theme.colors.branco};
                        }

                        .traco{
                            display:none;
                            padding: 0rem 0rem 0rem 0.25rem;
                        }
                    }

                }
            }

        }
    }

    .traco{
        height:2.5rem;
        width:1rem;
        border-left:1px solid ${props => props.theme.colors.cinza};
        opacity:30%;

        @media(max-width:600px){
            border-bottom:1px solid ${props => props.theme.colors.cinza};
            border-left:none;
        }
    }

`

export const TextChamada = styled.h1`
  font-size: 34px;
  width: 80%;
  text-align: left;
  font-weight: 700;
`

export const TextAdj = styled.p`
  font-size: 20px;
  text-align: left;
  color: ${props => props.theme.colors.cinza};

  @media(max-width:600px){
        padding:0rem 1rem;
        width:100%;
    }
`

export const TextBasic = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.colors.azulEscuro};
`

export const TitleDay = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.colors.branco};
  background:${props => props.theme.colors.azulEscuro};
`

export const TextTitle = styled.p`
  padding: 0px 0px 0px 1rem;
  font-size: 36px;
  text-align: center;
  width: 40%;
  margin: 0 auto;
  font-weight: 700;

  @media(max-width:600px){
    width: 100%;
    }
`


export const Centralizer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height:100%;
  font-size:12px;
`
