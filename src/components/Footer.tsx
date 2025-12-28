import { useEffect, useRef, useState } from "react";
import { Heart, Mail, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", rotation: -8 },
    { icon: Linkedin, href: "#", label: "LinkedIn", rotation: 4 },
    { icon: Github, href: "#", label: "GitHub", rotation: -3 },
    { icon: Mail, href: "mailto:hello@sofia.design", label: "Email", rotation: 6 },
  ];

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative min-h-[80vh] py-32 bg-secondary/30 overflow-hidden"
    >
      {/* Section Label */}
      <div
        className={`absolute top-8 left-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
          03 — Contact
        </span>
      </div>

      {/* Large CTA Text - Scattered */}
      <div className="relative container max-w-7xl mx-auto px-6">
        <div className="relative min-h-[400px]">
          {/* Main Headline Words */}
          <h2
            className={`absolute top-0 left-[5%] font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Let's
          </h2>
          <h2
            className={`absolute top-[60px] md:top-[80px] left-[20%] md:left-[25%] font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            work
          </h2>
          <span
            className={`absolute top-[130px] md:top-[170px] left-[35%] md:left-[45%] font-display text-4xl md:text-5xl lg:text-6xl italic text-primary transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0 rotate-[-4deg]" : "opacity-0 translate-y-8"
            }`}
          >
            together
          </span>

          {/* Email CTA - Positioned Uniquely */}
          <a
            href="mailto:hello@sofia.design"
            className={`absolute top-[220px] md:top-[280px] left-[10%] md:left-[15%] group transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                Get In Touch
              </span>
            </div>
          </a>

          {/* Description - Rotated */}
          <p
            className={`absolute top-[320px] md:top-[200px] right-[5%] md:right-[10%] max-w-[280px] text-sm text-muted-foreground font-body leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 rotate-[2deg]" : "opacity-0"
            }`}
          >
            I'm always excited to collaborate on new projects. Whether it's a website, app, or brand identity—let's create something beautiful.
          </p>

          {/* Scattered Social Links */}
          <div className="absolute top-[420px] md:top-[350px] left-0 right-0">
            <div className="relative h-[120px]">
              {socialLinks.map((social, index) => {
                const positions = [
                  { left: "10%", top: "0" },
                  { left: "30%", top: "40px" },
                  { left: "55%", top: "10px" },
                  { left: "75%", top: "50px" },
                ];
                const pos = positions[index];
                const delay = 500 + index * 100;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`absolute group transition-all duration-700`}
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: `rotate(${social.rotation}deg)`,
                      transitionDelay: `${delay}ms`,
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                      <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute top-24 right-16 w-32 h-[1px] bg-border transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
        style={{ transformOrigin: "right", transform: "rotate(-45deg)" }}
      />
      <div
        className={`absolute bottom-48 left-8 w-3 h-3 border border-primary/30 rounded-full transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <div
        className={`absolute bottom-32 right-24 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ writingMode: "vertical-rl" }}
      >
        Say Hello
      </div>

      {/* Bottom Section */}
      <div
        className={`absolute bottom-8 left-0 right-0 px-8 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 font-body">
            © 2024 Sofia Martinez
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground/60 font-body">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> and lots of coffee
          </p>
        </div>
      </div>

      {/* Large Background Text */}
      <div
        className={`absolute bottom-0 left-0 text-[15vw] font-display text-foreground/[0.02] pointer-events-none leading-none transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        CONNECT
      </div>
    </footer>
  );
};

export default Footer;
