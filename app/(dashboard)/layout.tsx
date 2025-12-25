import Header from "@/app/components/Header"
import Sidebar from "@/app/components/Sidebar"



export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-gray-200">
            {/* Header em cima */}
            <Header />

            {/* Conteúdo abaixo */}
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

