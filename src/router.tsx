import { createBrowserRouter } from "react-router-dom";

import { ExtractPage } from "./routes/extract.page";
import { HomePage } from "./routes/home.page";
import { PatrimonyPage } from "./routes/patrimony.page";
import { ProductsPage } from "./routes/products.page";
import { Root } from "./routes/root";
import { RoutesEnum } from "./routes/routesEnum";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: RoutesEnum.HOME,
        element: <HomePage />,
      },
      {
        path: RoutesEnum.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: RoutesEnum.PATRIMONY,
        element: <PatrimonyPage />,
      },
      {
        path: RoutesEnum.EXTRACT,
        element: <ExtractPage />,
      },
    ],
  },
]);
