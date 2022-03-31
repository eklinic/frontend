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
        max-width:1200px;
        padding:1rem;
        display:flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        ::-webkit-overflow-scrolling:touch;

        ::-webkit-scrollbar{
            display:none
        }

        .departamento{
            padding-left: 25px;
            scroll-snap-align: start;
            .boxImage{
                height:150px;
                width: 160px;
                min-width: 64px;
                min-height: 64px;
                background-color:#f5f5f7;
                padding: 16px;
                border-radius: 4px;

                img{
                    height:100%;
                }
            }
        }
    }
}



`
