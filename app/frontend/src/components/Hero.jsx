import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center">
        {/* Greeting */}
        <div className="inline-block mb-4 px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 rounded-full">
          <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
            Welcome to my portfolio
          </p>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400">
            {personalInfo.name}
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-3">
          {personalInfo.title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
          {personalInfo.subtitle}
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900/20"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;