import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender-soft/30 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/40 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10 pt-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full text-sm text-muted-foreground mb-6 border border-border">
            <Sparkles className="w-4 h-4 text-primary" />
            Available for new projects
          </span>
        </div>

        <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight mb-6">
          Hi, I'm{" "}
          <span className="italic text-primary">Sofia</span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl font-normal text-muted-foreground">
            a creative designer & developer
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          I craft beautiful digital experiences with a passion for clean design
          and thoughtful interactions. Currently studying design at the University of Arts.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" asChild>
            <a href="#works">View My Work</a>
          </Button>
          <Button variant="soft" size="lg" className="rounded-full" asChild>
            <a href="#about">Learn More About Me</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
