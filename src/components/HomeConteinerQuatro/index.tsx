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
import Link from 'next/link'

const homeContainerQuatro: React.FC = () => {
    const [categoria, setCategoria] = useState<number>(1)
    return (
        <Container id='comofunciona'>
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
                                <h4>Escolha um de nossos consultórios</h4>
                            </div>

                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">2</h2>
                                <h4>Entre em contato com nosso atendimento</h4>
                            </div>

                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">3</h2>
                                <h4>Confirme seus dados e a disponibilidade</h4>
                            </div>

                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">4</h2>
                                <h4>Se dirija a clínica na data e hora marcada</h4>
                            </div>

                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">5</h2>
                                <h4>Realize seu atendimento e repita o processo</h4>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="conteinerExplicacao">
                        <div className="box">
                            <div className="title">
                                <h2 className="number">1</h2>
                                <h4>Entre em contato com nosso atendimento</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">2</h2>
                                <h4>Passe os dados, disponibilidade e valores</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="title">
                                <h2 className="number">3</h2>
                                <h4>Compartilhe e fature</h4>
                            </div>
                        </div>
                    </div>
                )}

                <div className="conteinerButtons">
                    <Link href='/clinicas'>
                        <button className={categoria === 1 ? "ativo" : "inativo"}>Quero reservar um consultório</button>
                    </Link>
                    <button onClick={() => window.open('https://api.whatsapp.com/send?phone=5543999186408&text=Oi!%20Gostaria%20de%20saber%20como%20fa%C3%A7o%20para%20compartilhar%20meu%20consult%C3%B3rio%20com%20voc%C3%AAs!')} className={categoria === 2 ? "ativo" : "inativo"}>Quero disponibilizar meu consultório</button>
                </div>
            </Centralizer>
        </Container>
    )
}

export default homeContainerQuatro
