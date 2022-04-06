import React from 'react'

import { Container } from './style'
import Logo from '../../assets/logotipoEklinic.svg'
import Link from 'next/link'

const ClinicasHeader: React.FC = () => {
    return (
        <Container>
            <div className="centralizerMenu">
                <Logo className="logotipo" />

                <nav className="lateralConteiner">
                    <ul className="menu">

                        <li onClick={() => window.open('https://api.whatsapp.com/send?phone=5543999186408&text=Ol%C3%A1!%20Eu%20estou%20com%20uma%20d%C3%BAvida!')}>
                            Falar com o atendimento
                            <div className="line" />
                        </li>

                        <li onClick={() => window.open('https://api.whatsapp.com/send?phone=5543999186408&text=Oi!%20Gostaria%20de%20saber%20como%20fa%C3%A7o%20para%20compartilhar%20meu%20consult%C3%B3rio%20com%20voc%C3%AAs!')}>
                            Quero compartilhar minha clínica!
                            <div className="line" />
                        </li>

                    </ul>
                    <div className="btnsContainer">
                        <Link href='/'>
                            <button className="btnIr">VOLTAR AO INICIO</button>
                        </Link>
                    </div>
                </nav>
            </div>
        </Container>
    )
}

export default ClinicasHeader
