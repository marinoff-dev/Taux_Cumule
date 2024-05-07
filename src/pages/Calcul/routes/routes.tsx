import { RouteObject } from "react-router-dom";


  
import PaysTiers from "../PaysTiers";
import { CedeaoForm, TarifswForm, UemoaForm } from "@/features/tarifs/components";
import Cedeao from "../Cedeao";
import Uemoa from "../Uemoa";


export const paysTiersCalcul: RouteObject = {
    path: "/calcul_taux/pays_tiers",
    element: <PaysTiers />,
    children: [
        {
            path: "",
            element: <TarifswForm />
        },
    ]
}

export const cedeaoCalcul: RouteObject = {
    path: "/calcul_taux/cedeao",
    element: <Cedeao />,
    children: [
        {
            path: "",
            element: <CedeaoForm />
        },
    ]
}

export const uemoaCalcul: RouteObject = {
    path: "/calcul_taux/uemoa",
    element: <Uemoa />,
    children: [
        {
            path: "",
            element: <UemoaForm />
        },
    ]
}