export default function Page() {
    return (
        <section className="w-full overflow-x-hidden">

            {/* Barra de pesquisa */}
            <div className="mt-6 flex justify-center items-center gap-3 px-4 w-full max-w-6xl mx-auto">

                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="
                        bg-white h-12 rounded-2xl px-4 outline-none
                        border border-gray-300 focus:border-gray-400
                        flex-1
                    "
                />

                <button
                    type="submit"
                    className="
                        flex items-center justify-center
                        bg-black text-white h-12 rounded-2xl cursor-pointer
                        w-32
                    "
                >
                    <p className="text-base font-semibold">Adicionar</p>
                </button>

            </div>

            {/* Dashboard */}
            <div
                className="
                    bg-white border border-gray-300 rounded-2xl
                    mt-6 px-4
                    flex flex-col gap-4 items-center justify-center

                    w-full max-w-6xl mx-auto
                    h-[60vh] sm:h-[65vh] lg:h-[70vh]

                    overflow-hidden
                "
            >
                <h2 className="text-gray-300 text-2xl text-center">
                    Nenhum valor encontrado
                </h2>

                <img
                    src="/icon-no_result.png"
                    alt="Ícone de sem resultado"
                    className="w-76 h-52 object-contain opacity-20"
                />
            </div>

        </section>
    );
}
