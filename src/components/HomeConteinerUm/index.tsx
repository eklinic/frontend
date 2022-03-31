import React, { useState } from 'react'


import { Container, Centralizer, TextChamada, TextAdj } from './style'

import Profissional from '../../assets/atendimentoProfissional.svg'
import Gestor from '../../assets/gestor.svg'

const HomeContainerUm: React.FC = () => {
    const [categoria, setCategoria] = useState<number>(1)

    return (
        <Container>
            <Centralizer>
                <div className="conteinerConteudo">
                    {categoria === 1 ? (
                        <>
                            <div className="conteinerText">
                                <TextChamada>
                                    Atenda em um consultório por <span>hora</span>,
                                    <span> período</span> ou <span>dia</span>, com o
                                    <span> melhor preço</span> e livre de <span>burocracia</span>
                                </TextChamada>

                                <TextAdj>Como você nunca viu.</TextAdj>

                                <div className="btnSaibaMais">
                                    <button>CONHEÇA JÁ!</button>
                                </div>
                            </div>
                            <div className="conteinerImg">
                                <Profissional style={{ objectFit: 'contain', maxWidth: '100%' }} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="conteinerImg">
                                <Gestor className="imagemConsult" />
                            </div>
                            <div className="conteinerText">
                                <TextChamada>
                                    <span>Diminua </span>os custos da sua estrutura
                                    <span> compartilhando </span> com outros profissionais, de
                                    modo <span> seguro </span> e <span> rentável </span>
                                </TextChamada>

                                <TextAdj>Como você sempre sonhou.</TextAdj>

                                <div className="btnSaibaMais">
                                    <button>CONHEÇA JÁ!</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="divisor">
                    <button
                        className={categoria === 1 ? 'ativado' : ''}
                        onClick={() => setCategoria(1)}
                    >
                        Para profissionais
                    </button>
                    <button
                        className={categoria === 2 ? 'ativado' : ''}
                        onClick={() => setCategoria(2)}
                    >
                        Para clínicas
                    </button>
                </div>
            </Centralizer>
        </Container>
    )
}

export default HomeContainerUm
