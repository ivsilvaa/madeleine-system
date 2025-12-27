"use client"

import { Menu } from "lucide-react"

export default function Header() {
    return (
        <header className="h-20 bg-black flex items-center px-4">
            <label htmlFor="menu" className="lg:hidden cursor-pointer">
                <Menu size={28} className="text-white" />
            </label>
        </header>
    )
}
