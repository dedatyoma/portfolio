import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ShopContextProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </ShopContextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
