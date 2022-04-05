/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {
    Container,
    Centralizer,
    TextChamada,
    TextAdj,
    TextBasic
} from './style'

import Roudanas from '../../assets/roudanas 1.svg'
import Coracao from '../../assets/coracao.svg'
import Clinic from '../../assets/clinic.svg'
import Porquinho from '../../assets/porquinho.svg'
import Aviao from '../../assets/aviaozin.svg'
import Pin from '../../assets/pin.svg'
import Grafico from '../../assets/grafico.svg'
import Grana from '../../assets/grana.svg'

const HomeContainerTres: React.FC = () => {
    return (
        <Container>
            <Centralizer>
                <TextChamada>BENEFÍCIOS</TextChamada>

                <div className="conteinerConteudo">
                    <div className="conteinerBeneficios">
                        <h2 >Para os profissionais</h2>
                        <div className="beneficios">
                            <div className="cardBeneficio prof">
                                <div className="vetor">
                                    <Coracao />
                                </div>
                                <div className="text">
                                    <p>Proporcionar um melhor atendimento aos pacientes</p>
                                </div>
                            </div>
                            <div className="cardBeneficio prof">
                                <div className="vetor">
                                    <Clinic />
                                </div>
                                <div className="text">
                                    <p>Estrutura adequada</p>
                                </div>
                            </div>
                            <div className="cardBeneficio prof">
                                <div className="vetor">
                                    <Porquinho />
                                </div>
                                <div className="text">
                                    <p>Preço justo e precificação simples</p>
                                </div>
                            </div>
                            <div className="cardBeneficio prof">
                                <div className="vetor">
                                    <Aviao />
                                </div>
                                <div className="text">
                                    <p>Sem burocracia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="conteinerBeneficios">
                        <h2 className="clinica">Para as clínicas</h2>
                        <div className="beneficios">
                            <div className="cardBeneficio clinica">
                                <div className="vetor">
                                    <Pin />
                                </div>
                                <div className="text">
                                    <p>Melhor aproveitamento do espaço físico</p>
                                </div>
                            </div>
                            <div className="cardBeneficio clinica">
                                <div className="vetor">
                                    <Grafico />
                                </div>
                                <div className="text">
                                    <p>Aumento a taxa de ocupação</p>
                                </div>
                            </div>
                            <div className="cardBeneficio clinica">
                                <div className="vetor">
                                    <Roudanas />
                                </div>

                                <div className="text">
                                    <p>Otimização dos horário de funcionamento</p>
                                </div>
                            </div>
                            <div className="cardBeneficio clinica">
                                <div className="vetor">
                                    <Grana />
                                </div>
                                <div className="text">
                                    <p>Mais faturamento, mais resultado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Centralizer>
        </Container>
    )
}

export default HomeContainerTres
