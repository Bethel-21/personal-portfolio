import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { personalInfo } from '@/data/portfolio';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    // TODO: Connect to Django backend API
    // Example: await fetch('https://your-api.com/v1/contact/', { method: 'POST', ... })
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent! I'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" className="bg-muted/30">
      <SectionHeading 
        title="Get in Touch" 
        subtitle="Have a question or a project? Open a conversation, no pull request required. Also the contact form has never judged anyone. (Yet.)"
      />

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out via the form or through my professional channels.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email</p>
                <p className="font-medium">{personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Location</p>
                <p className="font-medium">Addis Ababa, Ethiopia (Remote Friendly)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Phone</p>
                <p className="font-medium">+251 942368368</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-background border border-border shadow-sm space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="John Doe" required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="Project Inquiry" required className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                placeholder="How can I help you?" 
                required 
                className="min-h-[150px] rounded-xl resize-none" 
              />
            </div>
            <Button type="submit" className="w-full rounded-xl gap-2 py-6 text-lg" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
