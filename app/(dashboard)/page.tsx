import { redirect } from "next/navigation"

export default function Page() {
    // placeholder temporário
    const temProdutos = false

    if (temProdutos) {
        redirect("/cadastros/produtos")
    }

    redirect("/cadastros/sem_cadastros")
}
