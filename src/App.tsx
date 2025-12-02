

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Componentes/footer/footer'
import Navbar from './Componentes/navbar/Navbar'
import Home from './pages/Home/Home'
import ListarCategorias from './Componentes/categorias/listarcategorias/ListarCategorias'
import FormCategoria from './Componentes/categorias/formcategoria/FormCategoria'
import DeletarCategoria from './Componentes/categorias/deletarcategorias/DeletarCategoria'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categorias' element={<ListarCategorias />} />
            <Route path='/cadastrocategoria' element={<FormCategoria />} />
            <Route path='/editarcategoria/:id' element={<FormCategoria />} />
            <Route path='/deletarcategoria/:id' element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
