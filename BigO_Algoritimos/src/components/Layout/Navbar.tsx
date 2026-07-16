import { Sun, MoonStar, House, LandPlot, Box, TreePine } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import { Button } from "../Shared/Button";

export function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div>
        <h3>BigO e Algoritmos</h3>
      </div>
      <div>
        <Button icon={House} onClick={() => void navigate("/")}>
          {" "}
          <span className="hidden sm:inline">Inicio</span>
        </Button>

        <Button
          icon={LandPlot}
          onClick={() => void navigate("/dividir-e-conquistar")}
        >
          {" "}
          <span className="hidden sm:inline">Dividir-e-conquistar</span>
        </Button>
        <Button
          icon={Box}
          onClick={() => void navigate("/algoritmos-quadraticos")}
        >
          {" "}
          <span className="hidden sm:inline">Algoritmos-quadraticos</span>
        </Button>
        <Button icon={TreePine} onClick={() => void navigate("/arvore")}>
          {" "}
          <span className="hidden sm:inline">Algoritmo de arvore</span>
        </Button>
        <Button icon={theme === "light" ? Sun : MoonStar} onClick={toggleTheme}>
          {" "}
        </Button>
      </div>
    </nav>
  );
}