import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import PlaceCardDetails from './components/Places/PlaceCardDetails.jsx';
import AllPlaces from './components/Places/AllPlaces.jsx';
import Dhaka from './components/Division/Dhaka.jsx';
import Rangpur from './components/Division/Rangpur.jsx';
import Khulna from './components/Division/Khulna.jsx';
import Chittagong from './components/Division/Chittagong.jsx';
import Rajshahi from './components/Division/Rajshahi.jsx';
import Sylhet from './components/Division/Sylhet.jsx';
import Mymensingh from './components/Division/Mymensingh.jsx';
import Barishal from './components/Division/Barishal.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import ABout from './components/ABout/ABout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/place/:id',  // Corrected path
        element: <PlaceCardDetails />,
      },
      {
        path: '/all',
        element: <AllPlaces />
      },
      {
        path:'/dhaka',
        element: <Dhaka/>
      },
      {
        path:'/rangpur',
        element: <Rangpur/>
      },
      {
        path:'/khulna',
        element: <Khulna/>,
      },
      {
        path: '/chittagong',
        element: <Chittagong/>
      },
      {
      path: 'rajshahi',
      element: <Rajshahi/>
      },
      {
      path: 'sylhet',
      element: <Sylhet/>
      },
      {
      path: 'mymensingh',
      element: <Mymensingh/>
      },
      {
      path: 'barishal',
      element: <Barishal/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      },
      {
        path: '/about',
        element: <ABout/>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto '>
      <RouterProvider router={router} />

    </div>
  </StrictMode>,
)
