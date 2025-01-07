import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';
import store from '../src/Features/store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';  
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
