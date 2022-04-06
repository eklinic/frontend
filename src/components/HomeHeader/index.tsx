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
                    <Logo className="logotipo" />
                </div>

                <nav className="lateralConteiner">
                    <ul className="menu">
                        <li>
                            Início
                            <div className="line" />
                        </li>
                        <li>
                            Conheça
                            <div className="line" />
                        </li>
                        <li>
                            Quem somos
                            <div className="line" />
                        </li>
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
