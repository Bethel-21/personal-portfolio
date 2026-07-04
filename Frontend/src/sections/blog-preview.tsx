import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';
import { blogPosts } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export function BlogPreview() {
  return (
    <Section id="blog">
      <SectionHeading 
        title="Build Log" 
        subtitle="Sharing my thoughts on backend engineering, AI, and the developer journey."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col group border-primary/5 hover:border-primary/20 transition-all">
              <CardHeader className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="px-6 flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-6">
                <Button variant="link" className="p-0 h-auto text-primary gap-2 group/btn" asChild>
                  <a href={post.link}>
                    Read Article <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full">
          View All Articles
        </Button>
      </div>
    </Section>
  );
}
