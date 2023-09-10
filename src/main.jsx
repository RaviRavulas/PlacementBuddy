import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Previous from './pages/Previous'
import Present from './pages/Present'
import Details from './pages/Details'
import About from './pages/About'
import ContactForm from './pages/ContactForm'
import Admin from './pages/Admin'
import Register from './pages/Register'
import AddCompanies from './pages/AddCompanies'
import UpdateCompany from './pages/UpdateCompany'
import AdminPage from './pages/AdminPage'
import Delete from './pages/Delete'
const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/previous",element:<Previous/>},
  {path: "/present",element:<Present/>},
  {path: "/details/:id",element:<Details/>},
  {path: "/about",element:<About/>},
  {path: "/contact",element:<ContactForm/>},
  {path: "/admin",element:<Admin/>},
  {path: "/register",element:<Register/>},
  {path: "/addcompany",element:<AddCompanies/>},
  {path: "/update/:id",element:<UpdateCompany/>},
  {path: "/delete/:id",element:<Delete />},
  {path: "/adminpage",element:<AdminPage/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
