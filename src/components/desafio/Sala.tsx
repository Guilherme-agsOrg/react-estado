import Estatisticas from "./Estatisticas";
import Player from "./Player";
import CapituloItem from "./CapituloItem";
import { useContext } from "react";
import CursoContext from "@/context/CursoContext";

export default function Sala() {

    const { capitulos } = useContext(CursoContext)

    return (
        <div className="flex">
            <div className="bg-zinc-800 w-96 h-screen overflow-auto">
                {capitulos.map((capitulo) => {
                    return <CapituloItem key={capitulo.id} capitulo={capitulo}/>
                })}
            </div>
            <div className="flex flex-col justify-center items-center gap-4 flex-1">
                <Estatisticas/>
                <Player/>
            </div>
        </div>
    )
}