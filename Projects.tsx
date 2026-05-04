import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Food Monitoring System",
      description: "A comprehensive food monitoring and inventory management system with real-time tracking, expiry date alerts, and nutritional analysis features.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "MediTrack - Hospital Patient Management System",
      description: "A complete hospital patient management system with electronic health records, appointment scheduling, billing, and real-time monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Quick Care - Smart Hospital Finder",
      description: "An intelligent hospital and healthcare facility finder with location-based search, ratings, available services, and instant booking capabilities.",
      image: "https://images.unsplash.com/photo-1631217314655-d73e89b00e61?w=500",
      tech: ["React", "Google Maps API", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent font-bold">
            Projects
          </h2>
          <p className="text-xl text-gray-600">
            Some of my recent work and personal projects
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border-0 bg-white group hover:-translate-y-2">
                <div className="h-48 overflow-hidden bg-gray-200 relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="hover:bg-blue-100 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 hover:bg-gray-900 hover:text-white transition-all" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
