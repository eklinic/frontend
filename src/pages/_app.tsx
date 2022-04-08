import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../services/lib'
import Analytcs from '../services/Analytics'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'

import theme from '../styles/theme'

import { ChakraProvider } from '@chakra-ui/react'


const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = url => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <Analytcs />
            <GlobalStyle />
        </ThemeProvider>


    )

}

export default MyApp
