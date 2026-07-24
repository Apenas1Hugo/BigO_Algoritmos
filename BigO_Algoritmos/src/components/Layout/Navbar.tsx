import { Sun, MoonStar, House, LandPlot, Box, TreePine } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import { Button } from "../shared/Button";

export function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <div>
          <h3 className="text-xl font-bold text-foreground animate-bounce">
            BigO e Algoritmos
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <Button icon={House} onClick={() => void navigate("/")}>
            <span className="hidden lg:inline ">Início</span>
          </Button>

          <Button
            icon={LandPlot}
            onClick={() => void navigate("/dividir-e-conquistar")}
          >
            <span className="hidden lg:inline">Dividir e Conquistar</span>
          </Button>

          <Button
            icon={Box}
            onClick={() => void navigate("/algoritmos-quadraticos")}
          >
            <span className="hidden lg:inline">Algoritmos Quadráticos</span>
          </Button>

          <Button icon={TreePine} onClick={() => void navigate("/arvore")}>
            <span className="hidden lg:inline">Árvore</span>
          </Button>

          <Button
            icon={theme === "light" ? Sun : MoonStar}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </nav>
  );
}
