import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css'
import  "./fontiran.css"
import { Provider } from 'react-redux'
import { store } from './Redux/rootStore'
import { RouterProvider } from 'react-router-dom'
import { router } from './configs/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

  </StrictMode>,
)
