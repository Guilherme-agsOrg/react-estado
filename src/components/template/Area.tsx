interface AreaProps {
    titulo: string
    sumario?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
    cor: string
}

export default function Area(props: AreaProps){
    return (
        <div className={`
            flex flex-col items-center bg-${props.cor}-500
            rounded-md w-full
        `}>
            <div className={`
                flex items-center ${props.sumario ? 'justify-between' : 'justify-center'}
                w-full bg-black bg-opacity-20 h-14 text-3xl font-black opacity-70
            `}>
                <span className="px-4">{props.titulo}</span>
                {props.sumario && (
                    <span className="
                        flex items-center px-4 bg-black bg-opacity-20 h-full
                    ">{props.sumario}</span>
                )}
            </div>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    )
}