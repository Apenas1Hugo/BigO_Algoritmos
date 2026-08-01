import { Mail, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { References } from "./ReferencesPages";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="border-t border-border bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-5 sm:flex-row">
        <p className="text-sm text-muted-foreground">© Hugo Rodrigues 2026</p>

        <References />
        <div className="flex gap-3 ">
          <motion.a
            href="https://github.com/motion.Apenas1Hugo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.15,
              rotate: -8,
              y: -2,
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="transition-colors hover:text-primary"
          >
            <FaGithub size={25}></FaGithub>
          </motion.a>
          <motion.a
            href="https://github.com/motion.Apenas1Hugo/BigO_Algoritmos"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.15,
              rotate: 8,
              y: -2,
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="transition-colors hover:text-primary"
          >
            <FolderGit2 size={25}></FolderGit2>
          </motion.a>
          <motion.a
            href="mailto:hugorodriguesm27@gmail.com"
            whileHover={{
              scale: 1.15,
              rotate: -8,
              y: -2,
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="transition-colors hover:text-primary"
          >
            <Mail size={25}></Mail>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hugo-rodrigues-moura1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.15,
              rotate: 8,
              y: -2,
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="transition-colors hover:text-primary"
          >
            <FaLinkedin size={25}></FaLinkedin>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
