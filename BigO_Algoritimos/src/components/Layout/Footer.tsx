import { Mail, FolderGit2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-5 sm:flex-row">
        <p className="text-sm text-muted-foreground">© Hugo Rodrigues 2026</p>

        <div className="flex gap-3 ">
          <a
            href="https://github.com/Apenas1Hugo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <FaGithub size={25}></FaGithub>
          </a>
          <a
            href="https://github.com/Apenas1Hugo/BigO_Algoritmos"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <FolderGit2 size={25}></FolderGit2>
          </a>
          <a
            href="mailto:hugorodriguesm27@gmail.com"
            className="transition-colors hover:text-primary"
          >
            <Mail size={25}></Mail>
          </a>
          <a
            href="https://www.linkedin.com/in/hugo-rodrigues-moura1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <FaLinkedin size={25}></FaLinkedin>
          </a>
        </div>
      </div>
    </footer>
  );
}
