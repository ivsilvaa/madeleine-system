export default function Page() {
    return (
        <section>
            <div className="mt-6 flex justify-center items-center gap-3">
                {/* Campo de pesquisa fake */}
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="flex items-center justify-start bg-white w-212 h-12 rounded-2xl px-4 outline-none
                    border border-gray-300 focus:border-gray-400">
                </input>

                {/* Botão */}
                <button
                    type="submit"
                    className="flex items-center justify-center bg-black text-white w-50 h-12 rounded-2xl cursor-pointer"
                >
                    <p className="text-base font-semibold">Adicionar</p>
                </button>
            </div>
        </section>

    )
}
