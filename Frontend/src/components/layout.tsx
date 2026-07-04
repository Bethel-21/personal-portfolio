import { Header } from './header';
import { Footer } from './footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
