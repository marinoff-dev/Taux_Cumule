import { RouteObject } from "react-router-dom";
import { Tarifsw } from "..";
import { TarifswList } from "@/features/tarifs/components/";


export const tarifRoutes: RouteObject = {
    path: "tarifs",
    element: <Tarifsw />,
    children: [
        {
            path: "",
            element: <TarifswList />
        },      
        {/*{
            path: "",
            element: <ModifTarif />
        },
    */}
    ]
}