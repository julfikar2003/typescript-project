import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";
import Portfoilo from "../pages/Portfoilo";
import About from "../pages/About";
import Mainlayout from "../layout/Mainlayout";
import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";
import Details from "../pages/Details";
import Login from "../pages/Login";
import DetailsB from "../pages/DetailsB";
import DetailsC from "../pages/DetailsC";
import DetailsD from "../pages/DetailsD";
import Contact from "../pages/Contact";
import Jobs from "../pages/Jobs";
import PressKit from "../pages/PressKit";
import Register from "../pages/Register";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/portfolio",
                element: <Portfoilo />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
          
        ]
        
    },
    {
        path: "/product",
        element: <Product />
    },
    {
        path: "/details",
        element: <Details />
    },
    {
        path: "/details1",
        element: <DetailsB />
    },
    {
        path: "/details2",
        element: <DetailsC />
    },
    {
        path: "/details3",
        element: <DetailsD />
    },
    {
        path: "/aboutus",
        element: <AboutUs />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/jobs",
        element: <Jobs />
    },
    
    {
        path: "/presskit",
        element: <PressKit />
    },
    
])
