import { Tarifsw } from "@/pages/Tarif";
import { TARIFSW_URL } from "@/utils/_constants";
import { getAccessToken } from "@/utils/_helpers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isNaN } from "lodash";


 

type TarifswLibelle = {
  libelle: string;
  nomenclature: number;
  // Autres propriétés...
};

type TarifswTaux = {
  counter:number;
  taux: number;
  nomenclature: number;
  tauxtva: number; 
  tauxda: number;
  tauxaib:number;
  tauxrs:number;
  tauxpc:number;
  tauxps:number;
  tauxpcs:number;
  tauxrau:number;
  tauxect:number;
  tauxdd:number;


  // Autres propriétés...
};

type Tarifswtauxlineaire = {

  nomenclature: number;
  tva: number; 
  da: number;
  aib:number;
  rs:number;
  pc:number;
  ps:number;
  pcs:number;
  rau:number;
  ect:number;
  dd:number;


  // Autres propriétés...
};

export const tarifswApi = createApi({
  reducerPath: "api/",
  baseQuery: fetchBaseQuery({
    baseUrl: TARIFSW_URL,
    prepareHeaders: (headers) => {
      const access_token = getAccessToken()
      if(access_token) {
        headers.set("Authorization", `Bearer ${access_token}`);
      }
      return headers
    }
  }),
  tagTypes: ["tarifsw","tarifswtaux","tarifswtauxlineaire"],

  endpoints: (build) => ({
    getTarifsw: build.query<Tarifsw[], void>({
      query: () => "",
      providesTags: (result, error) => {
        return error ? [] : ["tarifsw"];
      },
      transformResponse: (response: Tarifsw[]) =>
        response.sort((a: Tarifsw, b: Tarifsw) => a.libelle.localeCompare(b.libelle)),
    }),

    getTarifswById: build.query<Tarifsw, string>({
      query: (id: string) => `/${id}`,
      providesTags: (result, error) => {
        return error ? [] : [{ type: "tarifsw", id: result?.id }];
      },
    }),

   

    getTarifswByNomenclature: build.query<TarifswLibelle, number>({
      
      query: (nomenclature: number) =>{
        console.log("la nomenclature est :", nomenclature)
        return `tariflibelle/${nomenclature}`
          
      },
      providesTags: (result, error) => {
      console.log(error)
      console.log("Le libelle recu est :")

      console.log(result)

       

       // console.log(error ? "jai renvoyé une erreur" : [{ type: "tarifsw", nomenclature: result?.nomenclature }])
        return error ? [] : [{ type: "tarifsw", nomenclature: result?.nomenclature }];
      },
    }),

    

    getTauxByNomenclature: build.query<TarifswTaux, number>({
      
      query: (nomenclature: number) =>{
        console.log("la nomenclature est :", nomenclature)
        return `tarif/taux/${nomenclature}`
          
      },
      providesTags: (result, error) => {
      console.log(error)
      console.log("Le result du taux est :")

      console.log(result)

       

       // console.log(error ? "jai renvoyé une erreur" : [{ type: "tarifsw", nomenclature: result?.nomenclature }])
        return error ? [] : [{ type: "tarifswtaux", nomenclature: result?.nomenclature }];
      },
    }),

    getTauxCedeaoByNomenclature: build.query<TarifswTaux, number>({
      
      query: (nomenclature: number) =>{
        console.log("la nomenclature est :", nomenclature)
        return `tarifCedeao/taux/${nomenclature}`
          
      },
      providesTags: (result, error) => {
      console.log(error)
      console.log("Le result du taux est :")

      console.log(result)

       

       // console.log(error ? "jai renvoyé une erreur" : [{ type: "tarifsw", nomenclature: result?.nomenclature }])
        return error ? [] : [{ type: "tarifswtaux", nomenclature: result?.nomenclature }];
      },
    }),


    getTauxUemoaByNomenclature: build.query<TarifswTaux, number>({
      
      query: (nomenclature: number) =>{
        console.log("la nomenclature est :", nomenclature)
        return `tarifUemoa/taux/${nomenclature}`
          
      },
      providesTags: (result, error) => {
      console.log(error)
      console.log("Le result du taux est :")

      console.log(result)

       

       // console.log(error ? "jai renvoyé une erreur" : [{ type: "tarifsw", nomenclature: result?.nomenclature }])
        return error ? [] : [{ type: "tarifswtaux", nomenclature: result?.nomenclature }];
      },
    }),


    getTauxLineaireByNomenclature: build.query<Tarifswtauxlineaire, number>({
      
      query: (nomenclature: number) =>{
        console.log("la nomenclature est :", nomenclature)
        return `tarif/tauxlineaire/${nomenclature}`
          
      },
      providesTags: (result, error) => {
      console.log(error)
      console.log("Le result du taux est :")

      console.log(result)

       

       // console.log(error ? "jai renvoyé une erreur" : [{ type: "tarifsw", nomenclature: result?.nomenclature }])
        return error ? [] : [{ type: "tarifswtauxlineaire", nomenclature: result?.nomenclature }];
      },
    }),


    createTarifsw: build.mutation({
      query: (tarifsw: Tarifsw) => ({
        url: "",
        method: "POST",
        body: tarifsw,
      }),
      invalidatesTags: ["tarifsw"],
      transformResponse: (response: { data: Tarifsw }) => response.data,
    }),

    updateAdherent: build.mutation<Tarifsw, Tarifsw>({
      query: (tarifsw: Tarifsw) => ({
        url: `/${tarifsw.id}`,
        method: "PUT",
        body: tarifsw,
      }),
      invalidatesTags: (result, error) => {
        return error ? [] : [{ type: "tarifsw", id: result?.id }, "tarifsw"];
      },
    }),
  }),
});

export const {
  useGetTarifswQuery,
  useCreateTarifswMutation,
  useGetTarifswByIdQuery,
  useGetTarifswByNomenclatureQuery,
  useGetTauxByNomenclatureQuery,
  useGetTauxLineaireByNomenclatureQuery,
  useGetTauxCedeaoByNomenclatureQuery,
  useGetTauxUemoaByNomenclatureQuery,

} = tarifswApi;
