import { ConteinerMenu, ConteinerSubMenu } from "./style"
import { useRouter } from "next/router"
import { useState } from "react"

import Menu from '../../assets/menu.svg'
import Excluir from '../../assets/excluir.svg'
import Logo from '../../assets/logotipoEklinic.svg'

import Link from "next/link"

const HeaderMobile: React.FC = () => {
    const route = useRouter()
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
                            <li className='menuItemNormal'>
                                Início
                                <div className="line" />
                            </li>
                            <li className='menuItemNormal'>
                                Conheça
                                <div className="line" />
                            </li>
                            <li className='menuItemNormal'>
                                Quem somos
                                <div className="line" />
                            </li>

                        </ul>
                    </nav>

                    <ul className="conteinerButtons">
                        <button className="btnIr">RESERVAR JÁ</button>
                    </ul>
                </ConteinerSubMenu> : null}

        </>
    )
}

export default HeaderMobile
