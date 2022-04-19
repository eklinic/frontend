import React, { useState, useEffect, useCallback } from 'react'
import { URL_BASE, ClinicaAtributteProps, api } from '../../services/services'
import Head from 'next/head'


import { Container, Centralizer } from '../../styles/pages/Clinicas'
import ClinicasHeader from '../../components/ClinicasHeader'
import GoogleMaps from '../../components/Maps'
import BoxClinic from '../../components/BoxClinic'
import Loader from '../../components/Loader'
import useWindowDimensions from '../../services/units'
import HomeMobileHeader from '../../components/HeaderClinicaMobile'
import Footer from '../../components/Footer'



const Clinicas = () => {
    const [clinicas, setClinicas] = useState([])
    const [load, setLoad] = useState(true)
    const { width } = useWindowDimensions()

    useEffect(() => {


        async function getLoad() {
            try {
                const { data } = await api.get('clinicas?populate=*')
                setClinicas(data.data)

            } catch (e) {
                console.log(e)
            }
        }
        getLoad()


        setLoad(false)

    }, [])


    return (
        <>
            <Head>
                <title>Clínicas Disponíveis - e.Klinic - Especialistas em compartilhamendo de clínicas e consultórios</title>
            </Head>
            <Container>
                {width > 600 ? <ClinicasHeader /> : <HomeMobileHeader />}

                <Centralizer>
                    <div className='conteudo'>
                        {load === true ?
                            <Loader /> :
                            <>
                                <div className="boxes">
                                    {clinicas.map((clinica, key) =>
                                        <BoxClinic
                                            key={key}
                                            urlImage={clinica.attributes?.clinic_pictures.data}
                                            cliniId={clinica?.id}
                                            cliniRua={clinica.attributes?.address_street}
                                            cliniCidade={clinica.attributes?.address_city}
                                            cliniQtdeConsult={clinica.attributes?.offices.data.length}
                                            cliniDispoMedicos={clinica.attributes?.clinic_profissionals.medicina}
                                            cliniDispoNutricao={clinica.attributes?.clinic_profissionals.nutricao}
                                            cliniDispoPsico={clinica.attributes?.clinic_profissionals.psicologo}
                                            cliniDispoFisio={clinica.attributes?.clinic_profissionals.fisioterapia}
                                            cliniPreco={clinica.attributes?.offices.data[0].attributes.office_price_days}
                                        />
                                    )}
                                </div>

                                <GoogleMaps clinics={clinicas} />
                            </>

                        }

                    </div>



                </Centralizer>
                <Footer />



            </Container>


        </>
    )
}

export default Clinicas
