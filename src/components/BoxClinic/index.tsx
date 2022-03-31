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


const BoxClinic = ({ key, cliniId, cliniRua, cliniCidade, cliniQtdeConsult, cliniDispoMedicos, cliniDispoNutricao, cliniDispoPsico, cliniDispoFisio, cliniPreco, urlImage }) => {

    function consultoriosQtde(qtde) {
        if (qtde > 0) {
            if (qtde > 1) {
                return `${qtde} consultórios • `
            } else {
                return `${qtde} consultório • `
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
                    <TextChamada> {`C00${cliniId}`}</TextChamada>
                    <TextAdj> {`${cliniRua} • `}  {`${cliniCidade} • `} {`${consultoriosQtde(cliniQtdeConsult)}`}</TextAdj>
                </div>

                <div className="conteinerCaract">
                    <div className="caracteristicas">
                        <TextAdj> Disponível para: </TextAdj>
                        {
                            cliniDispoMedicos === true ? <h4>Medicos</h4> : null
                        }
                        {
                            cliniDispoNutricao === true ? <h4>Nutricionistas</h4> : null
                        }
                        {
                            cliniDispoPsico === true ? <h4>Psicologos</h4> : null
                        }
                        {
                            cliniDispoFisio === true ? <h4>Fisioterapeutas</h4> : null
                        }

                    </div>
                    <div className="containerPrice">
                        <TextAdj> A partir de: </TextAdj>
                        <TextChamada>R$ {cliniPreco}</TextChamada>
                        <TextObs> /hora. </TextObs>
                    </div>
                </div>

                <div className="links">
                    <Link href='/'>
                        <a>Confira mais detalhes</a>
                    </Link>
                </div>


            </div>


        </Container>
    )
}

export default BoxClinic
