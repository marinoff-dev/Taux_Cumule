import { RouteObject } from "react-router-dom";
import { Historique } from "..";


export const historiqueRoutes: RouteObject = {
    path: "/historiques_calcul",
    children: [
        {
            path: "",
            element: <Historique />
        },      
        {/*{
            path: "",
            element: <ModifTarif />
        },
    */}
    ]
}