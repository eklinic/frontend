import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Header from '../components/HomeHeader'

import { Container, Traco } from '../styles/pages/Home'

import HomeContainerUm from '../components/HomeConteinerUm'
import HomeContainerDois from '../components/HomeConteinerDois'
import HomeContainerTres from '../components/HomeConteinerTres'
import HomeContainerQuatro from '../components/HomeConteinerQuatro'
import HomeContainerCinco from '../components/HomeConteinerCinco'
import Footer from '../components/Footer'

const Home = () => {

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <Container>
                <Header />
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
