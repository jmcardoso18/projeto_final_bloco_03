

import './App.css'
import Footer from './footer/footer'
import Navbar from './navbar/Navbar'
import Home from './Pages/Home'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <Navbar />

      {/* Conteúdo principal */}
      <main className="flex-1">
        <Home /> 
      </main>

      {/* Footer fixo no final */}
      <Footer />
    </div>
  )
}

export default App
