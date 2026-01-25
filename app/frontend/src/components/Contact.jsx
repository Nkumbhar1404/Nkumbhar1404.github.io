import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm actively seeking opportunities in software engineering. Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contactItems.map((item, idx) => (
            <Card 
              key={idx}
              className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mb-4">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-900 dark:text-white font-medium">
                    {item.value}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-cyan-50 to-emerald-50 dark:from-cyan-900/10 dark:to-emerald-900/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Let's Work Together
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
              I'm open to full-time positions, internships, and collaborative projects. Feel free to reach out!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                onClick={() => window.location.href = `mailto:${personalInfo.email}`}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-slate-300 dark:border-slate-700"
                  onClick={() => window.open(personalInfo.github, '_blank')}
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-slate-300 dark:border-slate-700"
                  onClick={() => window.open(personalInfo.linkedin, '_blank')}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;