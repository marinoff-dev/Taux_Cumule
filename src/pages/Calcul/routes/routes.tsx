import { RouteObject } from "react-router-dom";


  
import CalculTaux from "../CalculTaux";
import { TarifswForm } from "@/features/tarifs/components";


export const tarifCalcul: RouteObject = {
    path: "calcul_taux",
    element: <CalculTaux />,
    children: [
        {
            path: "",
            element: <TarifswForm />
        }
    ]
}