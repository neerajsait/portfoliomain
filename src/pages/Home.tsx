import { useEffect } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Hero, About, Projects, Skills, Certifications, Contact } from "@/components/sections";


export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
