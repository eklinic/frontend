import React from 'react'
import Link from 'next/link'

import { Container } from './style'
import Logo from '../../assets/logotipoEklinic.svg'
import useWindowDimensions from '../../units/useWindowDimension'
import SmothScroll from '../../services/smothscroll'

const HomeMobileHeader: React.FC = () => {



    return (
        <Container>
            <div className="centralizerMenu">
                <div className="conteinerLogo">
                    <Link href='/'>
                        <Logo className="logotipo" />
                    </Link>
                </div>

                <nav className="lateralConteiner">
                    <ul className="menu">
                        <SmothScroll className="link" href="#inicio">
                            <li>
                                Início
                                <div className="line" />
                            </li>
                        </SmothScroll>
                        <SmothScroll className="link" href="#quemSomos">
                            <li>
                                Quem somos
                                <div className="line" />
                            </li>
                        </SmothScroll>
                        <SmothScroll className="link" href="#conheca">
                            <li>
                                Benefícios
                                <div className="line" />
                            </li>
                        </SmothScroll>
                        <SmothScroll className="link" href="#comofunciona">
                            <li>
                                Como funciona?
                                <div className="line" />
                            </li>
                        </SmothScroll>


                    </ul>
                    <div className="btnsContainer">
                        <Link href='/clinicas'>
                            <button className="btnIr">RESERVAR JÁ</button>
                        </Link>
                    </div>
                </nav>
            </div>
        </Container>
    )
}

export default HomeMobileHeader
