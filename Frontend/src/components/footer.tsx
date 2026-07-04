import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">AR<span className="text-primary">.</span></h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Backend Engineer & AI Enthusiast building the next generation of intelligent systems.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
