# BigO e Algoritmos

Aplicação web educacional sobre a notação Big O e algoritmos de ordenação. O projeto reúne explicações conceituais, análises de complexidade, exemplos visuais e áreas interativas para montar listas de números e acompanhar diferentes algoritmos.

## O que o site faz

- Explica como interpretar a notação Big O e como o desempenho dos algoritmos cresce conforme o tamanho da entrada aumenta.
- Compara visualmente as complexidades `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, `O(2ⁿ)` e `O(n!)` em um gráfico interativo.
- Apresenta algoritmos de ordenação por diferentes estratégias e estruturas de dados.
- Mostra as complexidades de melhor caso, caso médio e pior caso quando essas informações são apresentadas na página.
- Permite criar uma lista de números, adicionar e remover elementos, limpar a lista e testar algoritmos de ordenação.
- Exibe uma representação visual em árvore para os dados usados no Heap Sort.
- Oferece alternância entre os temas claro e escuro pela barra de navegação.

## Páginas

| Página                 | Rota                      | Conteúdo                                                                                                                                                                                                           |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Início                 | `/`                       | Introdução à notação Big O, motivos para estudá-la, interpretação das ordens de crescimento, análise de melhor, médio e pior caso e objetivo do projeto. Também contém o gráfico de crescimento das complexidades. |
| Dividir e Conquistar   | `/dividir-e-conquistar`   | Explicação da técnica dividir e conquistar, conteúdos sobre Quick Sort e Merge Sort, exemplos dos dois algoritmos e uma área para testá-los com uma lista personalizada.                                           |
| Algoritmos Quadráticos | `/algoritmos-quadraticos` | Explicação sobre algoritmos `O(n²)`, conteúdos sobre Insertion Sort, Selection Sort e Bubble Sort, exemplos e uma área para testar os três algoritmos.                                                             |
| Árvore                 | `/arvore`                 | Introdução às árvores, explicação sobre árvore binária, Max Heap e Min Heap, conteúdo sobre Heap Sort, exemplo do algoritmo, visualização da estrutura e área de teste.                                            |

### Algoritmos apresentados

- **Quick Sort:** ordenação baseada em pivô e partições.
- **Merge Sort:** divisão do vetor e intercalação das partes ordenadas.
- **Insertion Sort:** inserção de cada elemento na posição correta da parte ordenada.
- **Selection Sort:** seleção e troca do menor elemento da parte não ordenada.
- **Bubble Sort:** comparação e troca de elementos adjacentes.
- **Heap Sort:** ordenação baseada em uma Max Heap.

## Tecnologias utilizadas

- **React 19** e **React DOM:** construção da interface e renderização da aplicação.
- **TypeScript:** tipagem e desenvolvimento do código da aplicação.
- **Vite:** servidor de desenvolvimento e processo de build.
- **React Router DOM:** definição e navegação entre as páginas.
- **Tailwind CSS:** estilização da interface, integrado ao Vite pelo `@tailwindcss/vite`.
- **Recharts:** criação do gráfico de crescimento das complexidades Big O.
- **Motion:** animações de entrada, transições e interações da interface.
- **Lucide React** e **React Icons:** ícones usados na navegação e nos controles.
- **ESLint:** análise estática e padronização do código.

## Como executar

Na pasta do projeto, `BigO_Algoritmos/`, instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Os scripts disponíveis são:

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # executa a verificação do TypeScript e gera o build
npm run lint     # executa o ESLint
npm run preview  # serve o build gerado para visualização local
```

## Estrutura de pastas

```text
BigO_Algoritmos/
├── public/
├── src/
│   ├── assets/
│   ├── components/       # Layout e componentes reutilizáveis
│   ├── context/          # Contexto global do tema
│   ├── hooks/            # Hooks personalizados
│   ├── pages/            # Páginas e conteúdos dos algoritmos
│   ├── styles/           # Estilos e variáveis de tema
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── router.tsx
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```