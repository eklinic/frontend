import { useRef } from 'react'
import { Container } from './style';



const BoxCarroussel = ({ refs }) => {
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
                    <div className='departamento'>

                        <div className='boxImage'>
                            <img src={refs} />
                        </div>


                    </div>
                    <div className='departamento'>

                        <div className='boxImage'>
                            imagem
                        </div>
                    </div>

                </div>
                <button onClick={handleRigthClick} className='botao'>
                    {'>'}
                </button>
            </div>

        </Container>
    )
};

export default BoxCarroussel
