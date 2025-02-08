import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";
import { useContext } from "react";
import CatalogoContext from "@/context/CatalogoContext";

export default function Catalogo(){

    const {produtos} = useContext(CatalogoContext)

    function renderizarProdutos(){
        return produtos.map(prod => {
            return <ProdutoCard key={prod.id} produto={prod} />
        })
    }

    return (
        <Area titulo="Catalogo" cor="purple">
            <div className="flex justify-around flex-wrap gap-4">
                {renderizarProdutos()}
            </div>
        </Area>
    )
}