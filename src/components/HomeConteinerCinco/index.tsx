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

                        <Link href="https://www.instagram.com/eklinic">
                            <Insta className="link" />
                        </Link>

                        <Link href="https://api.whatsapp.com/send?phone=5543999186408">
                            <Whats className="link" />
                        </Link>
                    </div>

                </div>

            </Centralizer>




        </Container>
    )
}

export default HomeContainerTres
