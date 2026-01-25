import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing my work in web development, AI, and embedded systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Header with Category Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="secondary"
                    className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-none"
                  >
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-slate-300 dark:border-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Key Features
                  </p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900/20"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;