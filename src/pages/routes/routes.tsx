import { RouteObject } from "react-router-dom";
import { Tarif } from "../Tarif";
import { TarifsList } from "@/features/tarifs/components";


export const tarifRoutes: RouteObject = {
    path: "tarifs",
    element: <Tarif />,
    children: [
        {
            path: "",
            element: <TarifsList />
        },
    ]
}