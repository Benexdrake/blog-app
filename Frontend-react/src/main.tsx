import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Blog from './pages/blog/blog.tsx'
import { Navbar } from './components/navbar/navbar.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import New from './pages/blog/new/index.tsx'


const router = createBrowserRouter(
  [
    { path:'/', element:<Blog/>},
    { path:'/new', element:<New/>}
  ]
)

createRoot(document.getElementById('root')!).render(
    <Fragment>
      <StrictMode>
        <Navbar/>
        <RouterProvider router={router}/>
      </StrictMode>
    </Fragment>
)
