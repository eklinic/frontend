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

                            <Link href="/" scroll={false}>
                                <li className="menuItemNormal">
                                    Início
                                    <div className="line" />
                                </li>
                            </Link>
                            <Link href="#quemSomos" scroll={false}>
                                <li className="menuItemNormal">
                                    Quem somos
                                    <div className="line" />
                                </li>
                            </Link>
                            <Link href="#conheca" scroll={false}>
                                <li className="menuItemNormal">
                                    Benefícios
                                    <div className="line" />
                                </li>
                            </Link>
                            <Link href="#comofunciona" scroll={false}>
                                <li className="menuItemNormal">
                                    Como funciona?
                                    <div className="line" />
                                </li>
                            </Link>

                        </ul>
                    </nav>

                    <ul className="conteinerButtons">
                        <Link href='/clinicas'>
                            <button className="btnIr">RESERVAR JÁ</button>
                        </Link>
                    </ul>
                </ConteinerSubMenu> : null}

        </>
    )
}

export default HeaderMobile
