import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Navbar from './Components/Navbar.jsx'
import Contact from './Components/Contact.jsx'
import Github from './Components/Github.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       }
//     ]
//   }
// ])

// second method for route in reacts 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="githubfoll" element={<Github />} />
    <Route path="Login" element={<Login />} />
    <Route 
    // loader={githubLoader}
    path="Register" 
    element={<Register />} 
    />
    </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* for my reminder this we can working a project which basically focus on react router dom ,so we cannot used App.jsx in this part we can used ((Reactprovider)) and (BrowserRouter) in this part */}
    <RouterProvider router={router} />



  </StrictMode>,
)
