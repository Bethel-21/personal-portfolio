import { Layout } from './components/layout';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Skills } from './sections/skills';
import { Projects } from './sections/projects';
import { Experience } from './sections/experience';
import { Certifications } from './sections/certifications';
import { BlogPreview } from './sections/blog-preview';
import { Contact } from './sections/contact';
import { ThemeProvider } from './hooks/use-theme';
import { Toaster } from './components/ui/sonner';

import { Routes, Route } from "react-router-dom";
import { BlogDetail } from "@/sections/blog-detail";

function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <BlogPreview />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Toaster />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;