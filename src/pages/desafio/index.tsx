import Sala from "@/components/desafio/Sala";
import { CursoProvider } from "@/context/CursoContext";

export default function Desafio() {
    return (
        <CursoProvider>
            <Sala/>
        </CursoProvider>
    )
}