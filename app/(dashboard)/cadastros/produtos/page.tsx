import SemCadastros from "../sem_cadastros/page"

export default function ProdutosPage() {
    const produtos = [] // depois vem do backend

    if (produtos.length === 0) {
        return <SemCadastros />
    }

    return (
        <section>
            <h1>Produtos cadastrados</h1>
            {/* lista de produtos */}
        </section>
    )
}
