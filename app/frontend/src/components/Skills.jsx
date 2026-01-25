import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Code, 
  Database, 
  Wrench, 
  Layers,
  Github,
  Terminal
} from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      items: skills.languages,
      color: 'cyan'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="w-5 h-5" />,
      items: skills.frameworks,
      color: 'emerald'
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5" />,
      items: skills.databases,
      color: 'cyan'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-5 h-5" />,
      items: skills.tools,
      color: 'emerald'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I work with to build robust applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx}
              className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/20 text-${category.color}-600 dark:text-${category.color}-400`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;