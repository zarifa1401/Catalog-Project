import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import ProductsLayout from '../layouts/productsLayout'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'products',
        element: <ProductsLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ':id',
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
])

export default router