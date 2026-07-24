import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./components/Layout/RootLayout";

import { HomePage } from "./pages/home/HomePage";
import { DivideConquerPage } from "./pages/dividir_e_conquistar/DivideConquerPage";
import { QuadraticAlgorithmsPage } from "./pages/algoritmos_quadraticos/QuadraticAlgorithmPage";
import { TreePage } from "./pages/arvore/TreePage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dividir-e-conquistar",
        element: <DivideConquerPage />,
      },
      {
        path: "/algoritmos-quadraticos",
        element: <QuadraticAlgorithmsPage />,
      },
      {
        path: "/arvore",
        element: <TreePage />,
      },
    ],
  },
]);
