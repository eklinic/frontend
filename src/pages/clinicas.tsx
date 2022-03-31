import React, { useState, useEffect, useCallback } from 'react'
import { URL_BASE, ClinicaAtributteProps, api } from '../services/services'


import { Container, Centralizer } from '../styles/pages/Clinicas'
import ClinicasHeader from '../components/ClinicasHeader'
import GoogleMaps from '../components/Maps'
import BoxClinic from '../components/BoxClinic'
import Loader from '../components/Loader'



const Clinicas = () => {
    const [clinicas, setClinicas] = useState([])
    const [load, setLoad] = useState(true)

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

    console.log(clinicas)

    return (
        <Container>
            <ClinicasHeader />

            <Centralizer>
                <div className='conteudo'>
                    {load === true ?
                        <Loader /> :
                        <>
                            <div className="boxes">
                                {clinicas.map((clinica, key) =>
                                    <BoxClinic
                                        key={key}
                                        urlImage={clinica.attributes.clinic_pictures.data}
                                        cliniId={clinica.id}
                                        cliniRua={clinica.attributes.address_street}
                                        cliniCidade={clinica.attributes.address_city}
                                        cliniQtdeConsult={clinica.attributes.offices.data.length}
                                        cliniDispoMedicos={clinica.attributes.clinic_profissionals.medicina}
                                        cliniDispoNutricao={clinica.attributes.clinic_profissionals.nutricao}
                                        cliniDispoPsico={clinica.attributes.clinic_profissionals.psicologo}
                                        cliniDispoFisio={clinica.attributes.clinic_profissionals.fisioterapia}
                                        cliniPreco={clinica.attributes.offices.data[0].attributes.office_price_days}
                                    />
                                )}
                            </div>

                            <GoogleMaps clinics={clinicas} />
                        </>

                    }

                </div>



            </Centralizer>




        </Container>


    )
}

export default Clinicas
