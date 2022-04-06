import React from 'react'
import Link from 'next/link'

import { Container } from './style'
import Logo from '../../assets/logotipoEklinic.svg'
import useWindowDimensions from '../../units/useWindowDimension'

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
                        <Link href="/" scroll={false}>
                            <li className="link">
                                Início
                                <div className="line" />
                            </li>
                        </Link>
                        <Link href="#quemSomos" scroll={false}>
                            <li className="link">
                                Quem somos
                                <div className="line" />
                            </li>
                        </Link>
                        <Link href="#conheca" scroll={false}>
                            <li className="link">
                                Benefícios
                                <div className="line" />
                            </li>
                        </Link>
                        <Link href="#comofunciona" scroll={false}>
                            <li className="link">
                                Como funciona?
                                <div className="line" />
                            </li>
                        </Link>


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
