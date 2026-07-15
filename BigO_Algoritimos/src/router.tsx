import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h3 className="text-2xl font-bold">Início</h3>,
  },
  {
    path: "/dividir-e-conquistar",
    element: (
      <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50">
        <h3>Dividir e Conquistar</h3>
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
]);
