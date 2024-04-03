import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

import Search from "../Pages/Search";
import AddEditUser from "../Pages/AddEditUser";
import Homee from "../Pages/Homee";
import AboutPage from "../Pages/AboutPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/",element: <Home/>},
        {path: "/search",element: <Search/>},
        {path: "/about",element: <AboutPage/>},
        {path: "/add",element: <AddEditUser/>},
        {path: "/home",element: <Homee/>},
        {path:"/edit/:id", element:<AddEditUser/>}

      ],
    },
  ]);

  export default router;