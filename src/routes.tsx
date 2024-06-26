import {
    createBrowserRouter
  } from "react-router-dom";

import App from "./App";
import { tarifRoutes } from "./pages/Tarif/routes/routes";
import { tarifCalcul } from "./pages/Calcul/routes/routes";
import { dashboard } from "./pages/Dashboard/routes/routes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Custom Error Page !!! </h1>,
	    children: [
		    tarifRoutes,
        tarifCalcul,
        dashboard,
	  ]
    },
  ]);
  