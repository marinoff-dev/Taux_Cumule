import { TARIFSW_URL } from "@/utils/_constants";
import { getAccessToken } from "@/utils/_helpers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isNaN } from "lodash";

export const tarifswApi = createApi({
  reducerPath: "api/tarifs",
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
  tagTypes: ["tarifsw"],

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

    getTarifswByNomenclature: build.query<Tarifsw, number>({
      query: (nomenclature: number) => `tariflibelle/${nomenclature}`, // Utiliser le chemin d'URL correct
      providesTags: (result, error) => {
        return error ? [] : [{ type: "tarifsw", nomenclature: result?.nomenclature }];
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
} = tarifswApi;