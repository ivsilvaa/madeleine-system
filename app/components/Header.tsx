"use client"

import { Menu } from "lucide-react"
import Link from "next/link"


export default function Header() {
    return (
        <header className="h-20 bg-black flex items-center px-6">

            {/* Grupo ESQUERDA */}
            <div className="flex items-center gap-6">

                {/* Menu hambúrguer — mobile / tablet */}
                <label htmlFor="menu" className="lg:hidden cursor-pointer">
                    <Menu size={28} className="text-white" />
                </label>

                {/* Breadcrumb — desktop */}
                <div className="hidden lg:flex text-white gap-2">
                    <a href="#">Home</a>
                    <span>{'>'}</span>
                    <a href="#">Tela inicial</a>
                </div>
            </div>

            {/* Grupo DIREITA */}
            <div className="ml-auto mr-6 flex flex-col items-center justify-center">
                <Link href="#" className="cursor-pointer flex flex-col items-center gap-1">
                    <img
                        src="/user-icon.png"
                        alt="Ícone do usuário"
                        width={36}
                        className="object-contain"
                    />
                    <p className="text-white text-sm">
                        Minha conta
                    </p>
                </Link>
            </div>

        </header>
    )
}
