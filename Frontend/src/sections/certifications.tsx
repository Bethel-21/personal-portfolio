import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';
import { certifications } from '@/data/portfolio';
import { Card } from '@/components/ui/card';

export function Certifications() {
  return (
    <Section id="certifications" className="bg-muted/30">
      <SectionHeading 
        title="Certifications" 
        subtitle="Continuous learning and professional recognition."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full flex flex-col justify-between border-primary/5 hover:border-primary/20 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                {cert.link && (
                  <a href={cert.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary/80 font-medium text-sm mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs">{cert.date}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
