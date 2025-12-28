import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground mb-6 animate-fade-up">
              All <span className="italic text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body animate-fade-up-delay-1">
              A comprehensive collection of my work spanning brand identity, digital products, 
              web experiences, and creative direction.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-0 border-t border-border">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block border-b border-border py-8 md:py-12 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Number */}
                  <span className="text-sm text-muted-foreground font-mono w-12 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Project Preview */}
                  <div 
                    className={`w-20 h-20 rounded-xl bg-gradient-to-br ${project.color} shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                  >
                    <span className="font-display text-2xl text-foreground/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground font-body mt-1 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="hidden md:block text-xs uppercase tracking-widest text-primary font-medium">
                          {project.category}
                        </span>
                        <span className="hidden md:block text-sm text-muted-foreground">
                          {project.year}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile meta */}
                    <div className="flex items-center gap-4 mt-3 md:hidden">
                      <span className="text-xs uppercase tracking-widest text-primary font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
