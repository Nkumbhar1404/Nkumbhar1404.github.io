import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, MapPin, Calendar, Briefcase } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional experience and training that shaped my technical expertise
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-600 to-emerald-600 hidden md:block"></div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-cyan-600 dark:bg-cyan-400 rounded-full border-4 border-white dark:border-slate-900 hidden md:block -translate-x-1/2"></div>

                {/* Content Card */}
                <Card className="md:ml-16 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          {exp.role}
                        </p>
                      </div>
                      <Badge 
                        variant="secondary"
                        className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-none"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {exp.description}
                    </p>

                    <div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Key Responsibilities:
                      </p>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;