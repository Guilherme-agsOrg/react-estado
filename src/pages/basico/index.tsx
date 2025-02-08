import {ContadorProvider} from "@/context/ContadorContext";
import Mais from "../../components/basico/Mais";
import Menos from "../../components/basico/Menos";
import Valor from "../../components/basico/Valor";

export default function ExemploBasico(){
    return(
        <div className="flex flex-col gap-5 p-20">
            <ContadorProvider>
                <Valor/>
                <div className="flex gap-5">
                    <Menos/>
                    <Mais/>
                </div>
            </ContadorProvider>
        </div>
    )
}