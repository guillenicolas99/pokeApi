import { Link, Route, useLocation } from 'wouter'
import './App.css'
import Details from './pages/detail'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

function App() {
  const [search, setSearch] = useState('')

  const [location, navigate] = useLocation() // Acceso a navigate para redirigir

  const handleSubmit = e => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/pokemon/${search.trim()}`) // Redirige a la página con el término de búsqueda
      setSearch('')
    }
  }

  return (
    <>
      <header className="bg-teal-700 flex justify-center items-center gap-3 mb-5">
        <Link to='/'>Inicio</Link>
      </header>

      <form className='flex my-5 justify-center space-x-3' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Buscar'
          className='p-1 bg-slate-900 text-white border rounded-md font-bold'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <button className='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 font-bold' type="submit">Buscar</button>
      </form>

      <div className="container mx-auto">
        <Route path='/' component={Home} />
        <Route path='/pokemon/:name' component={Details} />
      </div>
    </>
  )
}

export default App
