import './App.css'

import Header from './components/header'
import Footer from './components/footer'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'

function App () {
  const URL = 'https://ny-portfolio-backend.herokuapp.com/'
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects URL={URL} />} />
        <Route path='/about' element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
