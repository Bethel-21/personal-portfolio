import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6", className)}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>}
    </div>
  );
}
