import {
    createBrowserRouter
  } from "react-router-dom";

import App from "./App";
import { tarifRoutes } from "./pages/routes/routes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Custom Error Page !!! </h1>,
	    children: [
		    tarifRoutes,
	  ]
    },
  ]);
  