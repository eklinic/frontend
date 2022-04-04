import { useRef } from 'react'
import { Container } from './style';



const BoxCarrousselClinica = ({ refs }) => {
    const caroussel = useRef(null)

    const handleLeftClick = () => {
        caroussel.current.scrollLeft -= caroussel.current.offsetWidth

    }
    const handleRigthClick = () => {
        caroussel.current.scrollLeft += caroussel.current.offsetWidth
    }

    return (
        <Container>
            <div className='conteinerCarroussel'>
                <button onClick={handleLeftClick} className='botao'>
                    {'<'}
                </button>
                <div className='carroussel' ref={caroussel}>
                {refs?.map(img =>

                    <div className='departamento'>
                        <div className='boxImage'>
                            <img src={img.attributes.url} />
                        </div>
                    </div>
                    )}


                </div>
                <button onClick={handleRigthClick} className='botao'>
                    {'>'}
                </button>
            </div>

        </Container>
    )
};

export default BoxCarrousselClinica
