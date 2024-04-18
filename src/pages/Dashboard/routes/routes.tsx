import { RouteObject } from "react-router-dom"
import {Home} from "@/features/tarifs/components/";
import Dashboard from "../Dashboard";
 

export const dashboard: RouteObject = {
    path: "home",
    element: <Dashboard />,
    children: [
        {
            path: "",
            element: <Home />
        },
    ]
}

