import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'

// pages
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
// import Error from './pages/Error'
// components
import Body from './components/Body'

const router = createBrowserRouter([
   {
     path: '/',
     element: <App />,
     errorElement: <Error />,
     children: [
       {
        path: '/',
         element: <Body />,
       },
       {
        path: 'about',
        element: <About />,
       },
       {
         path: 'contact',
         element: <Contact />,
       },{
        path: 'projects',
        element: <Projects />
       }
     ],
   },
 ]);

 ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
