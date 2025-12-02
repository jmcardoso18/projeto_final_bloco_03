

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componentes/footer/footer'
import Navbar from './componentes/navbar/Navbar'
import ListarCategorias from './componentes/categorias/listarcategorias/ListarCategorias'
import FormCategoria from './componentes/categorias/formcategoria/FormCategoria'
import DeletarCategoria from './componentes/categorias/deletarcategorias/DeletarCategoria'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home'

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
