import CarrinhoContext from "@/context/CarrinhoContext"
import ItemCarrinho from "@/data/model/ItemCarrinho"
import Real from "@/utils/Real"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useContext } from "react"

interface ItemCarrinhoCardProps {
    item: ItemCarrinho
}

export default function ItemCarrinhoCard(props: ItemCarrinhoCardProps){

    const { item } = props
    const { adicionarItem, removerItem } = useContext(CarrinhoContext)
    
    return (
        <div className="flex items-center bg-black rounded-md p-2 gap-5">
            <span>{item.produto.nome}</span>
            <div className="flex items-center gap-2">
                <button className="
                    flex justify-center items-center h-5 w-5 bg-red-500 rounded-sm
                    "
                    onClick={() => removerItem(item.produto)}
                >
                    <IconMinus/>
                </button>
                <button className="
                    flex justify-center items-center h-5 w-5 bg-green-500 rounded-sm
                    "
                    onClick={() => adicionarItem(item.produto)}
                >
                    <IconPlus/>
                </button>
                <span>{item.quantidade}</span>
            </div>
            <div className="bg-blue-500 rounded-sm p-2 font-black">
                {Real.format(item.produto.preco * item.quantidade)}
            </div>
        </div>
    )
}