import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio';
import { Section } from '@/components/section';

export function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center pt-32 md:pt-40">
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Selam, I'm {personalInfo.name.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">_</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8 max-w-3xl leading-relaxed">
            {personalInfo.role} & {personalInfo.tagline}. Building backend systems and AI-powered applications that create opportunities and solve real-world problems.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <Button size="lg" className="rounded-full gap-2" asChild>
            <a href="#projects">
              View Projects <ArrowRight size={18} />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full gap-2" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full gap-2" asChild>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              Download Resume <Download size={18} />
            </a>
          </Button>
        </motion.div>

        {/* Floating gradient effect */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] -z-10 rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/20 blur-[120px] -z-10 rounded-full"></div>
      </div>
    </Section>
  );
}
