import axios from "axios"

export const URL_BASE = 'http://newapi.eklinic.com.br/api/'

export const api = axios.create({
    baseURL: 'http://newapi.eklinic.com.br/api/'
})

export interface ClinicaAtributteProps {
    Status: boolean
    address_CEP: string
    address_city: string
    address_complement: string
    address_number: string
    address_state: string
    address_street: string
    clinic_details: {
        items: object
    }
    clinic_name: string
    clinic_perfil: {
        data: {
            attributes: {
                url: string
            }
        }
    }
    clinic_whatsapp: string
    days_open: {
        domingo: boolean
        quarta: boolean
        quinta: boolean
        sabado: boolean
        segunda: boolean
        sexta: boolean
        terça: boolean
    }
    geo_coo: {
        data: {
            attributes: {
                latitude: number
                longitude: number
            }
        }
    }
    clinic_profissionals: {
        medicina: boolean
        nutricao: boolean
        psicologo: boolean
        fisioterapia: boolean
    }
    offices: ConsultoriosProps
    responsible_cpf: string
    responsible_name: string
    responsible_whatsapp: string
    start_time: string
    end_time: string

}

export interface ConsultoriosProps {
    data: ConsultorioProps[]
}

export interface ConsultorioProps {
    id: number
    office_availability: {
        quarta: object
        quinta: object
        sabado: object
        segunda: object
        sexta: object
        terça: object
    }
    office_characteristics: {
        items: object
    }
    office_details: string
    office_name: string
    office_price_days: number
    office_price_period: number
    office_price_unit: number
    office_profissionals: {
        fisioterapia: boolean
        medicina: boolean
        psicologo: boolean
    }
}
