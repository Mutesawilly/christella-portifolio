import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const words = [
    { text: "Designer", emphasis: true },
    { text: "based in", emphasis: false },
    { text: "Barcelona", emphasis: true },
    { text: "—", emphasis: false },
    { text: "crafting", emphasis: false },
    { text: "digital", emphasis: true },
    { text: "experiences", emphasis: false },
    { text: "with", emphasis: false },
    { text: "intention", emphasis: true },
    { text: "&", emphasis: false },
    { text: "soul.", emphasis: true },
  ];

  const interests = [
    "UI/UX",
    "Typography",
    "Motion",
    "Photography",
    "Branding",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 md:py-32 bg-background relative"
    >
      <div className="container max-w-5xl mx-auto px-6">
        {/* Minimal label */}
        <div className="overflow-hidden mb-12">
          <span
            className={`inline-block text-xs uppercase tracking-[0.4em] text-muted-foreground transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            About
          </span>
        </div>

        {/* Main flowing text - each word animates */}
        <div className="mb-20">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-foreground">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 md:mr-4 transition-all duration-700 cursor-default ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${
                  word.emphasis
                    ? "text-foreground hover:text-primary transition-colors duration-300"
                    : "text-muted-foreground"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {word.emphasis ? <em>{word.text}</em> : word.text}
              </span>
            ))}
          </p>
        </div>

        {/* Two column minimal layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left - Short bio */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed font-body text-base">
              Currently studying design at the University of Arts. I believe in 
              the power of simplicity and the beauty of thoughtful details. 
              Every project is an opportunity to create something meaningful.
            </p>
          </div>

          {/* Right - Interests as interactive list */}
          <div
            className={`transition-all duration-700 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
              Focus Areas
            </span>
            <div className="space-y-1">
              {interests.map((interest, index) => (
                <div
                  key={interest}
                  className="group relative overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`flex items-center justify-between py-3 border-b border-border cursor-default transition-all duration-300 ${
                      hoveredIndex === index ? "pl-4" : "pl-0"
                    }`}
                  >
                    <span
                      className={`font-display text-lg transition-colors duration-300 ${
                        hoveredIndex === index ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {interest}
                    </span>
                    <span
                      className={`text-xs text-muted-foreground transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  {/* Hover indicator line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-0.5 bg-primary transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal decorative element */}
        <div
          className={`mt-24 flex items-center gap-4 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-12 h-px bg-border" />
          <span className="text-xs text-muted-foreground tracking-widest">
            EST. 2024
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
