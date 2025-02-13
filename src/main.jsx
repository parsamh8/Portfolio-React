import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import App from './App';

// pages
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// components
import Body from './components/Body';

// Define a simple Error component
const Error = () => <div>Oops, something went wrong!</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Body /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
