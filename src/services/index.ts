import { Tarifsw } from "@/pages/Tarif";
import { TARIFSW_URL } from "@/utils/_constants";
import { getAccessToken } from "@/utils/_helpers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tarifswApi = createApi({
  reducerPath: "api/tarifs",
  baseQuery: fetchBaseQuery({
    baseUrl: TARIFSW_URL,
    prepareHeaders: (headers) => {
      const access_token = getAccessToken();
      if (access_token) {
        headers.set("Authorization", `Bearer ${access_token}`);
      }
      return headers;
    }
  }),
  tagTypes: ["tarifsw"],
  endpoints: (build) => ({
    getTarifswByNomenclature: build.query<Tarifsw[], number>({
      query: (nomenclature: number) => `tarifsw/${nomenclature}`,
      providesTags: ["tarifsw"],
    }),

    getTarifsw: build.query<Tarifsw[], void>({
      query: () => "",
      providesTags: ["tarifsw"], // Changé de "tarif" à "tarifsw"
      transformResponse: (response: Tarifsw[]) =>
          response.sort((a: Tarifsw, b: Tarifsw) => a.libelle.localeCompare(b.libelle)),
    }),

    createTarifsw: build.mutation<Tarifsw, Partial<Tarifsw>>({
      query: (tarifsw) => ({
        url: `tarifsw`,
        method: "POST",
        body: tarifsw,
      }),
      invalidatesTags: ["tarifsw"],
    }),
    
    updateAdherent: build.mutation<Tarifsw, Partial<Tarifsw>>({
      query: (tarifsw) => ({
        url: `tarifsw/${tarifsw.id}`,
        method: "PUT",
        body: tarifsw,
      }),
      invalidatesTags: ["tarifsw"],
    }),
  }),
});

export const {
  useGetTarifswQuery,
  useGetTarifswByNomenclatureQuery,
  useCreateTarifswMutation,
  useUpdateAdherentMutation,
} = tarifswApi;
