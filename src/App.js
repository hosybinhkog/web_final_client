import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/layouts/Layout'
import Loading from './Components/Loading'
import { loadUser } from './store/actions/user.action'
import store from './store/store'

function App() {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  if (!hasWindow) {
    return <Loading />
  }

  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
