import { useContext } from "react";
import Estatistica from "./Estatistica";
import CursoContext from "@/context/CursoContext";

export default function Estatisticas() {
    const { quantidadeDeAulas, quantidadeDeAulasConcluidas, duracaoTotal, duracaoConcluida, percentualConclusao } = useContext(CursoContext)

    return ( 
        <div className=" flex justify-around items-center w-4/5 h-24 bg-zinc-700 rounded-lg">
            <Estatistica valor={quantidadeDeAulas} texto="Qtde Aulas"/>
            <Estatistica valor={quantidadeDeAulasConcluidas} texto="Aulas Concluídas"/>
            <Estatistica valor={duracaoTotal} texto="Duração Total"/>
            <Estatistica valor={duracaoConcluida} texto="Duração Concluída"/>
            <Estatistica valor={`${percentualConclusao}%`} texto="Perc. Conclusão"/>
        </div>
    )
}