import styled from 'styled-components'

export const Container = styled.div`
width:100%;

.conteinerCarroussel{
    margin:0 auto;
    display:flex;

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
        padding:0.5rem;
        display:flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        :-webkit-overflow-scrolling:touch;

        :-webkit-scrollbar{
            display:none
        }

        .departamento{
            padding-left: 10px;
            scroll-snap-align: start;
            .boxImage{
                height:280px;
                width: 360px;
                min-width: 64px;
                min-height: 64px;
                background-color:#f5f5f7;
                padding: 16px;
                border-radius: 4px;

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
