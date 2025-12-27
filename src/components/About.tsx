import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeInterest, setActiveInterest] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const interests = [
    { label: "UI/UX", rotation: -3 },
    { label: "Typography", rotation: 2 },
    { label: "Motion", rotation: -1 },
    { label: "Photography", rotation: 1.5 },
    { label: "Branding", rotation: -2 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[10%] w-32 h-32 border border-border rounded-full opacity-30" />
      <div className="absolute bottom-[30%] left-[5%] w-px h-24 bg-border" />
      <div className="absolute top-[40%] left-[8%] w-2 h-2 bg-primary/30 rounded-full" />

      <div className="relative px-6 md:px-12 lg:px-20">
        {/* Section label - offset position */}
        <div
          className={`mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            <span className="w-8 h-px bg-border" />
            About
          </span>
        </div>

        {/* Main scattered layout */}
        <div className="relative min-h-[70vh]">
          
          {/* Large statement - positioned off-center left */}
          <div
            className={`absolute top-0 left-0 md:left-[5%] max-w-lg transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-snug">
              <em className="text-primary">Designer</em> based in{" "}
              <em className="text-primary">Barcelona</em>
              <span className="text-muted-foreground">—</span>
            </p>
          </div>

          {/* Secondary text - positioned right with rotation */}
          <div
            className={`absolute top-32 md:top-24 right-0 md:right-[10%] max-w-xs rotate-1 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body">
              crafting digital experiences with intention & soul.
            </p>
          </div>

          {/* Bio paragraph - center-bottom area */}
          <div
            className={`absolute top-56 md:top-48 left-[10%] md:left-[20%] max-w-sm -rotate-1 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm text-muted-foreground leading-relaxed font-body border-l-2 border-border pl-4">
              Currently studying design at the University of Arts. I believe in 
              the power of simplicity and the beauty of thoughtful details.
            </p>
          </div>

          {/* Interests - scattered absolutely positioned pills */}
          <div className="absolute top-80 md:top-72 left-0 right-0">
            <div className="relative h-48 md:h-56">
              {interests.map((interest, index) => {
                // Scattered positions for each interest
                const positions = [
                  "left-[5%] top-0",
                  "left-[30%] top-8 md:top-4",
                  "right-[35%] top-0",
                  "right-[10%] top-12 md:top-8",
                  "left-[15%] top-24 md:top-20",
                ];
                
                return (
                  <button
                    key={interest.label}
                    className={`absolute ${positions[index]} transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: `${0.8 + index * 0.1}s`,
                      transform: `rotate(${activeInterest === index ? 0 : interest.rotation}deg)`,
                    }}
                    onMouseEnter={() => setActiveInterest(index)}
                    onMouseLeave={() => setActiveInterest(null)}
                  >
                    <span
                      className={`inline-block px-4 py-2 text-sm font-body border rounded-full transition-all duration-300 ${
                        activeInterest === index
                          ? "bg-primary text-primary-foreground border-primary scale-105"
                          : "bg-background border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {interest.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Decorative number */}
          <div
            className={`absolute bottom-0 right-[5%] md:right-[15%] transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="font-display text-8xl md:text-9xl text-border/50 select-none">
              01
            </span>
          </div>

          {/* Year marker */}
          <div
            className={`absolute bottom-8 left-0 flex items-center gap-4 transition-all duration-1000 delay-1200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Est. 2024
            </span>
            <div className="w-12 h-px bg-border" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
