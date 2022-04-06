import { ConteinerMenu, ConteinerSubMenu } from "./style"
import { useRouter } from "next/router"
import { useState } from "react"

import Menu from '../../assets/menu.svg'
import Excluir from '../../assets/excluir.svg'
import Logo from '../../assets/logotipoEklinic.svg'

import Link from "next/link"

const HomeMobileHeader: React.FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <ConteinerMenu>

                <div className='flexRow'>
                    <div className='conteinerLogo'>
                        <Link href='/' >
                            <a>
                                <Logo className="logotipo" />
                            </a>
                        </Link>
                    </div>
                    {open === false ? <Menu onClick={() => setOpen(true)} /> : <Excluir onClick={() => setOpen(false)} />}
                </div>
            </ConteinerMenu>

            {open === true ?
                <ConteinerSubMenu>
                    <nav className="conteinerNav">
                        <ul className="menu">

                            <li className='menuItemNormal' onClick={() => window.open('https://api.whatsapp.com/send?phone=5543999186408&text=Ol%C3%A1!%20Eu%20estou%20com%20uma%20d%C3%BAvida!')}>
                                Falar com o atendimento
                                <div className="line" />
                            </li>

                            <li className='menuItemNormal' onClick={() => window.open('https://api.whatsapp.com/send?phone=5543999186408&text=Oi!%20Gostaria%20de%20saber%20como%20fa%C3%A7o%20para%20compartilhar%20meu%20consult%C3%B3rio%20com%20voc%C3%AAs!')}>
                                Quero compartilhar minha clínica!
                                <div className="line" />
                            </li>

                        </ul>
                    </nav>

                    <ul className="conteinerButtons">
                        <Link href='/'>
                            <button className="btnIr">VOLTAR AO INICIO</button>
                        </Link>
                    </ul>
                </ConteinerSubMenu> : null}

        </>
    )
}

export default HomeMobileHeader
