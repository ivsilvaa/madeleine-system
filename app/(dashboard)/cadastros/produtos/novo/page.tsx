export default function Page() {
    return (
        <section className="w-full overflow-x-hidden">




            {/* Dashboard */}
            <div
                className="
                    bg-white border border-gray-300 rounded-2xl my-4 px-4 flex flex-col gap-4 items-center 
                    justify-center w-full max-w-6xl mx-auto h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-hidden"
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

            <div className="flex justify-end overflow-hidden px-2 gap-4">
                <button
                    type="reset"
                    className="flex items-center justify-center bg-white text-black h-12 rounded-2xl 
                    cursor-pointer w-32 transition-transform duration-200 ease-in-out hover:scale-105 origin-center"
                >
                    <p className="text-base font-semibold">Limpar</p>
                </button>

                <button
                    type="submit"
                    className="flex items-center justify-center bg-black text-white h-12 rounded-2xl 
                    cursor-pointer w-32 transition-transform duration-200 ease-in-out hover:scale-105 origin-center"
                >
                    <p className="text-base font-semibold">Adicionar</p>
                </button>
            </div>

        </section>
    );
}
