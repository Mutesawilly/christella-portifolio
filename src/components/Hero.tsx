import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Scattered decorative shapes */}
      <div className="absolute top-[15%] left-[8%] w-24 h-24 border border-primary/20 rounded-full animate-spin-slow" />
      <div className="absolute top-[30%] right-[12%] w-3 h-3 bg-primary/40 rounded-full animate-float" />
      <div className="absolute bottom-[25%] left-[15%] w-2 h-2 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[60%] right-[8%] w-16 h-px bg-border rotate-45" />
      <div className="absolute top-[20%] right-[30%] w-1 h-16 bg-border/50" />
      
      {/* Main content - scattered layout */}
      <div className="relative min-h-screen px-6 md:px-12 lg:px-20">
        
        {/* Top left - availability badge */}
        <div
          className={`absolute top-24 left-6 md:left-12 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available
          </span>
        </div>

        {/* Top right - rotated label */}
        <div
          className={`absolute top-32 right-6 md:right-12 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground origin-right -rotate-90 translate-x-full">
            Creative Designer
          </span>
        </div>

        {/* Center scattered name */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* "Hi, I'm" - offset to top left */}
            <span
              className={`absolute -top-16 -left-8 md:-left-20 text-sm md:text-base text-muted-foreground font-body transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Hi, I'm
            </span>

            {/* Main name - large */}
            <h1
              className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-foreground transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <span className="italic text-primary">Sofia</span>
            </h1>

            {/* Decorative line extending from name */}
            <div
              className={`absolute -right-12 md:-right-24 top-1/2 h-px bg-border transition-all duration-1000 delay-700 ${
                isLoaded ? "w-16 md:w-32 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>

        {/* Bottom left - tagline at angle */}
        <div
          className={`absolute bottom-32 md:bottom-40 left-6 md:left-16 max-w-xs transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body -rotate-2">
            Crafting beautiful digital experiences with passion for clean design & thoughtful interactions.
          </p>
        </div>

        {/* Bottom right - CTA arranged vertically */}
        <div
          className={`absolute bottom-28 md:bottom-36 right-6 md:right-16 transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#works"
            className="group flex flex-col items-end gap-1 text-foreground hover:text-primary transition-colors pointer-events-auto"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
              View
            </span>
            <span className="font-display text-2xl md:text-3xl italic">
              Work
            </span>
            <div className="w-8 h-px bg-current mt-1 group-hover:w-12 transition-all duration-300" />
          </a>
        </div>

        {/* Floating year badge - bottom center */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Scroll
          </span>
          <a href="#about" className="group">
            <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors animate-bounce" />
          </a>
        </div>

        {/* Scattered text elements */}
        <span
          className={`absolute top-[45%] left-[5%] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 rotate-90 origin-left transition-all duration-1000 delay-600 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          2024
        </span>

        <span
          className={`absolute top-[35%] right-[5%] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 -rotate-90 origin-right transition-all duration-1000 delay-800 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Portfolio
        </span>
      </div>
    </section>
  );
};

export default Hero;
