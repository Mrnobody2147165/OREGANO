import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes , Route } from 'react-router-dom'
import About from './pages/About.tsx'
import Products from './pages/Products.tsx'
import Contact from './pages/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
