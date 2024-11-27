import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from '../src/Features/store.js'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-tailwind/react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <ThemeProvider>
     <App />
   </ThemeProvider>
    </Provider>
  </StrictMode>,
)
