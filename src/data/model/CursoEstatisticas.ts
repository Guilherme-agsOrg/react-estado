import Capitulo from "./Capitulo";

export default class CursoEstatisticas{
    constructor(private capitulos: Capitulo[]) {}

    quantidadeDeAulas() {
        return this.capitulos.reduce((quantidade, capitulo) => quantidade + capitulo.aulas.length, 0)
    }

    quantidadeDeAulasConcluidas() {
        return this.capitulos.reduce((quantidade, capitulo) => quantidade + capitulo.aulas.filter(aula => aula.concluida).length, 0)
    }

    duracaoTotalEmSegundos() {
        return this.capitulos.reduce((duracao, capitulo) => duracao + capitulo.aulas.reduce((duracao, aula) => duracao + aula.duracao, 0), 0)
    }

    duracaoTotal() {
        const umaHora = 60*60
        const duracao = this.duracaoTotalEmSegundos()
        const horas = Math.floor(duracao / umaHora)
        const minutos = Math.floor((duracao % umaHora) / 60)
        return `${horas}h ${minutos}m`
    }

    duracaoConcluidaEmSegundos() {
        return this.capitulos.reduce((duracao, capitulo) => duracao + capitulo.aulas.filter(aula => aula.concluida).reduce((duracao, aula) => duracao + aula.duracao, 0), 0)
    }

    duracaoConcluida() {
        const umaHora = 60*60
        const duracao = this.duracaoConcluidaEmSegundos()
        const horas = Math.floor(duracao / umaHora)
        const minutos = Math.floor((duracao % umaHora) / 60)
        return `${horas}h ${minutos}m`
    }

    percentualConclusao() {
        const percentual = this.duracaoConcluidaEmSegundos() / this.duracaoTotalEmSegundos()
        return Math.floor(percentual * 100) 
    }
}