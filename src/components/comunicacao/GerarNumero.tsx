import Area from "../template/Area";

interface GerarNumeroProps {
    numero1: number
    numero2: number
    gerarNumero: (resultado: number) => void
}
export default function GerarNumero(props: GerarNumeroProps){
    const min = Math.min(props.numero1, props.numero2);
    const max = Math.max(props.numero1, props.numero2);

    function gerar(){
        const aleatorio = Math.round(Math.random() * (max - min) + min)
        props.gerarNumero?.(aleatorio);
    }

    return (
        <Area titulo="Gerar Número" cor="sky">
            <div className="flex flex-col items-center gap-5">
                <div className="flex justify-center gap-5 text-2xl">
                    <span>Mínimo: {min}</span>
                    <span>Máximo: {max}</span>
                </div>
                <button onClick={gerar} className="btn">Gerar</button>
            </div>
        </Area>
    )
}