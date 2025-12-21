import { useEffect, useRef, useState } from "react";
import { Sparkles, Star, Heart, Zap } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const traits = [
    { word: "Curious", icon: Sparkles, delay: "0s" },
    { word: "Creative", icon: Star, delay: "0.1s" },
    { word: "Passionate", icon: Heart, delay: "0.2s" },
    { word: "Bold", icon: Zap, delay: "0.3s" },
  ];

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "React & TypeScript", level: 85 },
    { name: "Visual Identity", level: 80 },
    { name: "Photography", level: 75 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 overflow-hidden relative"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-primary/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-40 left-10 w-12 h-12 bg-primary/10 rounded-full animate-float" />
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-accent/20 rotate-45 animate-bounce-gentle" />

      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header with reveal animation */}
        <div className="mb-20 overflow-hidden">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4 block">
              About Me
            </span>
          </div>
          
          {/* Big Typography Hero */}
          <h2
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-none transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            I'm a{" "}
            <span className="italic text-primary relative inline-block group cursor-pointer">
              dreamer
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </span>
          </h2>
          <h2
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-none mt-2 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            who{" "}
            <span className="italic text-muted-foreground">designs</span>
          </h2>
        </div>

        {/* Marquee of traits */}
        <div className="relative mb-20 -mx-6 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
          
          <div className={`flex animate-marquee ${isVisible ? "" : "opacity-0"}`}>
            {[...traits, ...traits, ...traits, ...traits].map((trait, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 mx-2 bg-background/60 backdrop-blur-sm rounded-full border border-border whitespace-nowrap group hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <trait.icon className="w-5 h-5 text-primary group-hover:animate-wiggle" />
                <span className="font-display text-lg font-medium text-foreground">
                  {trait.word}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Bio with staggered paragraphs */}
          <div className="space-y-8">
            {[
              "I believe design should tell a story. Every pixel, every interaction, every color choice is a word in that narrative.",
              "As a third-year design student, I blend creativity with technical skills to craft experiences that feel both beautiful and intuitive.",
              "When I'm not at my desk, you'll find me in art galleries, photographing street corners, or hunting for the perfect latte."
            ].map((text, index) => (
              <p
                key={index}
                className={`text-lg text-muted-foreground leading-relaxed font-body transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
              >
                {text}
              </p>
            ))}

            {/* Fun fact with animation */}
            <div
              className={`relative p-6 bg-gradient-to-br from-rose-soft/30 to-lavender-soft/30 rounded-2xl border border-primary/10 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: "0.85s" }}
            >
              <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Fun Fact
              </span>
              <p className="text-foreground font-medium mt-2">
                I've designed over <span className="text-primary font-display text-2xl">50+</span> projects 
                and consumed approximately <span className="text-primary font-display text-2xl">∞</span> cups of coffee ☕
              </p>
            </div>
          </div>

          {/* Right - Skills with animated bars */}
          <div className="space-y-8">
            <h3
              className={`font-display text-2xl font-semibold text-foreground mb-8 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              My Superpowers ✨
            </h3>

            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                }`}
                style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${0.8 + index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Rotating badge */}
            <div
              className={`mt-12 flex justify-center transition-all duration-700 ${
                isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[8px] fill-muted-foreground uppercase tracking-[0.3em]">
                      <textPath href="#circle">
                        • Creative Designer • Student • Dreamer • Coffee Lover 
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="font-display text-2xl text-primary">S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
