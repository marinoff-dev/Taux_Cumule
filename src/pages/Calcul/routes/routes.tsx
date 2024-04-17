import { RouteObject } from "react-router-dom";


  
import CalculTaux from "../CalculTaux";
import { TarifForm } from "@/features/tarifs/components";


export const tarifCalcul: RouteObject = {
    path: "calcul_taux",
    element: <CalculTaux />,
    children: [
        {
            path: "",
            element: <TarifForm />
        },
    ]
}