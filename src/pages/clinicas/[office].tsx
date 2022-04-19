import React, { useState, useEffect, useCallback } from 'react'
import { URL_BASE, ClinicaAtributteProps, api } from '../../services/services'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Container, Centralizer, TextChamada, TextAdj, TextBasic, TextTitle, TitleDay } from '../../styles/pages/Consultorios'
import ClinicasHeader from '../../components/ClinicasHeader'
import GoogleMaps from '../../components/Maps'
import BoxClinic from '../../components/BoxClinic'
import Loader from '../../components/Loader'
import BoxCarrousselClinica from '../../components/BoxCarrousselClinica'
import BoxCarrousselConsultorio from '../../components/BoxCarrousselConsultorios'
import WhatsApp from '../../assets/whatsapp.svg'
import useWindowDimensions from '../../services/units'
import HomeMobileHeader from '../../components/HeaderClinicaMobile'
import Footer from '../../components/Footer'
import Link from 'next/link'


interface ClinicasProps {
    id: number
    attributes: ClinicaAtributteProps
}


const Office = () => {
    const [clinicas, setClinicas] = useState<ClinicasProps | any>([])
    const [load, setLoad] = useState(true)
    const { width } = useWindowDimensions();
    const router = useRouter()
    const pid = router.query.office

    useEffect(() => {
        if (pid) {
            getLoad(pid)

        } else {
            setLoad(false)
        }
    }, [pid]);

    async function getLoad(number) {
        try {
            const { data } = await api.get(`clinicas/${number}?populate=*`)
            setClinicas(data.data)
            setLoad(false)

        } catch (e) {
            console.log(e)
        }
    }

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

    const offices = clinicas.attributes?.offices.data

    const sendMensage = (consultorio) => {
        const tirandoespaco = consultorio.replace(" ", "+")

        return window.open(`https://wa.me/5543999186408?text=Ola!+Gostaria+de+mais+infos+do+${tirandoespaco}%2C+referente+a+C00${clinicas?.id}!`)
    }

    return (
        <>
            <Head>
                <title>Clínica C00{clinicas?.id} - e.Klinic - Especialistas em compartilhamendo de clínicas e consultórios </title>
            </Head>
            <Container>
                {width > 600 ? <ClinicasHeader /> : <HomeMobileHeader />}

                <Centralizer>
                    {load === true ?
                        <Loader /> :
                        <>
                            <div className="clinica">
                                <div className="infosClinica">
                                    <Link href='/clinicas'>
                                        <a className='back'> Voltar </a>
                                    </Link>

                                    <div className="infosTitle">
                                        <TextChamada> Clínica C00{clinicas?.id}</TextChamada>
                                        {<TextAdj> {consultoriosQtde(clinicas.attributes?.offices.data.length)} {clinicas.attributes?.address_street} • {clinicas.attributes?.address_city}  </TextAdj>}
                                    </div>
                                    <div className="dadosClinica">
                                        <h3>Informações da Clínica</h3>
                                        <div className="infosCaract">
                                            <TextBasic>Funcionamento</TextBasic>
                                            <div className="infosCompl">
                                                <div className="infosHoras">
                                                    <p>Abertura: <span>{clinicas.attributes?.start_time.substr(0, 5)}</span></p>
                                                    <p>Final:<span>{clinicas.attributes?.end_time.substr(0, 5)}</span></p>
                                                </div>
                                                <div className="traco" />
                                                <div className="infosDias">
                                                    {clinicas.attributes?.days_open.days.map(dia => <p className='true'>{dia}</p>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="infosCaract">
                                            <div className="infosCompl caracteristicas">
                                                <div className="infosItems">
                                                    <TextBasic>Características</TextBasic>
                                                    <div className="items">
                                                        {clinicas.attributes?.clinic_details.items.map(caract => <p>{caract}</p>)}
                                                    </div>
                                                </div>
                                                <div className="traco" />
                                                <div className="infosProfs">
                                                    <TextBasic>Disponível para</TextBasic>
                                                    <div className="profs">
                                                        {clinicas.attributes?.clinic_profissionals.profissionals.map(prof => <p className='true'>{prof}</p>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="clinicaimagem">
                                    <BoxCarrousselClinica refs={clinicas.attributes?.clinic_pictures.data} />
                                </div>
                            </div>
                            <div className="descritivo">
                                <TextTitle>Consultórios</TextTitle>
                                <div className="consultorios">

                                    {offices?.map(consultorio =>
                                        <>
                                            <div className="consult">
                                                <div className="title">
                                                    <TextAdj>{consultorio.attributes.office_name}</TextAdj>
                                                    <div className="priceBox">
                                                        <p>R$/avulsa:<span>{consultorio.attributes.office_price_unit}</span>/hora</p>
                                                        <p>R$/período:<span>{consultorio.attributes.office_price_period}</span>/hora</p>
                                                        <p>R$/dia:<span>{consultorio.attributes.office_price_days}</span>/hora</p>
                                                    </div>
                                                </div>
                                                <div className="infosConsult">
                                                    <div className="boxConsultorios">
                                                        <BoxCarrousselConsultorio refs={consultorio.id} />
                                                    </div>
                                                    <div className="details">
                                                        <div className="caract">
                                                            {consultorio.attributes?.office_characteristics.items.map(caract => <p>{caract}</p>)}

                                                        </div>
                                                        <div className="profs">
                                                            {consultorio.attributes?.office_profissionals.profissionals.map(prof => <p className="true">{prof}</p>)}
                                                        </div>
                                                        {consultorio.attributes.url_calendario === null || undefined ?
                                                            <div className="disponibilidade">
                                                                {consultorio.attributes?.office_availability.days.map(day =>
                                                                    <div className="dia">
                                                                        <TitleDay>{day.name}</TitleDay>
                                                                        <p>
                                                                            {day.inicial} as {day.final}
                                                                        </p>
                                                                    </div>
                                                                )}

                                                            </div> : null}
                                                        <div className="boxbtn">
                                                            <button onClick={() => sendMensage(consultorio.attributes.office_name)}>RESERVAR <WhatsApp /></button>
                                                        </div>
                                                    </div>
                                                    <div className="traco" style={{ height: '30vh' }} />
                                                </div>
                                            </div>
                                            {consultorio.attributes.url_calendario === null || undefined ? null : <div className="agenda">
                                                <div className="title">
                                                    <TextAdj>Agenda {consultorio.attributes.office_name}</TextAdj>
                                                    <iframe src={consultorio.attributes.url_calendario} className="agendaGoogle" scrolling="yes"></iframe>
                                                </div>
                                            </div>}
                                        </>)}

                                </div>
                            </div>
                        </>
                    }

                </Centralizer>
                <Footer />
            </Container>
        </>
    )
}

export default Office
