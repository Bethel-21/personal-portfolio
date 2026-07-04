import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/section';
import { personalInfo } from '@/data/portfolio';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <SectionHeading 
        title="About Me" 
        subtitle="Bridging the gap between complex logic and human-centric solutions."
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            {personalInfo.bio}
          </p>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/10">
            <h3 className="text-xl font-bold mb-4">Goal</h3>
            <p className="text-xl italic text-foreground/80 leading-relaxed mb-8">
              "{personalInfo.mission}"
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <h4 className="font-semibold mb-1">Fav quote</h4>
                <p className="text-sm text-muted-foreground">
                  "Do Hard Things."
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
