import React, { useState } from 'react'

import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import {
    Container
} from './style'
import mapStyles from './mapStyles'


const Maps = ({ clinics }) => {
    const [posicao, setPosicao] = useState(null)
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

                        return (
                            <>
                                <Marker
                                    position={{ lat: clinica.attributes.geo_coo.data.attributes.latitude, lng: clinica.attributes.geo_coo.data.attributes.longitude }}
                                    onClick={() => { setPosicao(clinica.attributes.geo_coo.data.attributes) }}

                                />
                            </>

                        )
                    })
                    }

                    {posicao === null ?
                        null :
                        (<InfoWindow position={{ lat: posicao.latitude, lng: posicao.longitude }} onCloseClick={() => { setPosicao(null) }}>
                            <p>Teste</p>
                        </InfoWindow>)
                    }





                </GoogleMap>
            ) : null}


        </Container>

    )
}

export default Maps
