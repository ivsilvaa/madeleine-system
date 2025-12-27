import Image from "next/image"

export default function Sidebar() {
    return (
        <aside
            className="
        fixed top-20 bottom-0 left-0 z-40
        w-64 bg-white text-black
        -translate-x-full
        transition-transform duration-300 ease-in-out
        peer-checked:translate-x-0
        lg:translate-x-0
        grid grid-rows-[1fr_auto]
      "
        >
            {/* Navegação (rola se precisar) */}
            <nav className="pl-8 pt-6 space-y-6 overflow-y-auto">
                <a href="#" className="flex items-start gap-2">
                    <Image src="/icon-home.png" alt="Home" width={32} height={32} />
                    <div>
                        <span className="font-semibold text-2xl">Home</span>
                        <p className="text-gray-600 ml-4">Tela inicial</p>
                    </div>
                </a>

                <a href="#" className="flex items-start gap-2">
                    <Image src="/icon-register.png" alt="Cadastros" width={32} height={32} />
                    <div>
                        <span className="font-semibold text-2xl">Cadastros</span>
                        <p className="text-gray-600 ml-4">Produtos</p>
                    </div>
                </a>
            </nav>

            {/* Logo sempre no fundo */}
            <div className="flex justify-center">
                <Image
                    src="/logo-madeleine.png"
                    alt="Logo Madeleine"
                    width={188}
                    height={150}
                    className="w-auto object-contain"
                />
            </div>
        </aside>
    )
}
