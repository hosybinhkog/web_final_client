import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Toaster position="top-center" toastOptions={{ duration: 500 }} />
    <App />
  </Provider>
)
