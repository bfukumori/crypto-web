import { createBrowserRouter } from "react-router-dom";

import { ExtractLayout } from "./routes/extract.layout";
import { ExtractPage } from "./routes/extract.page";
import { HomePage } from "./routes/home.page";
import { NotImplementedPage } from "./routes/not-implemented.page";
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
        element: <ExtractLayout />,
        children: [
          {
            path: RoutesEnum.EXTRACT,
            element: <ExtractPage />,
          },
          {
            path: "*",
            element: <NotImplementedPage />,
          },
        ],
      },
    ],
  },
]);
