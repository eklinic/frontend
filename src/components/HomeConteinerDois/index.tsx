/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import {
    Container,
    Centralizer,
    TextChamada,
    TextAdj,
    TextBasic,
    TextTitle
} from './style'

const homeContainerDois: React.FC = () => {
    return (
        <Container>
            <Centralizer>
                <TextTitle>QUEM SOMOS</TextTitle>
                <div className="containerCitacao">
                    <div className="citacao">
                        <TextChamada>
                            "Toda pessoa trabalhadora tem sempre uma
                            <span> oportunidade..</span>"
                        </TextChamada>
                        <TextAdj>H. Hubert</TextAdj>
                    </div>
                    <div className="descricao">
                        <TextBasic>
                            Nós nascemos com o princípio de servir, ajudar e principalmente,
                            contruir.
                        </TextBasic>
                        <br />
                        <TextBasic>
                            Por isso, fazemos de tudo para unir horários e espaços ociosos com
                            profissionais em busca de um local de trabalho. O compartilhamento
                            é a chave para o crescimento de todos. Uma oportunidade pode mudar
                            vidas, carreiras e negócios.
                        </TextBasic>
                        <br />
                        <TextBasic>
                            Que tal adquirir essa nova pespectiva de local de trabalho?
                        </TextBasic>
                        <div className="conteinerBtn">
                            <button>RESERVE JÁ!</button>
                        </div>
                    </div>
                </div>
            </Centralizer>
        </Container>
    )
}

export default homeContainerDois
