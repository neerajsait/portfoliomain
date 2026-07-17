import { useEffect } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Hero, About, GitHubStats, Projects, Skills, Certifications, Contact } from "@/components/sections";
import { ScrollProgress } from "@/components/effects";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <GitHubStats />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
