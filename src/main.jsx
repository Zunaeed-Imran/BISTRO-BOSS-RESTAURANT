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
import SaladSection from './smallcomponents/SaladSection'
import PizzaSection from './smallcomponents/PizzaSection'
import SoupSection from './smallcomponents/SoupSection'
import DessertSection from './smallcomponents/DessertSection'
import DrinkSection from './smallcomponents/DrinkSection'


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
        element: <OurShop />,
        children: [
          {
            path: 'saladsection',
            element: <SaladSection/>,
          },
          {
            path: 'pizzasection',
            element: <PizzaSection/>,
          },
          {
            path: 'soupsection',
            element: <SoupSection/>,
          },
          {
            path: 'dessertsection',
            element: <DessertSection/>,
          },
          {
            path: 'drinksection',
            element: <DrinkSection/>,
          },
        ],
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
