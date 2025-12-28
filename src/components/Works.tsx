import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Works = () => {
  return (
    <section id="works" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Selected <span className="italic text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            A collection of projects that showcase my skills in design, development, and creative direction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`group block animate-fade-up-delay-${Math.min(index + 1, 3)}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-card card-hover cursor-pointer">
                {/* Project Image/Placeholder */}
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <span className="font-display text-6xl text-foreground/10 group-hover:scale-110 transition-transform duration-500">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />

                {/* Link indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-4 h-4 text-foreground" />
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-5">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 font-body">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16 animate-fade-up">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
