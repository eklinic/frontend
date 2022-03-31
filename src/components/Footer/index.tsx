import React, { useState } from 'react'
import Link from 'next/link'

import {
    Container,
    Centralizer
} from './style'



const Footer: React.FC = () => {
    return (
        <Container>
            <Centralizer>
                <p>©️ eklinic.com.br 2022, all rights reserved. </p>
            </Centralizer>

        </Container>
    )
}

export default Footer
