import { Mail, FolderGit2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <div>
        <p>© Hugo Rodrigues 2026</p>
        <div>
          <a
            href="https://github.com/Apenas1Hugo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://github.com/Apenas1Hugo/BigO_Algoritmos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FolderGit2></FolderGit2>
          </a>
          <a href="mailto:hugorodriguesm27@gmail.com">
            <Mail></Mail>
          </a>
          <a
            href="https://www.linkedin.com/in/hugo-rodrigues-moura1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </div>
    </footer>
  );
}
