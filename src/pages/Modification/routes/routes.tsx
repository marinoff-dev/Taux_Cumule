import { RouteObject } from "react-router-dom";
import { Modification } from "..";
// import { ModifTarif } from "@/features/tarifs/components";


export const modifRoutes: RouteObject = {
    path: "tarifs",
    element: <Modification />,
    children: [
        {/** 
        {
            path: "modifier/:id",
            element: <ModifTarif />
        },
        */}
    ]
}