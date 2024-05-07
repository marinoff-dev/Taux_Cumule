import {
    createBrowserRouter
  } from "react-router-dom";

import App from "./App";
import { tarifRoutes } from "./pages/Tarif/routes/routes";
import { cedeaoCalcul, paysTiersCalcul, uemoaCalcul } from "./pages/Calcul/routes/routes";
import { dashboard } from "./pages/Dashboard/routes/routes";
import { modifRoutes } from "./pages/Modification/routes/routes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Custom Error Page !!! </h1>,
	    children: [
		    tarifRoutes,
        paysTiersCalcul,
        cedeaoCalcul,
        uemoaCalcul,
        dashboard,
        modifRoutes,
	  ]
    },
  ]);
  