import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </main>
  );
}
