import { useEffect, useRef, useState } from 'react'
import { Container } from './style';
import { URL_BASE, ConsultoriosProps, api } from '../../services/services'





const BoxCarrousselConsultorio = ({ refs }) => {
    const [consultorio, setConsultorio] = useState<ConsultoriosProps | any>()
    const caroussel = useRef(null)
    const consultorioNumber = refs

    const handleLeftClick = () => {
        caroussel.current.scrollLeft -= caroussel.current.offsetWidth

    }
    const handleRigthClick = () => {
        caroussel.current.scrollLeft += caroussel.current.offsetWidth
    }


    useEffect(() => {
        async function getLoad(number) {
            try {
                const { data } = await api.get(`offices/${number}?populate=*`)
                setConsultorio(data.data)


            } catch (e) {
                console.log(e)
            }
        }
        getLoad(consultorioNumber)
    }, [consultorioNumber]);

    return (
        <Container>
            <div className='conteinerCarroussel'>
                <button onClick={handleLeftClick} className='botao'>
                    {'<'}
                </button>
                <div className='carroussel' ref={caroussel}>

                    {consultorio?.attributes.office_images.data === null || undefined ?
                        <div className="semImagem">
                            <h4>**Consultório sem fotos disponíveis**</h4>
                        </div>
                        :
                        consultorio?.attributes.office_images.data.map(img =>

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

export default BoxCarrousselConsultorio
