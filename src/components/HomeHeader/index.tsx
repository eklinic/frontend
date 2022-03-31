import React from 'react'

import { Container } from './style'
import Logo from '../../assets/logotipoEklinic.svg'

const Home: React.FC = () => {
    return (
        <Container>
            <div className="centralizerMenu">
                <Logo className="logotipo" />

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
                        <button className="btnIr">RESERVE JÁ</button>
                    </div>
                </nav>
            </div>
        </Container>
    )
}

export default Home
