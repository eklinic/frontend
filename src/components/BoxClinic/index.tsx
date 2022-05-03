import React, { useState } from 'react'
import Link from 'next/link'


import {
    Container,
    TextChamada,
    TextAdj,
    TextObs
} from './style'

import { ClinicaAtributteProps } from '../../services/services'
import BoxCarroussel from '../BoxCarroussel'


const BoxClinic = ({ key, cliniId, cliniRua, cliniCidade, cliniQtdeConsult, cliniDispo, cliniPreco, urlImage }) => {

    function consultoriosQtde(qtde) {
        if (qtde > 0) {
            if (qtde > 1) {
                return `${qtde} consultórios`
            } else {
                return `${qtde} consultório`
            }
        } else {
            return null
        }
    }


    return (
        <Container>
            <div className="images">
                <BoxCarroussel refs={urlImage} />
            </div>

            <div className="details">
                <div className="textDescription">
                    <Link href={`/clinicas/${cliniId}`}>
                        <TextChamada>Clínica {`C00${cliniId}`}</TextChamada>
                    </Link>
                    <TextAdj> {`${cliniRua} • `}  {`${cliniCidade} • `} {`${consultoriosQtde(cliniQtdeConsult)}`}</TextAdj>
                </div>

                <div className="conteinerCaract">
                    <div className="caracteristicas">
                        <TextAdj> Disponível para: </TextAdj>
                        {cliniDispo.length > 5 ?
                            <>
                                <h4>
                                    Multiplos
                                </h4>
                                <Link href={`/clinicas/${cliniId}`}>
                                    <h6>Conferir </h6>
                                </Link>
                            </>
                            :
                            cliniDispo.map(prof => <h4>{prof}</h4>)}


                    </div>
                    <div className="containerPrice">
                        <TextAdj> A partir de: </TextAdj>
                        <TextChamada>R$ {cliniPreco}</TextChamada>
                        <TextObs> /hora. </TextObs>
                    </div>
                </div>

                <div className="links">
                    <Link href={`/clinicas/${cliniId}`}>
                        <a>Conferir consultórios </a>
                    </Link>
                </div>


            </div>


        </Container>
    )
}

export default BoxClinic
