/* eslint-disable @typescript-eslint/no-explicit-any */
import produtos from "@/data/constants/produtos"
import Produto from "@/data/model/Produto"
import { createContext } from "react"

interface CatalogoContextProps {
    produtos: Produto[]
}

const CatalogoContext = createContext<CatalogoContextProps>({} as any)
export default CatalogoContext

export function CatalogoProvider(props: any){
    return(
        <CatalogoContext.Provider value={{
            produtos,
        }}>
            {props.children}
        </CatalogoContext.Provider>
    )
}