import { useContext } from "react";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import CarrinhoContext from "@/context/CarrinhoContext";
import Real from "@/utils/Real";
import { IconX } from "@tabler/icons-react";

export default function Carrinho(){

    const { itens, valorTotal, limpar } = useContext(CarrinhoContext)

    return (
        <Area titulo="Carrinho" cor="green" sumario={Real.format(valorTotal)}>
            <div className="flex flex-col items-center gap-5">
                <div className="flex flex-wrap justify-center gap-4">
                    {itens.length === 0 ? (
                        <CarrinhoVazio/>
                    ) : (
                        itens.map(item => {
                            return <ItemCarrinhoCard key={item.produto.id} item={item}/>
                        })
                    )}
                </div>
                {itens.length > 0 && (
                    <button className="flex gap-2 justify-center w-28 btn-danger" onClick={limpar}>
                        <IconX/> Limpar
                    </button>
                )}
            </div>
        </Area>
    )
}