import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
], {
  // Remove warnings
  future: {
    v7_fetcherPersist: true,
    v7_skipActionErrorRevalidation: true,
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
  }
})

const App: React.FC = () => {
  return <RouterProvider router={router} future={{v7_startTransition: true }}/>
}

export default App
