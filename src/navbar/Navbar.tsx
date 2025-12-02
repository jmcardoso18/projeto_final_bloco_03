import { HandbagIcon, Link, MagnifyingGlassIcon, UserIcon } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-green-900 text-white">
                <div className="container flex items-center justify-between gap-6 text-lg mx-8">

                    {/* LOGO */}
                    <img
                            src="https://ik.imagekit.io/u0isfvxls/PG/logot.png"
                            alt="Logo Navbar"
                            style={{
                                width: "10%"
                            }}
                        />

                    {/* BARRA DE BUSCA */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            console.log("Busca executada")
                        }}
                        className="flex items-center w-full max-w-lg bg-white rounded-full overflow-hidden border border-slate-300 focus-within:ring-2 focus-within:ring-green-300 transition-all"
                    >
                        <input
                            type="search"
                            placeholder="Pesquisar produto..."
                            id="busca"
                            name="busca"
                            required
                            className="flex-1 h-10 px-4 text-slate-700 placeholder-slate-400 focus:outline-none"
                        />
                        <button
                            type="submit"
                            title="Buscar produto"
                            className="h-10 w-12 flex items-center justify-center bg-green-400 hover:bg-green-500 transition-all"
                        >
                            <MagnifyingGlassIcon size={18} weight="bold" className="text-white" />
                        </button>
                    </form>

                    {/* LINKS MENU */}
                    <div className="flex items-center gap-6 whitespace-nowrap">
                        <span>Produtos</span>
                        <span>Categorias</span>
                        <span>Cadastrar categorias</span>
                        <span>Perfil</span>
                        <span>Sair</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
