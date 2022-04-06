import React, { useState, useEffect, useCallback } from 'react'
import { URL_BASE, ClinicaAtributteProps, api } from '../../services/services'
import { useRouter } from 'next/router'


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
    console.log(offices)

    const sendMensage = (consultorio) => {
        const tirandoespaco = consultorio.replace(" ", "+")

        return window.open(`https://wa.me/5543999186408?text=Ola!+Gostaria+de+mais+infos+do+${tirandoespaco}%2C+referente+a+C00${clinicas?.id}!`)
    }

    return (
        <Container>
            {width > 600 ? <ClinicasHeader /> : <HomeMobileHeader />}

            <Centralizer>
                {load === true ?
                    <Loader /> :
                    <>
                        <div className="clinica">
                            <div className="infosClinica">
                                <div className="infosTitle">
                                    <TextChamada> C00{clinicas?.id}</TextChamada>
                                    {<TextAdj> {consultoriosQtde(clinicas.attributes?.offices.data.length)} {clinicas.attributes?.address_street} • {clinicas.attributes?.address_city}  </TextAdj>}
                                </div>
                                <div className="dadosClinica">
                                    <div className="infosCaract">
                                        <TextBasic>Funcionamento da Clínica</TextBasic>
                                        <div className="infosCompl">
                                            <div className="infosHoras">
                                                <p>Abertura: <span>{clinicas.attributes?.start_time.substr(0, 5)}</span></p>
                                                <p>Final:<span>{clinicas.attributes?.end_time.substr(0, 5)}</span></p>
                                            </div>
                                            <div className="traco" />
                                            <div className="infosDias">
                                                <p className={clinicas.attributes?.days_open.segunda === true ? 'true' : 'false'}>Segunda-feira</p>
                                                <p className={clinicas.attributes?.days_open.terça === true ? 'true' : 'false'}>Terça-feira</p>
                                                <p className={clinicas.attributes?.days_open.quarta === true ? 'true' : 'false'}>Quarta-feira</p>
                                                <p className={clinicas.attributes?.days_open.quinta === true ? 'true' : 'false'}>Quinta-feira</p>
                                                <p className={clinicas.attributes?.days_open.sexta === true ? 'true' : 'false'}>Sexta-feira</p>
                                                <p className={clinicas.attributes?.days_open.sabado === true ? 'true' : 'false'}>Sábado</p>
                                                <p className={clinicas.attributes?.days_open.domingo === true ? 'true' : 'false'}>Domingo</p>
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
                                                    <p className={clinicas.attributes?.clinic_profissionals.medicina === true ? 'true' : 'false'}>Medicos</p>
                                                    <p className={clinicas.attributes?.clinic_profissionals.fisioterapia === true ? 'true' : 'false'}>Fisioterapeutas</p>
                                                    <p className={clinicas.attributes?.clinic_profissionals.psicologo === true ? 'true' : 'false'}>Psicólogos</p>
                                                    <p className={clinicas.attributes?.clinic_profissionals.nutricao === true ? 'true' : 'false'}>Nutricionistas</p>
                                                    <p className={clinicas.attributes?.clinic_profissionals.fono === true ? 'true' : 'false'}>Fonoaudiologos</p>
                                                    <p className={clinicas.attributes?.clinic_profissionals.edFisico === true ? 'true' : 'false'}>Ed. Físicos </p>
                                                    <p className={clinicas.attributes?.clinic_profissionals.farmacia === true ? 'true' : 'false'}>Farmaceuticos</p>
                                                    <p className={clinicas.attributes?.clinic_profissionals.biomed === true ? 'true' : 'false'}>Biomédicos</p>
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
                                                <BoxCarrousselConsultorio refs={"."} />
                                            </div>
                                            <div className="details">
                                                <div className="caract">
                                                    {consultorio.attributes?.office_characteristics.items.map(caract => <p>{caract}</p>)}

                                                </div>
                                                <div className="profs">
                                                    <p className={consultorio.attributes?.office_profissionals.medicina === true ? 'true' : 'false'}>Medicos</p>
                                                    <p className={consultorio.attributes?.office_profissionals.fisioterapia === true ? 'true' : 'false'}>Fisioterapeutas</p>
                                                    <p className={consultorio.attributes?.office_profissionals.psicologo === true ? 'true' : 'false'}>Psicólogos</p>
                                                    <p className={consultorio.attributes?.office_profissionals.nutricao === true ? 'true' : 'false'}>Nutricionistas</p>
                                                    <p className={consultorio.attributes?.office_profissionals.fono === true ? 'true' : 'false'}>Fonoaudiologos</p>
                                                    <p className={consultorio.attributes?.office_profissionals.edFisico === true ? 'true' : 'false'}>Ed. Físicos </p>
                                                    <p className={consultorio.attributes?.office_profissionals.farmacia === true ? 'true' : 'false'}>Farmaceuticos</p>
                                                    <p className={consultorio.attributes?.office_profissionals.biomed === true ? 'true' : 'false'}>Biomédicos</p>
                                                </div>
                                                <div className="disponibilidade">
                                                    <div className="dia">
                                                        <TitleDay>SEG</TitleDay>
                                                        {consultorio.attributes?.office_availability.segunda === null ?
                                                            <p>-</p>
                                                            :
                                                            <p>{consultorio.attributes?.office_availability.segunda[0]} as {consultorio.attributes?.office_availability.segunda[1]}</p>
                                                        }

                                                    </div>
                                                    <div className="dia">
                                                        <TitleDay>TER</TitleDay>
                                                        {consultorio.attributes?.office_availability.terça === null ?
                                                            <p>-</p>
                                                            :
                                                            <p>{consultorio.attributes?.office_availability.terça[0]} as {consultorio.attributes?.office_availability.terça[1]}</p>
                                                        }
                                                    </div>
                                                    <div className="dia">
                                                        <TitleDay>QUA</TitleDay>
                                                        {consultorio.attributes?.office_availability.quarta === null ?
                                                            <p>-</p>
                                                            :
                                                            <p>{consultorio.attributes?.office_availability.quarta[0]} as {consultorio.attributes?.office_availability.quarta[1]}</p>
                                                        }
                                                    </div>
                                                    <div className="dia">
                                                        <TitleDay>QUI</TitleDay>
                                                        {consultorio.attributes?.office_availability.quinta === null ?
                                                            <p>-</p>
                                                            :
                                                            <p>{consultorio.attributes?.office_availability.quinta[0]} as {consultorio.attributes?.office_availability.quinta[1]}</p>
                                                        }
                                                    </div>
                                                    <div className="dia">
                                                        <TitleDay>SEX</TitleDay>
                                                        {consultorio.attributes?.office_availability.sexta === null ?
                                                            <p>-</p>
                                                            :
                                                            <p>{consultorio.attributes?.office_availability.sexta[0]} as {consultorio.attributes?.office_availability.sexta[1]}</p>
                                                        }
                                                    </div>
                                                    <div className="dia">
                                                        <TitleDay>SAB</TitleDay>
                                                        {consultorio.attributes?.office_availability.sabado === null ?
                                                            <p>-</p>
                                                            :
                                                            <p>{consultorio.attributes?.office_availability.sabado[0]} as {consultorio.attributes?.office_availability.sabado[1]}</p>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="boxbtn">
                                                    <button onClick={() => sendMensage(consultorio.attributes.office_name)}>RESERVAR <WhatsApp /></button>
                                                </div>
                                            </div>
                                            <div className="traco" style={{ height: '30vh' }} />
                                        </div>
                                    </div>)}

                            </div>
                        </div>
                    </>
                }

            </Centralizer>
        </Container>
    )
}

export default Office
