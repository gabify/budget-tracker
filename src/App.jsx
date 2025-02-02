import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const {user} = useAuthContext()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <Home/> : <Navigate to='/login' />}/>
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />}/>
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
