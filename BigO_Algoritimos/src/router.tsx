import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./components/Layout/RootLayout";


export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50">
            <h3>Inicio</h3>
          </div>
        ),
      },
      {
        path: "/dividir-e-conquistar",
        element: (
          <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50">
            <h3>Dividir e conquistar</h3>
          </div>
        ),
      },
      {
        path: "/algoritmos-quadraticos",
        element: (
          <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50">
            <h3>Algoritmos Quadráticos</h3>
          </div>
        ),
      },
      {
        path: "/arvore",
        element: (
          <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50">
            <h3>Árvore</h3>
          </div>
        ),
      },
    ],
  },
]);