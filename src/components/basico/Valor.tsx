import ContadorContext from "@/context/ContadorContext";
import Area from "../template/Area";
import { useContext } from "react";

export default function Valor(){

    const {numero} = useContext(ContadorContext);

    return(
        <Area titulo="Valor Total" cor="blue">
            <span className="font-black text-6xl">{numero}</span>
        </Area>
    )
}