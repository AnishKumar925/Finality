import { ROUTH_PATH } from "./RouthPath";
import Home from "../pages/Home";
import About from "../pages/About";
import KeyPeople from "../pages/Keypeople";
import ServicesSection from "../pages/Service";
import Contact from "../pages/Contact";
import Layout from "../pages/layout";
import { BasicModal as Model } from "../pages/model";

export const routes = [
  {
    path: ROUTH_PATH.LAYOUT, 
    element: <Layout/>,
    children: [
      {
        path : ROUTH_PATH.HOME,       // This means Home will show at "/"
        element: <Home />,
      },
      {
        path : ROUTH_PATH.ABOUT,
        element: <About/>,
      },
      {
        path : ROUTH_PATH.KEY_PEOPLE,
        element: <KeyPeople/>,
      },
      {
        path : ROUTH_PATH.SERVICES,
        element: <ServicesSection/>,
      },
      {
        path : ROUTH_PATH.CONTACT,
        element: <Contact/>,
      },
      {
        path : ROUTH_PATH.NO_MATCH,
        element : <div>NO page found</div>
      }
    ]
  },
]







                // path: ROUTH_PATH.LAYOUT, // "/layout"
        // element: <Layout />,
        // children: [
        //   {
        //     path: ROUTH_PATH.HOME, // "/layout/home"
        //     element: <Home />,
        //   },
        //   {
        //     path: ROUTH_PATH.ABOUT,
        //     element: <About />,
        //   },
        //   {
        //     path: ROUTH_PATH.SERVICES,
        //     element: <ServicesSection />,
        //   },
        //   {
        //     path: ROUTH_PATH.KEY_PEOPLE,
        //     element: <KeyPeople />,
        //   },
        //   {
        //     path: ROUTH_PATH.CONTACT,
        //     element: <Contact />,
        //   },
        // ],
     