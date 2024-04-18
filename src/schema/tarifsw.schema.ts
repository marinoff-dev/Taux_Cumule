import { z } from "zod";

export const tarifswSchema = z.object({
    nomenclature: z.number({ required_error: "Veuillez entrer la nomenclature" }).min(10, "Veuillez renseigner 10 caractères"),
    libelle: z.string({ required_error: "Veuillez entrer le libellé" }),
    pc: z.number({required_error: "Veuillez entrer le taux",}),
    ps: z.number({required_error: "Veuillez entrer le taux",}),
    pcs: z.number({required_error: "Veuillez entrer le taux",}),
    rs: z.number({required_error: "Veuillez entrer le taux",}),
    rau: z.number({required_error: "Veuillez entrer le taux",}),
    tst: z.number({required_error: "Veuillez entrer le taux",}),
    dd_sw: z.number({required_error: "Veuillez entrer le taux",}),
    tva: z.number({required_error: "Veuillez entrer le taux",}),
    ddsh2022: z.number({required_error: "Veuillez entrer le taux",}),
    codeUnite: z.number({required_error: "Veuillez entrer le taux",}),
    ect: z.number({required_error: "Veuillez entrer le taux",}),
    da: z.number({required_error: "Veuillez entrer le taux",}),
    caf: z.number({required_error: "Veuillez entrer le taux",}),
    ttv: z.number({required_error: "Veuillez entrer le taux",}),
    tfs: z.number({required_error: "Veuillez entrer le taux",}),
    tsr: z.number({required_error: "Veuillez entrer le taux",}),
    
});