import Aula from "./Aula"

export default interface Capitulo {
    id: number
    titulo: string
    ordem: number
    aulas: Aula[]
}