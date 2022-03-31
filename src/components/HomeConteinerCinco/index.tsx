import React, { useState } from 'react'
import Link from 'next/link'

import {
    Container,
    Centralizer,
    TextChamada,
    TextAdj,
    TextBasic
} from './style'

import Face from '../../assets/socials/face.svg'
import Insta from '../../assets/socials/insta.svg'
import Whats from '../../assets/socials/whats.svg'


const HomeContainerTres: React.FC = () => {
    return (
        <Container>

            <Centralizer>
                <div className="conteinerConteudo">
                    <div className="conteinerChamada">
                        <TextChamada>DUVIDAS?</TextChamada>

                        <p>Entre em contato com nosso atendimento:</p>
                    </div>
                    <div className="conteinerMidias">
                        <Link href="/" >
                            <Face className="link" />
                        </Link>

                        <Link href="/">
                            <Insta className="link" />
                        </Link>

                        <Link href="/">
                            <Whats className="link" />
                        </Link>
                    </div>

                </div>

            </Centralizer>




        </Container>
    )
}

export default HomeContainerTres
