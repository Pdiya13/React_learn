import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import Features from './components/Temp/Features.jsx'
import Demo from './components/Temp/Demo.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "/about",
//         element : <About />,
//         children : [
//           {
//             path : "features",
//             element : <Features />,
//             children : [
//             {
//               path : "demo",
//               element :  <Demo />
//             }
//         ]
//           }
//         ]
//       },
//       {
//         path : "/contactUs",
//         element : <Contact />,
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} >
            <Route path='features' element={<Features />}>
                <Route path='demo' element={<Demo/>} />
            </Route>
        </Route> 
        <Route path='contactUs' element={<Contact />} />
        <Route path='user/:userId' element={<User />} />
        <Route 
          loader={githubInfoLoader}
          path='github'
          element={<Github />} 
        />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
 