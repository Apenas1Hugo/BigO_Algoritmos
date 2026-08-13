import { motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BigOPoint {
  n: number;
  constante: number;
  logaritmica: number;
  linear: number;
  linearitmica: number | null;
  quadratica: number | null;
  exponencial: number | null;
  fatorial: number | null;
}

interface ComplexitySeries {
  key: keyof Omit<BigOPoint, "n">;
  label: string;
  color: string;
  description: string;
}

const MAX_N = 12;
const MAX_Y = 80;

const seriesConfig: ComplexitySeries[] = [
  {
    key: "constante",
    label: "O(1)",
    color: "#10b981",
    description: "Constante",
  },
  {
    key: "logaritmica",
    label: "O(log n)",
    color: "#3b82f6",
    description: "Logarítmica",
  },
  { key: "linear", label: "O(n)", color: "#6366f1", description: "Linear" },
  {
    key: "linearitmica",
    label: "O(n log n)",
    color: "#8b5cf6",
    description: "Linearítmica",
  },
  {
    key: "quadratica",
    label: "O(n²)",
    color: "#ec4899",
    description: "Quadrática",
  },
  {
    key: "exponencial",
    label: "O(2ⁿ)",
    color: "#f59e0b",
    description: "Exponencial",
  },
  {
    key: "fatorial",
    label: "O(n!)",
    color: "#ef4444",
    description: "Fatorial",
  },
];

function continuousFactorial(n: number): number {
  if (n <= 0) return 1;
  return Math.sqrt(2 * Math.PI * n) * (n / Math.E) ** n;
}

function generateBigOData(): BigOPoint[] {
  const data: BigOPoint[] = [];

  for (let n = 1; n <= MAX_N; n += 1) {
    const logaritmica = Math.log2(n);
    const linear = n;
    const linearitmica = n * Math.log2(n);
    const quadratica = n ** 2;
    const exponencial = 2 ** n;
    const fatorial = continuousFactorial(n);

    data.push({
      n,
      constante: 1,
      logaritmica,
      linear,
      linearitmica: linearitmica > MAX_Y ? null : linearitmica,
      quadratica: quadratica > MAX_Y ? null : quadratica,
      exponencial: exponencial > MAX_Y ? null : exponencial,
      fatorial: fatorial > MAX_Y ? null : fatorial,
    });
  }

  return data;
}

interface TooltipPayloadItem {
  dataKey: string;
  value: number;
  name: string;
  color: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: number;
}) {
  if (!active || !payload || payload.length === 0) return null;

  const ordenado = [...payload].sort((a, b) => b.value - a.value);

  return (
    <div className="rounded-xl border border-border bg-card p-3 shadow-lg">
      <p className="mb-2 text-xs font-medium text-muted-foreground">
        n = {label}
      </p>
      <div className="flex flex-col gap-1">
        {ordenado.map((item) => (
          <div
            key={item.dataKey}
            className="flex items-center justify-between gap-4 text-xs"
          >
            <span className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-foreground">{item.name}</span>
            </span>
            <span className="font-mono text-muted-foreground">
              {item.value.toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BigOGrowthChart() {
  const data = useMemo(() => generateBigOData(), []);
  const [ocultas, setOcultas] = useState<Set<string>>(new Set());

  function alternarSerie(key: string) {
    setOcultas((previous) => {
      const nova = new Set(previous);
      if (nova.has(key)) {
        nova.delete(key);
      } else {
        nova.add(key);
      }
      return nova;
    });
  }

  const seriesForaDaEscala = seriesConfig.filter((series) => {
    const ultimoPonto = data[data.length - 1];
    return ultimoPonto[series.key] === null && !ocultas.has(series.key);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Crescimento das complexidades Big O
          </h2>
          <p className="text-sm text-muted-foreground">
            Comparação visual do crescimento de cada categoria conforme n
            aumenta. Clique na legenda para esconder/mostrar curvas.
          </p>
        </div>
      </div>

      <div className="h-[360px] w-full sm:h-[420px] lg:h-[480px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 12, right: 16, left: 8, bottom: 24 }}
          >
            <CartesianGrid
              stroke="currentColor"
              className="text-border"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="n"
              type="number"
              domain={[1, MAX_N]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              stroke="currentColor"
              className="text-muted-foreground text-xs"
              tickLine={false}
              axisLine={false}
              label={{
                value: "Tamanho da entrada (n)",
                position: "insideBottom",
                offset: -10,
                className: "fill-muted-foreground text-xs",
              }}
            />
            <YAxis
              domain={[0, MAX_Y]}
              stroke="currentColor"
              className="text-muted-foreground text-xs"
              tickLine={false}
              axisLine={false}
              label={{
                value: "Operações",
                angle: -90,
                position: "insideLeft",
                className: "fill-muted-foreground text-xs ",
              }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "currentColor", strokeOpacity: 0.15 }}
            />
            <Legend
              onClick={(entry) => alternarSerie(entry.dataKey as string)}
              wrapperStyle={{ cursor: "pointer", fontSize: 13, 
                 position: "relative", marginTop: 30}}
              formatter={(value, entry) => {
                const key = (entry as { dataKey?: string }).dataKey ?? "";
                const estaOculta = ocultas.has(key);
                return (
                  <span
                    className={
                      estaOculta
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }
                  >
                    {value}
                  </span>
                );
              }}
            />

            {seriesConfig.map((series) => (
              <Line
                key={series.key}
                type="monotone"
                dataKey={series.key}
                name={series.label}
                stroke={series.color}
                strokeWidth={2.5}
                strokeOpacity={ocultas.has(series.key) ? 0 : 1}
                dot={false}
                activeDot={{ r: 5 }}
                connectNulls={false}
                isAnimationActive
                animationDuration={900}
                hide={ocultas.has(series.key)}
                
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {seriesForaDaEscala.length > 0 && (
        <p className="mt-3 text-xs text-muted-foreground">
          Saíram da escala visível (acima de {MAX_Y} operações):{" "}
          {seriesForaDaEscala.map((s) => s.label).join(", ")}
        </p>
      )}
    </motion.div>
  );
}
