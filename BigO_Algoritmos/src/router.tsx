import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./components/Layout/RootLayout";

import { HomePage } from "./pages/home/HomePage";
import { DivideConquerPage } from "./pages/dividir_e_conquistar/DivideConquerPage";

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
        element: <></>,
      },
      {
        path: "/arvore",
        element: <></>,
      },
    ],
  },
]);
