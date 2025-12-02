import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border border-slate-200 bg-white flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition justify-between">
      <header className="py-3 px-6 bg-orange-300 text-slate-800 font-semibold text-2xl">
        Categoria
      </header>

      <p className="p-8 text-2xl text-slate-700 h-full">
        {categoria.nome}
      </p>

      <div className="flex">

        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-1/2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 flex items-center justify-center transition"
        >
            <button className="flex items-center">
                <PencilIcon 
                    width={32}
                    color="#ffffff"
                />
                <span>Editar</span>
            </button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-1/2 bg-rose-400 hover:bg-rose-500 text-white py-2 flex items-center justify-center transition"
        >
          <button className="flex items-center">
                <TrashIcon 
                    width={32}
                    color="#ffffff"
                />
                <span>Deletar</span>
            </button>
        </Link>

      </div>
    </div>
  );
}

export default CardCategorias;
