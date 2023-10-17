
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/error";
import Events from "../components/events/Events";
import Contact from "../pages/contact/Contact";
import AboutUs from "../pages/aboutUs/AboutUs";
import OurWorks from "../pages/ourWorks/OurWorks";
import SignIn from "../pages/signin/SignIn";
import Register from "../pages/register/Register";
import EventDetails from "../pages/eventDetails/EventDetails";
import PrivetRoutes from "./PrivetRoutes";
import Blogs from "../pages/blogs/Blogs";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import WorkDetails from "../pages/works/workDetails/WorkDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/events',
          element: <Events></Events>,
        },
        {
          path: '/event/:id',
          element: <PrivetRoutes><EventDetails></EventDetails></PrivetRoutes>,
          loader: () => fetch('/eventList.json'),
        },
        {
          path: '/works',
          element: <OurWorks></OurWorks>,
        },
        {
          path: '/work/:id',
          element: <PrivetRoutes><WorkDetails></WorkDetails></PrivetRoutes>,
          loader: () => fetch('/blogs.json'),
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
        },
        {
          path: '/blog/:id',
          element: <PrivetRoutes><BlogDetails></BlogDetails></PrivetRoutes>,
          loader: () => fetch('/blogs.json'),
        },
        {
          path: '/aboutUs',
          element: <AboutUs></AboutUs>,
        },
        {
          path: '/contactUs',
          element: <Contact></Contact>,
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;