import React, { useState } from 'react'

import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import {
    Container
} from './style'
import mapStyles from './mapStyles'
import Link from 'next/link'


const Maps = ({ clinics }) => {
    const [details, setDetails] = useState(null)
    const [posicaoInicial, setPosicaoInicial] = useState({
        lat: -23.2927,
        lng: -51.1732
    })

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.google_maps_key
    })

    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
    };

    console.log(details)

    return (
        <Container>
            {isLoaded ? (

                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={
                        posicaoInicial
                    }
                    options={options}
                    zoom={10}

                >
                    {clinics.map(clinica => {
                        console.log(clinica)
                        return (
                            <>
                                <Marker
                                    position={{ lat: clinica.attributes.geo_coo.data.attributes.latitude, lng: clinica.attributes.geo_coo.data.attributes.longitude }}
                                    onClick={() => { setDetails(clinica) }}
                                />
                            </>

                        )
                    })
                    }

                    {details === null ?
                        null :
                        (<InfoWindow position={{ lat: details.attributes.geo_coo.data.attributes.latitude, lng: details.attributes.geo_coo.data.attributes.longitude }} onCloseClick={() => { setDetails(null) }}>
                            <div className='ConteinerJanela'>
                                <img src={details.attributes.clinic_perfil.data.attributes.formats.small.url} className="perfil" />
                                <Link href={`/clinicas/${details.id}`}>
                                    <div className="texts">
                                        <h2>C00{details.id}</h2>
                                        <p>Conhecer consultórios</p>
                                    </div>

                                </Link>
                            </div>
                        </InfoWindow>)
                    }





                </GoogleMap>
            ) : null}


        </Container>

    )
}

export default Maps
