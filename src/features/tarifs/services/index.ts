import { TARIFSW_URL } from "@/utils/_constants";
import { getAccessToken } from "@/utils/_helpers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Définir le type de données Tarifsw
interface Tarifsw {
  id: string;
  libelle: string;
  // Ajoutez d'autres propriétés ici si nécessaire
}

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

    createTarifsw: build.mutation<Tarifsw, Tarifsw>({
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
} = tarifswApi;
