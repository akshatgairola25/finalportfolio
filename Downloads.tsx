import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download, FileText, PresentationIcon, AlertCircle, Upload } from "lucide-react";
import { motion } from "motion/react";

interface DownloadItem {
  enabled: boolean;
  filePath: string;
  fileName: string;
  title: string;
}

export function Downloads() {
  const [downloads, setDownloads] = useState<{
    coverLetter?: DownloadItem;
    presentation?: DownloadItem;
  }>({});
  const [loading, setLoading] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState<{
    coverLetter?: File;
    presentation?: File;
  }>({});
  const [uploading, setUploading] = useState<{
    coverLetter?: boolean;
    presentation?: boolean;
  }>({});

  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const response = await fetch("/uploads-metadata.json");
        const metadata = await response.json();
        setDownloads({
          coverLetter: metadata.coverLetter,
          presentation: metadata.presentation,
        });
      } catch (error) {
        console.error("Failed to load metadata:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMetadata();
  }, []);

  const handleFileUpload = (type: "coverLetter" | "presentation", file: File) => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleUpload = async (type: "coverLetter" | "presentation") => {
    const file = uploadedFiles[type];
    if (!file) return;

    setUploading(prev => ({ ...prev, [type]: true }));

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", type);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Update downloads to show the file
        setDownloads(prev => ({
          ...prev,
          [type]: {
            ...prev[type]!,
            enabled: true,
            fileName: file.name,
          }
        }));
        
        // Clear the uploaded file
        setUploadedFiles(prev => ({
          ...prev,
          [type]: undefined
        }));
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(prev => ({ ...prev, [type]: false }));
    }
  };

  const downloadableItems = [
    {
      key: "coverLetter",
      title: "Cover Letter",
      description: "Download my professional cover letter",
      icon: FileText,
      data: downloads.coverLetter,
      color: "from-blue-600 to-cyan-600",
    },
    {
      key: "presentation",
      title: "Presentation",
      description: "View my professional presentation",
      icon: PresentationIcon,
      data: downloads.presentation,
      color: "from-purple-600 to-pink-600",
    },
  ];

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/30 via-white to-purple-50/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent font-bold">
              Downloads
            </h2>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  const hasAnyEnabled = Object.values(downloads).some((item) => item?.enabled);

  // Show Downloads section if files are enabled or if we're allowing uploads
  const shouldShow = hasAnyEnabled || true;

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50/50 via-white to-purple-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            Download My Documents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload and share your professional cover letter and presentation with everyone visiting your portfolio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {downloadableItems.map((item, index) => {
            const IconComponent = item.icon;
            const isUploaded = item.data?.enabled || uploadedFiles[item.key as "coverLetter" | "presentation"];

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white group hover:-translate-y-2 h-full">
                  <div className={`h-56 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-20 h-20 text-white/90" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-8 flex-1 text-lg">{item.description}</p>

                    {isUploaded && item.data?.enabled ? (
                      // Download button
                      <Button
                        className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg flex-1 w-full text-white font-bold py-6 text-lg"
                        asChild
                      >
                        <a
                          href={item.data.filePath}
                          download={item.data.fileName}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-5 h-5" />
                          Download {item.title}
                        </a>
                      </Button>
                    ) : (
                      // Upload section
                      <div className="flex flex-col gap-3">
                        <input
                          type="file"
                          id={`upload-${item.key}`}
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileUpload(item.key as "coverLetter" | "presentation", e.target.files[0]);
                            }
                          }}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.pptx,.ppt"
                        />
                        <label htmlFor={`upload-${item.key}`} className="w-full">
                          <Button
                            className="gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-md w-full text-white font-semibold py-6"
                            asChild
                          >
                            <span className="cursor-pointer text-base">
                              <Upload className="w-5 h-5" />
                              Choose {item.title} File
                            </span>
                          </Button>
                        </label>
                        {uploadedFiles[item.key as "coverLetter" | "presentation"] && (
                          <>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                              <p className="text-sm font-semibold text-green-900">Selected:</p>
                              <p className="text-sm text-green-800 break-words">
                                {uploadedFiles[item.key as "coverLetter" | "presentation"]?.name}
                              </p>
                            </div>
                            <Button
                              onClick={() => handleUpload(item.key as "coverLetter" | "presentation")}
                              disabled={uploading[item.key as "coverLetter" | "presentation"]}
                              className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md w-full text-white font-semibold py-6"
                            >
                              {uploading[item.key as "coverLetter" | "presentation"] ? (
                                <>
                                  <span className="animate-spin">⏳</span>
                                  Uploading...
                                </>
                              ) : (
                                <>
                                  <Upload className="w-5 h-5" />
                                  Upload Now
                                </>
                              )}
                            </Button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Info message */}
        <motion.div
          className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg flex gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-blue-900 mb-2 text-lg">Ready to Upload?</p>
            <p className="text-blue-800">
              Click <strong>"Choose File"</strong> to select your cover letter or presentation PDF, then click <strong>"Upload Now"</strong> to make it available for download. Your files will be automatically saved and displayed to all visitors!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
