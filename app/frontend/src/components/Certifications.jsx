import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, ExternalLink, Calendar, Trophy } from 'lucide-react';
import { certifications, achievements } from '../data/mock';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional certifications and notable achievements in my journey
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card 
                key={cert.id}
                className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer"
                onClick={() => cert.credentialUrl !== '#' && window.open(cert.credentialUrl, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.credentialUrl !== '#' && (
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            Achievements
          </h3>
          <div className="grid gap-6">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id}
                className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/10 dark:to-cyan-900/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">
                        {achievement.description}
                      </p>
                      <Badge 
                        variant="secondary"
                        className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-none"
                      >
                        {achievement.date}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;