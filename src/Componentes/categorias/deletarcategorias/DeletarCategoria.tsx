import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { listar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {

	const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta('Tema não encontrado!','info')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            ToastAlerta('Categoria apagada com sucesso','sucesso')

        } catch (error) {
            ToastAlerta('Erro ao apagar a categoria','erro')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }
	
	return (
		<div className="container w-full min-h-[70vh] px-4 pt-6 mx-auto bg-slate-100 flex justify-center">
			<div className="w-md flex flex-col  overflow-hidden justify-start">
				<h1 className="py-4 text-3xl font-semibold text-center text-slate-800 md:text-4xl">
					Deletar Categoria
				</h1>

				<p className="mb-4 text-base font-medium text-center text-slate-700 md:text-lg">
					Tem certeza que deseja deletar a categoria abaixo?
				</p>

				<div className="flex flex-col overflow-hidden border rounded-2xl border-slate-200 shadow-sm">
					<header className="py-3 px-6 bg-orange-300 text-slate-800 font-semibold text-2xl">
                        Categoria
					</header>

					<p className="p-4 text-xl text-slate-800 bg-white md:p-8 md:text-3xl">
						{categoria.nome}
					</p>

					<div className="flex flex-row">
						<button 
							className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 flex items-center justify-center transition"
							onClick={retornar}	
						>
							Não
						</button>

						<button 
							className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 flex items-center justify-center transition"
							onClick={deletarCategoria}
						>
							{ isLoading ?
								<ClipLoader
								color="#ffffff"
								size={24}
							/>
								:
								<span>Sim</span>
                        	}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeletarCategoria
