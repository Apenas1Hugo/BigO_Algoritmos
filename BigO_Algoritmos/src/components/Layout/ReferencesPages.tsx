import { useRef } from "react";

export function References() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleOpen() {
    dialogRef.current?.showModal();
  }

  function handleClose() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="transition-colors hover:text-primary border border-border rounded-2xl p-1.5"
      >
        Referências
      </button>

       <dialog
        ref={dialogRef}
        className=" rounded-2xl border border-border bg-card p-6 text-foreground shadow-xl "
      >
        <h2 className="mb-4 text-xl font-semibold">Referências</h2>

        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          <li>
            Bhargava, Aditya Y.
            <strong>
              {" "}
              Entendendo Algoritmos: Um Guia Ilustrado para Programadores e
              Outros Curiosos.
            </strong>{" "}
            Novatec Editora.
          </li>

          <li>
            Cormen, Thomas H.; Leiserson, Charles E.; Rivest, Ronald L.; Stein,
            Clifford.
            <strong> Introduction to Algorithms.</strong> MIT Press.
          </li>

          <li>
            Documentação e materiais educacionais do MIT OpenCourseWare sobre
            algoritmos e estruturas de dados.
          </li>

          <li>
            O conteúdo desta página foi escrito de forma autoral com base nas
            referências acima, não reproduzindo trechos literais das obras
            citadas.
          </li>
        </ul>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="rounded-2xl border border-border px-4 py-2 transition-colors hover:text-primary"
          >
            Fechar
          </button>
        </div>
      </dialog>

    </>
  );
}
