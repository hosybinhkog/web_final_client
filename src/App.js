import './App.css'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/layouts/Layout'
import { loadUser } from './store/actions/userActions'
import store from './store/store'

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
