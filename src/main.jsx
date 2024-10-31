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
import ContactUsPage from './page/ContactUsPage'
import Login from './page/Login'
import SignUp from './page/SignUp'


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
      {
        path: '/contactuspage',
        element: <ContactUsPage/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/signup',
        element: <SignUp/>,
      },
    ],
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
