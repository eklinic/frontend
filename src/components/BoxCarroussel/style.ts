import styled from 'styled-components'

export const Container = styled.div`
width:100%;

.conteinerCarroussel{
    margin:auto auto;
    display:flex;
    min-height:190px;


    .botao{
        margin:auto auto;
        height:8rem;
        width:20px;
        background:none;
        border:none;
        cursor:pointer;

        :hover{
            opacity:0.8;
        }
    }
    .carroussel{
        margin:0 auto;
        max-width:1200px;
        min-height:100%;
        padding:1rem;
        display:flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;


        .semImagem{
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            color:${props => props.theme.colors.cinza};

        }

        ::-webkit-overflow-scrolling:touch;

        ::-webkit-scrollbar{
            display:none
        }

        .departamento{
            padding-left: 5px;
            scroll-snap-align: start;
            .boxImage{
                height:150px;
                width: 180px;
                min-width: 64px;
                min-height: 64px;
                padding: 16px;
                border-radius: 4px;
                display:flex;
                justify-content:center;
                align-items:center;

                img{
                    height:100%;
                    max-width:100%;
                }
            }
        }
    }
}



`
