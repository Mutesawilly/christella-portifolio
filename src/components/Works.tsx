import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scatteredPositions = [
    { top: "5%", left: "5%", rotate: -3 },
    { top: "8%", right: "10%", rotate: 2 },
    { top: "45%", left: "8%", rotate: -2 },
    { top: "48%", right: "5%", rotate: 4 },
  ];

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative min-h-screen py-32 md:py-40 bg-background overflow-hidden"
    >
      {/* Section Label */}
      <div
        className={`absolute top-8 left-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
          02 — Works
        </span>
      </div>

      {/* Main Title - Scattered */}
      <div className="relative h-[200px] md:h-[280px] mb-16">
        <h2
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-foreground whitespace-nowrap transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          Selected
        </h2>
        <span
          className={`absolute left-[55%] md:left-[58%] top-[65%] md:top-[70%] font-display text-4xl md:text-6xl italic text-primary transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transform: isVisible ? "rotate(-6deg)" : "rotate(-6deg) translateX(-2rem)" }}
        >
          Works
        </span>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute top-32 right-16 w-2 h-2 rounded-full bg-primary transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <div
        className={`absolute top-48 right-24 w-24 h-[1px] bg-border transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
        style={{ transformOrigin: "left" }}
      />
      <div
        className={`absolute bottom-32 left-12 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ writingMode: "vertical-rl" }}
      >
        Portfolio
      </div>

      {/* Scattered Project Cards */}
      <div className="relative container max-w-7xl mx-auto px-6 min-h-[800px] md:min-h-[700px]">
        {projects.slice(0, 4).map((project, index) => {
          const pos = scatteredPositions[index];
          const delay = 400 + index * 150;

          return (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`absolute group cursor-pointer transition-all duration-700`}
              style={{
                top: pos.top,
                left: pos.left,
                right: pos.right,
                transform: isVisible 
                  ? `rotate(${pos.rotate}deg) translateY(0)` 
                  : `rotate(${pos.rotate}deg) translateY(20px)`,
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div
                className={`relative w-[280px] md:w-[340px] transition-transform duration-500 group-hover:scale-[1.02]`}
                style={{
                  transform: isVisible
                    ? `rotate(${pos.rotate}deg) translateY(0)`
                    : `rotate(${pos.rotate}deg) translateY(20px)`,
                }}
              >
                {/* Project Image */}
                <div
                  className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                >
                  <span className="font-display text-7xl text-foreground/10 group-hover:scale-110 transition-transform duration-700">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Project Info - Offset */}
                <div
                  className="mt-4 ml-4 transition-all duration-500 group-hover:translate-x-2"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Line */}
                <div
                  className="absolute -left-4 top-1/2 w-8 h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />
              </div>
            </Link>
          );
        })}

        {/* Floating Year Labels */}
        <div
          className={`absolute top-[30%] left-[45%] text-[120px] font-display text-foreground/[0.03] pointer-events-none transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          '24
        </div>
      </div>

      {/* View All Link - Positioned Uniquely */}
      <div
        className={`absolute bottom-16 right-12 md:right-24 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Link
          to="/projects"
          className="group flex items-center gap-4"
        >
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            View All
          </span>
          <div className="relative">
            <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Works;
