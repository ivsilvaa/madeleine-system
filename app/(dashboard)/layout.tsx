import Header from "@/app/components/Header"
import Sidebar from "@/app/components/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen bg-gray-200">
            <Header />

            {/* INPUT precisa ser irmão DIRETO da Sidebar */}
            <input type="checkbox" id="menu" className="peer hidden" />

            <Sidebar />

            {/* Conteúdo */}
            <main className="ml-0 lg:ml-64 min-h-[calc(100vh-5rem)] overflow-auto p-6">
                {children}
            </main>
        </div>
    )
}
