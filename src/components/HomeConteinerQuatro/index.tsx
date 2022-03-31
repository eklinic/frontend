/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import {
    Container,
    Centralizer,
    TextChamada,
    TextTitle,
    TextAdj,
    TextBasic
} from './style'

import Profissional from '../../assets/profissional.svg'
import ProfissionalBranco from '../../assets/profissional_branco.svg'
import Clinica from '../../assets/clinica_cor.svg'
import ClinicaBranco from '../../assets/clinica_branco.svg'

const homeContainerQuatro: React.FC = () => {
    const [categoria, setCategoria] = useState<number>(1)
    return (
        <Container>
            <Centralizer>
                <TextTitle>COMO FUNCIONA?</TextTitle>

                {categoria === 1 ? (
                    <div className="conteinerSelect">
                        <button
                            className="selecionar preencher"
                            onClick={() => setCategoria(1)}
                        >
                            <div className="vetor">
                                <ProfissionalBranco />
                            </div>


                            <h3>PARA PROFISSIONAIS</h3>
                        </button>

                        <button
                            className="selecionar sempreencher"
                            onClick={() => setCategoria(2)}
                        >
                            <div className="vetor">
                                <Clinica />
                            </div>

                            <h3>PARA CLÍNICAS</h3>
                        </button>
                    </div>
                ) : (
                    <div className="conteinerSelect">
                        <button
                            className="selecionar sempreencher"
                            onClick={() => setCategoria(1)}
                        >
                            <div className="vetor">
                                <Profissional />
                            </div>

                            <h3>PARA PROFISSIONAIS</h3>
                        </button>

                        <button
                            className="selecionar preencher"
                            onClick={() => setCategoria(2)}
                        >
                            <div className="vetor">
                                <ClinicaBranco />
                            </div>
                            <h3>PARA CLÍNICAS</h3>
                        </button>
                    </div>
                )}

                {categoria === 1 ? (
                    <div className="conteinerExplicacao">
                        <div className="box">
                            <div className="title">
                                <h2 className="number">1</h2>
                                <h4>Acesse RESERVE JÁ!</h4>
                            </div>
                            <div className="image">imagem</div>
                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">2</h2>
                                <h4>Escolha a clínica desejada</h4>
                            </div>
                            <div className="image">imagem</div>
                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">3</h2>
                                <h4>Entre em contato com nosso atendimento</h4>
                            </div>
                            <div className="image">imagem</div>
                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">4</h2>
                                <h4>Realize a confirmação e pagamento</h4>
                            </div>
                            <div className="image">imagem</div>
                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">5</h2>
                                <h4>Realize seu atendimento</h4>
                            </div>
                            <div className="image">imagem</div>
                        </div>
                    </div>
                ) : (
                    <div className="conteinerExplicacao">
                        <div className="box">
                            <div className="title">
                                <h2 className="number">1</h2>
                                <h4>Entre em contato com nosso atendimento</h4>
                            </div>
                            <div className="image">imagem</div>
                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">2</h2>
                                <h4>Cadastre sua clínica e seus consultórios disponíveis</h4>
                            </div>
                            <div className="image">imagem</div>
                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">3</h2>
                                <h4>Disponibilize para os profissionais cadastrados</h4>
                            </div>
                            <div className="image">imagem</div>
                        </div>
                    </div>
                )}
            </Centralizer>
        </Container>
    )
}

export default homeContainerQuatro
