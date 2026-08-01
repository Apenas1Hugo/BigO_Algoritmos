import { Sun, MoonStar, House, LandPlot, Box, TreePine } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import { Button } from "../shared/Button";
import { motion } from "motion/react";

export function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            delay: 1.5,
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h3 className="text-xl font-bold text-foreground ">
            BigO e Algoritmos
          </h3>
        </motion.div>

        <motion.div
          className="flex items-center gap-3"
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
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
        </motion.div>
      </div>
    </motion.nav>
  );
}
