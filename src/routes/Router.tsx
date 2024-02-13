import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/root-layout'
import { Auth, Home, NotFound, Rated } from '../pages'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'rated',
        element: <Rated />,
      },
    ],
  },
])
