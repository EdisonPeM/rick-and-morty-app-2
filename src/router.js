import { createBrowserRouter } from "react-router-dom";

import App from "./App";
// import { lazy } from "react";
import { Loader } from "components/Loaders";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/Character";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/Location";
import NotFound from "components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: Loader,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "characters",
        element: <Characters />
      },
      {
        path: "characters/:slug",
        element: <CharacterDetails />
      },
      {
        path: "locations",
        element: <Locations />
      },
      {
        path: "locations/:slug",
        element: <LocationDetails />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;
