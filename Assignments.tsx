import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Assignments() {
  const introVideo = {
    
  };

  const assignments = [
    {
      title: "Web Development Assignment",
      description: "Full-stack web application assignment covering responsive design, backend APIs, and database integration.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
      subject: "Web Development",
      grade: "A+",
      submissionDate: "Feb 2026",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      documentUrl: "https://example.com/assignment1",
      githubUrl: "https://github.com"
    },
    {
      title: "Data Structures Project",
      description: "Implementation of advanced data structures with performance analysis and optimization techniques.",
      image: "https://images.unsplash.com/photo-1516534775068-bb6c2dc8e4d5?w=500",
      subject: "Data Structures",
      grade: "A",
      submissionDate: "Jan 2026",
      technologies: ["C++", "Python", "Algorithm Analysis"],
      documentUrl: "https://example.com/assignment2",
      githubUrl: "https://github.com"
    },
    {
      title: "Database Design Assignment",
      description: "Comprehensive database schema design and optimization for enterprise applications with SQL queries.",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c814626d?w=500",
      subject: "Database Management",
      grade: "A+",
      submissionDate: "Dec 2025",
      technologies: ["SQL", "PostgreSQL", "Database Design"],
      documentUrl: "https://example.com/assignment3",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50/30 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent font-bold">
            Assignments
          </h2>
          <p className="text-xl text-gray-600">
            My academic assignments 
          </p>
        </motion.div>

        {/* Intro Video Section */}
       

        {/* Assignments Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl mb-6 font-bold text-gray-900">Academic Assignments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment, index) => (
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
                      src={assignment.image}
                      alt={assignment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors flex-1">{assignment.title}</h3>
                      <Badge className="ml-2 shrink-0 bg-green-500 hover:bg-green-600">{assignment.grade}</Badge>
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-3">{assignment.subject} • {assignment.submissionDate}</p>
                    <p className="text-gray-600 mb-4 flex-1">{assignment.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {assignment.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover:bg-blue-100 transition-colors text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="gap-2 hover:bg-gray-900 hover:text-white transition-all flex-1" asChild>
                        <a href={assignment.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md flex-1" asChild>
                        <a href={assignment.documentUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4" />
                          Document
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
