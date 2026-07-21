import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./components/Layout/RootLayout";

import { HomePage } from "./pages/home/HomePage";

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
        element: <></>,
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
