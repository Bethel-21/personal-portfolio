import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/section';
import { skillCategories } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';
import { SiOpenai } from 'react-icons/si';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading 
        title="Technical Stack" 
        subtitle="The tools and technologies I use to bring ideas to life."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
          >
            <h3 className="text-lg font-bold mb-6 group-hover:text-primary transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge 
                  key={skill.name}
                  variant="secondary"
                  className="bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors py-1.5 px-3 flex items-center gap-2"
                >
                  {skill.name === 'OpenAI API' && <SiOpenai className="text-[#412991]" />}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
