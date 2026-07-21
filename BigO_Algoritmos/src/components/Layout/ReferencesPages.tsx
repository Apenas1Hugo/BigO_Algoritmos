import { useState } from "react";

export function References() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="transition-colors hover:text-primary border border-border rounded-2xl p-1.5"
      >
        Referências
      </button>

      {isOpen && (
        <div>
          <div>
            <button
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:text-primary  border border-border rounded-2xl p-1.5"
            >
              Fechar
            </button>

            <p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  Bhargava, Aditya Y.
                  <strong>
                    {" "}
                    Entendendo Algoritmos: Um Guia Ilustrado para Programadores
                    e Outros Curiosos.
                  </strong>
                  Novatec Editora.
                </li>

                <li>
                  Cormen, Thomas H.; Leiserson, Charles E.; Rivest, Ronald L.;
                  Stein, Clifford.
                  <strong> Introduction to Algorithms.</strong>
                  MIT Press.
                </li>

                <li>
                  Documentação e materiais educacionais do MIT OpenCourseWare
                  sobre algoritmos e estruturas de dados.
                </li>

                <li>
                  O conteúdo desta página foi escrito de forma autoral com base
                  nas referências acima, não reproduzindo trechos literais das
                  obras citadas.
                </li>
              </ul>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
