import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import LandingPage from './pages/LandingPage';
import Enterprise from './pages/Enterprise';
import Events from './pages/Events';
import Education from './pages/Education';
import About from './pages/About';
import Job from './pages/Job';
import Hiring from './pages/Hiring';

function App() {

  const router = createBrowserRouter([{
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <LandingPage/>
      },{
        path: "/enterprise",
        element: <Enterprise/>
      },{
        path: "/events",
        element: <Events/>
      },{
        path: "/education",
        element: <Education/>
      },{
        path: "/about",
        element: <About/>
      },{
        path: "/hiring",
        element: <Hiring/>
      }
    ]
  }])

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
