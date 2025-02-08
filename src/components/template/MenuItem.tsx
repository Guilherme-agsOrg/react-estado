import Link from "next/link";
import React from "react";

interface MenuItemProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icone: any
    texto: string
    url: string
}

export default function MenuItem(props: MenuItemProps){
    return (
        <Link href={props.url} className="flex flex-col items-center gap-2">
            <div className="
                bg-gradient-to-r from-blue-500 to-green-500
                rounded-full p-7
            ">
                {React.cloneElement(props.icone, {
                    size: 80,
                    stroke:1,
                    className: 'opacity-40'
                })}
            </div>
            <span className="opacity-30 font-black text-3xl">{props.texto}</span>
        </Link>
    )
}