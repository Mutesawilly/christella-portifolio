import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, Briefcase } from "lucide-react";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-primary font-medium mb-4 block">
                {project.category}
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground font-body">
                {project.description}
              </p>
            </div>
            
            {/* Meta Grid */}
            <div className="grid grid-cols-2 gap-6 animate-fade-up-delay-1">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Year</span>
                </div>
                <p className="font-display text-lg text-foreground">{project.year}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Duration</span>
                </div>
                <p className="font-display text-lg text-foreground">{project.duration}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Client</span>
                </div>
                <p className="font-display text-lg text-foreground">{project.client}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Role</span>
                </div>
                <p className="font-display text-lg text-foreground">{project.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div 
            className={`aspect-[16/9] rounded-3xl bg-gradient-to-br ${project.color} flex items-center justify-center animate-scale-up`}
          >
            <span className="font-display text-[12rem] md:text-[20rem] text-foreground/10">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display text-sm uppercase tracking-widest text-primary mb-4">
                Overview
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-foreground font-body leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-secondary/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                The Challenge
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-primary/10">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                The Solution
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="font-display text-sm uppercase tracking-widest text-primary mb-8">
            Project Gallery
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {project.gallery.map((item, index) => (
              <div 
                key={index}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${item.color} flex items-end p-6 group cursor-pointer hover:scale-[1.02] transition-transform duration-500`}
              >
                <span className="text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display text-sm uppercase tracking-widest text-primary mb-4">
                Tools & Technologies
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display text-sm uppercase tracking-widest text-primary mb-4">
                Key Outcomes
              </h2>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-4 text-foreground font-body"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-sm text-primary font-medium">
                      {index + 1}
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="border-t border-border pt-12">
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
              Next Project
            </span>
            <Link 
              to={`/projects/${nextProject.id}`}
              className="group flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div 
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${nextProject.color} flex items-center justify-center group-hover:scale-105 transition-transform`}
                >
                  <span className="font-display text-xl text-foreground/20">
                    {nextProject.title.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{nextProject.category}</p>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
