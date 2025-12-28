import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scatteredAngles = [-3, 2, -1, 3, -2, 1];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-700 mb-12 group ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            Back to Home
          </Link>

          {/* Scattered Title */}
          <div className="relative h-[200px] md:h-[280px]">
            <h1
              className={`absolute left-0 top-0 font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-foreground transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              All
            </h1>
            <span
              className={`absolute left-[20%] md:left-[25%] top-[50%] font-display text-5xl md:text-7xl lg:text-8xl italic text-primary transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 rotate-[-4deg]" : "opacity-0"
              }`}
            >
              Projects
            </span>

            {/* Decorative */}
            <div
              className={`absolute right-[10%] top-[20%] w-16 h-[1px] bg-border transition-all duration-700 delay-400 ${
                isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transformOrigin: "left", transform: `rotate(-20deg)` }}
            />
            <div
              className={`absolute right-[5%] top-[60%] w-2 h-2 rounded-full bg-primary transition-all duration-700 delay-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />
          </div>

          {/* Description - Offset */}
          <p
            className={`max-w-md text-muted-foreground font-body ml-[5%] md:ml-[10%] transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0 rotate-[1deg]" : "opacity-0 translate-y-4"
            }`}
          >
            A comprehensive collection of my work spanning brand identity, digital products,
            web experiences, and creative direction.
          </p>
        </div>

        {/* Background Number */}
        <div
          className={`absolute top-20 right-0 text-[20vw] font-display text-foreground/[0.02] pointer-events-none transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          04
        </div>
      </section>

      {/* Projects Grid - Scattered Layout */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="relative">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const angle = scatteredAngles[index % scatteredAngles.length];
              const delay = 500 + index * 100;
              const offsetX = isEven ? "0%" : "15%";
              const marginTop = index === 0 ? 0 : -20;

              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className={`block mb-16 group transition-all duration-700`}
                  style={{
                    marginLeft: offsetX,
                    marginTop: `${marginTop}px`,
                    transitionDelay: `${delay}ms`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  }}
                >
                  <div
                    className="relative max-w-2xl"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    {/* Number */}
                    <span
                      className="absolute -left-8 md:-left-16 top-4 text-6xl md:text-8xl font-display text-foreground/[0.05]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Card */}
                    <div className="relative bg-background border border-border/50 rounded-2xl p-6 md:p-8 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-500">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Preview */}
                        <div
                          className={`w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500`}
                        >
                          <span className="font-display text-3xl md:text-4xl text-foreground/20">
                            {project.title.charAt(0)}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
                                {project.category}
                              </span>
                              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                                {project.title}
                              </h2>
                            </div>
                            <span className="text-sm text-muted-foreground/60">
                              {project.year}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground font-body line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <span className="text-foreground group-hover:text-primary-foreground group-hover:translate-x-0.5 transition-all">
                          →
                        </span>
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute -right-8 top-1/2 w-6 h-[1px] bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
