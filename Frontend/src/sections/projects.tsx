import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';
import { projects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A selection of my recent work in backend architecture and AI integration."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full flex flex-col group border-primary/5 hover:border-primary/20 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader className="p-6 pb-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0 border-primary/20 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4 md:hidden">
                <Button size="sm" variant="outline" className="w-full gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> GitHub
                  </a>
                </Button>
                <Button size="sm" className="w-full gap-2" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Live
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
