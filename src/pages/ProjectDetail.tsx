import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, Briefcase } from "lucide-react";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const metaItems = [
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: User, label: "Client", value: project.client },
    { icon: Briefcase, label: "Role", value: project.role },
  ];

  const metaPositions = [
    { rotation: -2, offsetY: 0 },
    { rotation: 3, offsetY: 10 },
    { rotation: -1, offsetY: 5 },
    { rotation: 2, offsetY: 15 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/projects"
            className={`inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-700 mb-12 group ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            All Projects
          </Link>

          <div className="relative">
            {/* Category - Floating */}
            <span
              className={`absolute -top-4 left-[5%] text-xs uppercase tracking-[0.3em] text-primary font-medium transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 rotate-[-3deg]" : "opacity-0"
              }`}
            >
              {project.category}
            </span>

            {/* Title - Large & Scattered */}
            <h1
              className={`font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {project.title}
            </h1>

            {/* Description - Offset */}
            <p
              className={`max-w-lg text-lg text-muted-foreground font-body mt-8 ml-[10%] md:ml-[15%] transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0 rotate-[1deg]" : "opacity-0 translate-y-8"
              }`}
            >
              {project.description}
            </p>

            {/* Scattered Meta Items */}
            <div className="relative mt-16 md:mt-24 min-h-[200px]">
              {metaItems.map((item, index) => {
                const pos = metaPositions[index];
                const isLeft = index % 2 === 0;
                const baseLeft = isLeft ? `${index * 15 + 5}%` : `${index * 15 + 10}%`;
                const delay = 400 + index * 100;

                return (
                  <div
                    key={item.label}
                    className={`absolute transition-all duration-700`}
                    style={{
                      left: baseLeft,
                      top: `${pos.offsetY}px`,
                      transform: `rotate(${pos.rotation}deg)`,
                      transitionDelay: `${delay}ms`,
                      opacity: isLoaded ? 1 : 0,
                    }}
                  >
                    <div className="bg-secondary/50 backdrop-blur-sm rounded-xl px-5 py-4 border border-border/30">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <item.icon className="w-3 h-3" />
                        <span className="text-[10px] uppercase tracking-widest">{item.label}</span>
                      </div>
                      <p className="font-display text-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Decorative */}
        <div
          className={`absolute top-32 right-12 w-20 h-[1px] bg-border transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transformOrigin: "right", transform: "rotate(-30deg)" }}
        />
        <div
          className={`absolute top-48 right-8 w-2 h-2 rounded-full bg-primary transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        />
      </section>

      {/* Hero Image */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div
            className={`aspect-[16/9] rounded-3xl bg-gradient-to-br ${project.color} flex items-center justify-center transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transform: isLoaded ? "rotate(-1deg)" : "rotate(-1deg) scale(0.95)" }}
          >
            <span className="font-display text-[12rem] md:text-[20rem] text-foreground/10">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
      </section>

      {/* Overview - Scattered Layout */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="relative">
            <span
              className="absolute -left-4 top-0 text-xs uppercase tracking-[0.3em] text-primary font-medium"
              style={{ transform: "rotate(-90deg)", transformOrigin: "left top" }}
            >
              Overview
            </span>
            <p className="text-xl md:text-2xl text-foreground font-body leading-relaxed ml-8 md:ml-16 max-w-3xl">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - Scattered Cards */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="relative min-h-[400px] md:min-h-[300px]">
            {/* Challenge */}
            <div
              className="absolute left-0 top-0 w-full md:w-[55%] p-8 rounded-3xl bg-secondary/50 border border-border/30"
              style={{ transform: "rotate(-1deg)" }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                The Challenge
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div
              className="absolute right-0 top-[220px] md:top-[60px] w-full md:w-[55%] p-8 rounded-3xl bg-primary/10 border border-primary/20"
              style={{ transform: "rotate(1deg)" }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                The Solution
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Scattered */}
      <section className="pb-16 md:pb-24 pt-32 md:pt-16">
        <div className="container max-w-6xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-12 block ml-4">
            Project Gallery
          </span>
          <div className="relative">
            {project.gallery.map((item, index) => {
              const rotations = [-2, 3, -1, 2];
              const offsets = [0, 20, 10, 30];

              return (
                <div
                  key={index}
                  className="inline-block w-[45%] md:w-[48%] m-2 group cursor-pointer"
                  style={{
                    transform: `rotate(${rotations[index]}deg)`,
                    marginTop: `${offsets[index]}px`,
                  }}
                >
                  <div
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${item.color} flex items-end p-6 group-hover:scale-[1.02] transition-transform duration-500 shadow-lg`}
                  >
                    <span className="text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools - Scattered Pills */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-8 block">
            Tools & Technologies
          </span>
          <div className="flex flex-wrap gap-4">
            {project.tools.map((tool, index) => {
              const rotations = [-3, 2, -1, 4, -2, 1];
              return (
                <span
                  key={tool}
                  className="px-5 py-3 rounded-full bg-secondary border border-border/30 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default"
                  style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                >
                  {tool}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes - Scattered List */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-12 block">
            Key Outcomes
          </span>
          <div className="space-y-6">
            {project.outcomes.map((outcome, index) => {
              const offsets = ["0%", "5%", "2%", "8%"];
              const rotations = [0, -1, 1, -1];
              return (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  style={{
                    marginLeft: offsets[index],
                    transform: `rotate(${rotations[index]}deg)`,
                  }}
                >
                  <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-sm text-primary font-medium">
                    {index + 1}
                  </span>
                  <p className="text-foreground font-body pt-2">{outcome}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next Project - Scattered */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="relative pt-12 border-t border-border">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
              Next Project
            </span>
            <Link
              to={`/projects/${nextProject.id}`}
              className="group block"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-border/30 group-hover:border-primary/20 transition-all duration-500">
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
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
