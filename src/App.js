import './App.css'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/layouts/Layout'
import { loadUser } from './store/actions/userActions'
import store from './store/store'
import { Toaster } from 'react-hot-toast'

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Toaster duration="500" position="top-center" />
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
