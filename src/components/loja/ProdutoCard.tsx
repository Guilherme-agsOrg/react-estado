import CarrinhoContext from "@/context/CarrinhoContext";
import Produto from "@/data/model/Produto"
import Real from "@/utils/Real";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image"
import { useContext } from "react";

interface ProdutoCardProps {
    produto: Produto 
}

export default function ProdutoCard(props: ProdutoCardProps){
    const { produto } = props; 
    const { adicionarItem } = useContext(CarrinhoContext)

    return (
        <div className="
            flex flex-col gap-3 p-2
            rounded-md overflow-hidden bg-black
        ">
            <Image 
                src={produto.imagem} 
                alt="imagem do produto" 
                width={300} 
                height={150} 
                className="rounded-md"
            />
            <div className="flex justify-between items-center px-4">
                <span className="font-black text-xl">{produto.nome}</span>
                <span className="text-green-400">{Real.format(produto.preco)}</span>
            </div>
            <p className="px-4 text-sm text-zinc-400">{produto.descricao}</p>
            <button className="
                flex justify-center gap-2 btn-info
                "
                onClick={() => adicionarItem(produto)}
            >
                <IconShoppingCartPlus/> Adicionar
            </button>
        </div>
    )
}