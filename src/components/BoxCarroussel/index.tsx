import { useRef, useState } from 'react'
import { Container } from './style';




const BoxCarroussel = ({ refs }) => {
    const caroussel = useRef(null)
    const [load, setLoad] = useState(true)

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

                    {refs === null ?
                        <div className="semImagem">
                            <h4>**Clínica sem fotos disponíveis, acesse para verificar os consultórios disponíveis.**</h4>
                        </div>
                        :
                        refs.map(img =>

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

export default BoxCarroussel
