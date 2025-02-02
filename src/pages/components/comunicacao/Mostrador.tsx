import { useState } from "react";
import Area from "../template/Area";
import GerarNumero from "./GerarNumero";

export default function Mostrador(){
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function exibirResultado(numero: number){
        setResultado(numero);
    }

    return(
        <Area titulo="Mostrador" cor="red">
            <div className="flex justify-center font-black text-6xl">
                {resultado}
            </div>
            <div className="flex gap-5 p-5">
                <input type="number" value={n1} onChange={(e) => setN1(+e.target.value)} className="input"/>
                <input type="number" value={n2} onChange={(e) => setN2(+e.target.value)} className="input"/>
            </div>
            <GerarNumero numero1={n1} numero2={n2} gerarNumero={exibirResultado}/>
        </Area>
    )
}