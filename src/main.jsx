import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Root from './routes/root.jsx';
import ErrorPage from "./ErrorPage";
import About from './routes/About.jsx';
import './styles.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const Layout = () => {
  return (    
              <div className='wrapper'>
                  <Header />
                  <div className='mainContent'>
                      <Outlet />
                  </div>
                  <Footer />
              </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Use index: true for the root path
        element: <Root />,
      },
      {
        path: "/about",
        element: <About />
    },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
