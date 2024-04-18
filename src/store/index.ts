import { tarifswApi } from "@/services/index"
import { configureStore } from "@reduxjs/toolkit"
import tarifswSlice from "./slices/tarifsw.slice"

const reducer = {
    [tarifswSlice.name]: tarifswSlice.reducer,
    [tarifswApi.reducerPath]: tarifswApi.reducer,
  };
  
  export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(tarifswApi.middleware),
  });