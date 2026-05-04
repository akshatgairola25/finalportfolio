import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download, Sparkles, Video, FileText, Presentation } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
// @ts-ignore
import introVideoFile from "./introvideo/self intro.mp4?url";

interface UploadsMetadata {

  introVideo: {
    enabled: boolean;
    filePath: string;
    fileName: string;
    title: string;
  };
  assignment: {
    enabled: boolean;
    filePath: string;
    fileName: string;
    title: string;
  };
  coverLetter: {
    enabled: boolean;
    filePath: string;
    fileName: string;
    title: string;
  };
  presentation: {
    enabled: boolean;
    filePath: string;
    fileName: string;
    title: string;
  };
}

export function Hero() {
  const [metadata, setMetadata] = useState<UploadsMetadata | null>(null);
  const [uploadsFromMetadata, setUploadsFromMetadata] = useState({
    introVideo: null as string | null,
    assignment: null as string | null,
    presentation: null as string | null,
    coverLetter: null as string | null,
  });

  useEffect(() => {
    // Load metadata from public folder
    fetch("/uploads-metadata.json")
      .then((res) => res.json())
      .then((data: UploadsMetadata) => {
        setMetadata(data);
        if (data.introVideo.enabled) {
          setUploadsFromMetadata((prev) => ({
            ...prev,
            introVideo: data.introVideo.filePath,
          }));
        }
        if (data.assignment.enabled) {
          setUploadsFromMetadata((prev) => ({
            ...prev,
            assignment: data.assignment.filePath,
          }));
        }
        if (data.presentation.enabled) {
          setUploadsFromMetadata((prev) => ({
            ...prev,
            presentation: data.presentation.filePath,
          }));
        }
        if (data.coverLetter.enabled) {
          setUploadsFromMetadata((prev) => ({
            ...prev,
            coverLetter: data.coverLetter.filePath,
          }));
        }
      })
      .catch((err) => console.log("No metadata file found:", err));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-20"></div>
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
      
            
            <motion.h1
              className="text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold">Akshat Gairola</span>
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-3xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Computer Science Student
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              BTech in Computer Science & Engineering
            </motion.p>
          </div>
          
          <motion.p
            className="text-lg text-gray-600 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Passionate about building innovative solutions and exploring new technologies. 
            Focused on software development, algorithms, and problem-solving.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
            <Button variant="outline" className="gap-2 border-2 hover:border-blue-600 hover:text-blue-600 transition-all">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            

            
          </motion.div>
          
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-700 hover:text-gray-900 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-blue-600 hover:text-blue-700 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-red-500 hover:text-red-600 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Video Display on Right */}
        {(uploadsFromMetadata.introVideo || true) && (
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Video className="w-5 h-5" />
                My Introduction
              </h3>
            </div>
            <div className="p-6">
              <video
                controls
                autoPlay
                muted
                loop
                className="w-full rounded-lg bg-black"
                style={{ maxHeight: "500px" }}
              >
                <source
                  src={introVideoFile}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="mt-4 text-gray-600 text-sm">
                <strong>File:</strong> self intro.mp4
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Assignment, Cover Letter & Presentation Display Section */}
      <motion.div
        className="mt-20 max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* Assignment Display */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4">
              <h3 className="text-white font-bold flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Submitted Assignment
              </h3>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-700 break-all">pese swoc.pdf</p>
                <p className="text-gray-500 text-sm mt-2">
                  Assignment Document
                </p>
                <Button
                  className="mt-4 gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = "/uploads/assignments/pese swoc.pdf";
                    a.download = "pese swoc.pdf";
                    a.click();
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Assignment
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Cover Letter Display */}
          {uploadsFromMetadata.coverLetter && (
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Cover Letter
                </h3>
              </div>
              <div className="p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-700 break-all">
                    {metadata?.coverLetter?.fileName || "cover-letter.pdf"}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {metadata?.coverLetter?.title || "Cover Letter"}
                  </p>
                  <Button
                    className="mt-4 gap-2 bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      const fileName = metadata?.coverLetter?.fileName || "cover-letter.pdf";
                      const a = document.createElement("a");
                      a.href = uploadsFromMetadata.coverLetter!;
                      a.download = fileName;
                      a.click();
                    }}
                  >
                    <Download className="w-4 h-4" />
                    Download Cover Letter
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Presentation Display */}
          {uploadsFromMetadata.presentation && (
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <Presentation className="w-5 h-5" />
                  My Presentation
                </h3>
              </div>
              <div className="p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Presentation className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-700 break-all">
                    {metadata?.presentation?.fileName || "presentation.pdf"}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {metadata?.presentation?.title || "Presentation Document"}
                  </p>
                  <Button
                    className="mt-4 gap-2 bg-orange-600 hover:bg-orange-700"
                    onClick={() => {
                      const fileName = metadata?.presentation?.fileName || "presentation.pdf";
                      const a = document.createElement("a");
                      a.href = uploadsFromMetadata.presentation!;
                      a.download = fileName;
                      a.click();
                    }}
                  >
                    <Download className="w-4 h-4" />
                    Download Presentation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
      
    </section>
  );
}
