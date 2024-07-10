import { RouteObject } from "react-router-dom";
import { HistoriqueForm } from "@/features/tarifs/components/";
import Historique from "../Historique";


export const historique: RouteObject = {
    path: "historique",
    element: <Historique />,
    children: [
        {
            path: "",
            element: <HistoriqueForm />
        },      
        {/*{
            path: "",
            element: <ModifTarif />
        },
    */}
    ]
}