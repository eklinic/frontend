import React, { useEffect, useState } from 'react'
import Head from 'next/head'


import useWindowDimensions from '../units/useWindowDimension'

import { Container, Traco } from '../styles/pages/Home'
import Header from '../components/HomeHeader'
import HomeContainerUm from '../components/HomeConteinerUm'
import HomeContainerDois from '../components/HomeConteinerDois'
import HomeContainerTres from '../components/HomeConteinerTres'
import HomeContainerQuatro from '../components/HomeConteinerQuatro'
import HomeContainerCinco from '../components/HomeConteinerCinco'

import Footer from '../components/Footer'
import HeaderMobile from '../components/HeaderMobile'

const Home = () => {
    const { width } = useWindowDimensions();

    return (
        <>
            <Head>
                <title>Bem vindo a e.Klinic - Especialistas em compartilhamendo de clínicas e consultórios</title>
            </Head>
            <Container>
                {width > 600 ? <Header /> : <HeaderMobile />}
                <HomeContainerUm />
                <HomeContainerDois />
                <HomeContainerTres />
                <HomeContainerQuatro />
                <HomeContainerCinco />
                <Footer />
            </Container>
        </>
    )
}

export default Home
