

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './footer/footer'
import Navbar from './navbar/Navbar'
import Home from './Pages/Home/Home'

function App() {
  return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home"	element={<Home />}
						/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
