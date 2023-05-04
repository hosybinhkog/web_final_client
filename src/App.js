import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/layouts/Layout'
import { loadUser, loadStreamer } from './store/actions/userActions'
import { loadDataIndex } from './store/actions/dataIndexActions'
import { loadDataStream } from './store/actions/dataStreamActions'
import store from './store/store'
import Loading from './Components/Loading'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './Components/layouts/auth/protectedRoute'
import { HMSRoomProvider } from '@100mslive/react-sdk'

function App() {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  useEffect(async () => {
    await store.dispatch(loadUser())
    await store.dispatch(loadStreamer())
    await store.dispatch(loadDataIndex())
    await store.dispatch(loadDataStream())
  }, [])

  if (!hasWindow) {
    return <Loading />
  }

  return (
    <div>
      <BrowserRouter>
      <HMSRoomProvider>
          <Toaster duration="500" position="top-center" />
          <Layout />
        </HMSRoomProvider>
      </BrowserRouter>
    </div>
  )
}

export default App