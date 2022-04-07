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
        max-width:375px;
        min-width:375px;
        padding:1rem;
        display:flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;

        @media(max-width:600px){
            max-width:90vw;
            min-width:90vw;
        }

        .semImagem{
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            color:${props => props.theme.colors.cinza};
        }

        :-webkit-overflow-scrolling:touch;

        :-webkit-scrollbar{
            display:none
        }

        .departamento{
            padding-left: 25px;
            scroll-snap-align: start;
            .boxImage{
                height:280px;
                width: 360px;
                min-width: 64px;
                min-height: 64px;
                background-color:#f5f5f7;
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

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            background: none;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #9e9e9e;
            border-radius: 5px;
            border: 1px solid #ffffff;
        }
    }
}



`
