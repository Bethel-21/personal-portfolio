import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';
import { experiences } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading 
        title="Professional Journey" 
        subtitle="A timeline of my professional experience and community contributions."
      />

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className={cn(
                "w-3 h-3 rounded-full",
                exp.type === 'work' ? "bg-primary" : exp.type === 'volunteer' ? "bg-purple-500" : "bg-blue-400"
              )} />
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/20 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="font-bold text-lg text-foreground">{exp.role}</div>
                <div className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                  <Calendar size={12} />
                  {exp.period}
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Briefcase size={16} />
                {exp.company}
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
