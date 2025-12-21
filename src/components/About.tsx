import { Heart, Palette, Code, Camera } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Palette, label: "UI/UX Design", description: "Creating intuitive interfaces" },
    { icon: Code, label: "Development", description: "React, TypeScript, CSS" },
    { icon: Camera, label: "Photography", description: "Visual storytelling" },
    { icon: Heart, label: "Branding", description: "Identity & visual systems" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-cream-dark shadow-card">
              <div className="w-full h-full bg-gradient-to-br from-rose-soft to-lavender-soft flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="font-display text-5xl text-primary">S</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Sofia Martinez</p>
                </div>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-up-delay-1">
            <span className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Passionate about creating{" "}
              <span className="italic text-primary">beautiful</span> things
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              I'm a third-year design student with a love for minimal aesthetics and 
              meaningful digital experiences. My approach combines creative vision with 
              technical skills to bring ideas to life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-body">
              When I'm not designing or coding, you'll find me exploring art galleries, 
              taking photos of everyday moments, or experimenting with new creative tools.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                >
                  <skill.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-medium text-foreground text-sm mb-1">{skill.label}</h3>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
