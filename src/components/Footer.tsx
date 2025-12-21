import { Heart, Mail, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@sofia.design", label: "Email" },
  ];

  return (
    <footer id="contact" className="py-20 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Let's work <span className="italic text-primary">together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 font-body">
            I'm always excited to collaborate on new projects. 
            Whether it's a website, app, or brand identity—let's create something beautiful.
          </p>
          <a
            href="mailto:hello@sofia.design"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-hover hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-body">
            © 2024 Sofia Martinez. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-body">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
