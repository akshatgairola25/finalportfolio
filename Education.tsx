import { Card } from "./ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science & Engineering",
      institution: "Graphic Era Hill University",
      duration: "2024 - 2028",
      gpa: "8.5/10.0",
      icon: GraduationCap
    },
    {
      degree: "Higher Secondary Education",
      field: "Science (PCM)",
      institution: "BHAGHIRATHI VIDYALAYA",
      duration: "2023 - 2024",
      icon: BookOpen
    }
  ];

  const achievements = [
    "Dean's List for Academic Excellence (2022-2023)",
    "First Prize in College Hackathon 2023",
    "Google Code Jam Participant",
    "Published Research Paper on Machine Learning",
    "Top 100 in National Coding Competition",
    "Active Open Source Contributor"
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      provider: "Coursera",
      year: "2024"
    },
    {
      name: "Data Structures & Algorithms",
      provider: "Udemy",
      year: "2023"
    },
    {
      name: "Machine Learning Specialization",
      provider: "Stanford Online",
      year: "2024"
    },
    {
      name: "Cloud Computing Fundamentals",
      provider: "AWS",
      year: "2023"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white -z-10"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent font-bold">
            Education & Achievements
          </h2>
          <p className="text-xl text-gray-600">
            My academic background and accomplishments
          </p>
        </motion.div>
        
        <div className="space-y-8">
          <div>
            <motion.h3
              className="text-2xl mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-xl mb-1 group-hover:text-blue-600 transition-colors">{edu.degree}</h4>
                          <p className="text-blue-600 mb-2">{edu.field}</p>
                          <p className="text-gray-600">{edu.institution}</p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-gray-500">{edu.duration}</span>
                            {edu.gpa && (
                              <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100">
                                GPA: {edu.gpa}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          <div>
            <motion.h3
              className="text-2xl mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-6 h-6 text-blue-600" />
              Achievements
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
                <ul className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
          
          <div>
            <motion.h3
              className="text-2xl mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-6 h-6 text-blue-600" />
              Certifications
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-xl transition-all duration-300 border-0 bg-white group hover:-translate-y-1">
                    <h4 className="mb-2 group-hover:text-blue-600 transition-colors">{cert.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{cert.provider}</p>
                    <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
