import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { about } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Description Card */}
          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {about.description}
              </p>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow bg-gradient-to-br from-cyan-50 to-emerald-50 dark:from-cyan-900/10 dark:to-emerald-900/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    {about.education.degree}
                  </p>
                  <p className="text-base text-slate-700 dark:text-slate-300">
                    {about.education.college}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {about.education.university}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{about.education.duration}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{about.education.location}</span>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    CGPA: <span className="font-semibold text-cyan-600 dark:text-cyan-400">{about.education.cgpa}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;