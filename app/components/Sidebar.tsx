import Image from "next/image"

export default function Sidebar() {
    return (
        <section className="w-64 h-full bg-white text-black flex flex-col">

            {/* Navegação */}
            <nav className="pl-8 pt-6 space-y-4 flex-1">

                <a href="#" className="flex items-start gap-2">
                    <Image
                        src="/icon-home.png"
                        alt="Home"
                        width={32}
                        height={32}
                        className="mt-1"
                    />

                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl mt-1">Home</span>
                        <p className="text-gray-600 ml-4">Tela inicial</p>
                    </div>
                </a>

                <a href="#" className="flex items-start gap-2">
                    <Image
                        src="/icon-register.png"
                        alt="Cadastros"
                        width={32}
                        height={32}
                        className="mt-1"
                    />

                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl">Cadastros</span>
                        <p className="text-gray-600 ml-4">Produtos</p>
                    </div>
                </a>

            </nav>

            {/* Logo */}
            <div className="p-6 flex justify-center shrink-0">
                <Image
                    src="/logo-madeleine.png"
                    alt="Logo Madeleine"
                    width={188}
                    height={150}
                    quality={100}
                    className="w-auto object-contain"
                />
            </div>

        </section>
    )
}
