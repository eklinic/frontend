import React from 'react'

import { Container } from './style'
import Logo from '../../assets/logotipoEklinic.svg'

const ClinicasHeader: React.FC = () => {
    return (
        <Container>
            <div className="centralizerMenu">
                <Logo className="logotipo" />

                <nav className="lateralConteiner">
                    <ul className="menu">
                        <li>
                            Falar com o atendimento
                            <div className="line" />
                        </li>
                    </ul>
                    <div className="btnsContainer">
                        <button className="btnIr">VOLTAR AO INICIO</button>
                    </div>
                </nav>
            </div>
        </Container>
    )
}

export default ClinicasHeader
