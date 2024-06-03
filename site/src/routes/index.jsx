import AdminLogin from "../pages/Admin/AdminLogin/AdminLogin";
import AdminRoot from "../pages/Admin/AdminRoot";
import About from "../pages/Client/About/About";
import Login from "../pages/Client/ClientLogin/Login";
import ClientRoot from "../pages/Client/ClientRoot";
import Collections from "../pages/Client/Collections/Collections";
import Home from "../pages/Client/Home/Home";

import Register from "../pages/Client/Register/Register";

export const ROUTES = [


    // Admin Root

    {

        path: "admin",
        element: <AdminRoot />,
        children: [

            {
                path: "login",
                element: <AdminLogin />

            }
        ]


    },

    // Client Root
    {
        path: '/',
        element: <ClientRoot/>,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "collections",
                element: <Collections />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            }
        ]

    }
]