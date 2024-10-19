import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainOutlet from './routes/MainOutlet';
import ErrorPage from './page/ErrorPage';
import Navbar from './layout/Navbar'
import OurMenu from './page/OurMenu'
import OurShop from './page/OurShop'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainOutlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/navbar',
        element: <Navbar />,
      },
      {
        path: '/ourmenu',
        element: <OurMenu />,
      },
      {
        path: '/ourshop',
        element: <OurShop/>,
      },
    ],
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
