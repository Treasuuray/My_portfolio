import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Printer, ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  const [isPrinting, setIsPrinting] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    console.log("Resume component mounted");
  }, []);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  const handleDownload = () => {
    handlePrint();
  };

  const SectionHeader = ({ title, id }: { title: string; id: string }) => (
    <motion.h2 
      className={`text-xl font-bold border-b pb-1 mb-3 cursor-pointer transition-colors ${
        activeSection === id 
          ? "text-vibrant-purple border-vibrant-purple" 
          : "text-blue-800 border-gray-300 hover:text-vibrant-blue hover:border-vibrant-blue"
      }`}
      onClick={() => setActiveSection(activeSection === id ? null : id)}
      whileHover={{ scale: 1.01 }}
    >
      {title}
    </motion.h2>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
      {/* Header with actions - hidden when printing */}
      <div className={`sticky top-0 z-10 border-b p-4 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 ${isPrinting ? 'hidden' : ''}`}>
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-vibrant-blue/10 hover:text-vibrant-blue transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
          <div className="flex gap-2">
            <Button 
              onClick={handleDownload}
              className="bg-vibrant-purple hover:bg-vibrant-purple/90 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button 
              onClick={handlePrint}
              className="bg-vibrant-teal hover:bg-vibrant-teal/90 transition-colors"
            >
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto max-w-4xl p-8 print:p-0 print:max-w-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 print:shadow-none print:p-0"
        >
          <div className="mb-8">
            <motion.h1 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent"
            >
              OLOWOLADE TREASURE SIMILOLUWA
            </motion.h1>
            <div className="text-center mb-4">
              <p className="font-semibold uppercase text-vibrant-teal">Frontend Development</p>
              <p className="text-gray-700 dark:text-gray-300">NO 13b, GAUN, MAGBORO, OGUN STATE NIGERIA</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
              >
                <span className="text-vibrant-pink">📱</span>
                <span className="ml-1 text-gray-800 dark:text-gray-200">07039667165</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
              >
                <span className="text-vibrant-pink">📧</span>
                <a href="mailto:treasureolowolad@gmail.com" className="ml-1 text-vibrant-blue hover:underline">treasureolowolade@gmail.com</a>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
              >
                <span className="text-gray-800 dark:text-gray-200">GitHub:</span>
                <a href="https://github.com/Treasuuray" className="ml-1 text-vibrant-blue hover:underline flex items-center">
                  Treasuuray
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
              >
                <span className="text-gray-800 dark:text-gray-200">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/treasure-olowolade" className="ml-1 text-vibrant-blue hover:underline flex items-center">
                  treasure-olowolade
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </motion.div>
            </div>
          </div>

          <div className="mb-6">
            <SectionHeader title="Professional Summary" id="summary" />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed"
            >
              Creative and detail-oriented Frontend Developer with a HTML, CSS, and Next.js. Adept at 
              building responsive, user-friendly web interfaces and working in fast-paced, collaborative 
              environments. Passionate about clean code, performance optimization, and seamless user 
              experiences.
            </motion.p>
          </div>

          <div className="mb-6">
            <SectionHeader title="Technical Skills" id="skills" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
            >
              <div className="space-y-2">
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 p-2 rounded-md"
                >
                  <span className="font-semibold text-vibrant-purple">Languages:</span> JavaScript (ES6+), HTML5, CSS3
                </motion.p>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 p-2 rounded-md"
                >
                  <span className="font-semibold text-vibrant-purple">Frameworks & Libraries:</span> React, Next.js, Tailwind CSS
                </motion.p>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 p-2 rounded-md"
                >
                  <span className="font-semibold text-vibrant-purple">Tools & Platforms:</span> Git, GitHub, Visual Studio Code, Figma
                </motion.p>
              </div>
              <div className="space-y-2">
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 p-2 rounded-md"
                >
                  <span className="font-semibold text-vibrant-purple">Other:</span> Responsive Design, REST APIs, SEO Best Practices, Web Performance Optimization
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="mb-6">
            <SectionHeader title="Education" id="education" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
            >
              <p className="font-semibold text-vibrant-blue">Ekiti State University - Ado Ekiti, Nigeria</p>
              <p className="text-gray-800 dark:text-gray-200">B.Sc Biochemistry</p>
              <p className="text-vibrant-teal">Completed</p>
            </motion.div>
          </div>

          <div className="mb-6">
            <SectionHeader title="Certifications" id="certifications" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm space-y-4"
            >
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg border-l-4 border-vibrant-purple"
              >
                <p>
                  <span className="font-semibold">Data Analysis and Structures</span> - 
                  <a href="#" className="text-vibrant-blue hover:underline ml-1 inline-flex items-center">
                    Hicom Royal
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </p>
                <p className="text-vibrant-orange">December, 2024</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg border-l-4 border-vibrant-blue"
              >
                <p>
                  <span className="font-semibold">Frontend Development with React & Next.js</span> - 
                  <a href="https://softlyft.com/" className="text-vibrant-blue hover:underline ml-1 inline-flex items-center">
                    softlyft
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a> technologies
                </p>
                <p className="text-vibrant-orange">May, 2025</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg border-l-4 border-vibrant-teal"
              >
                <p>
                  <span className="font-semibold">Frontend Development intern</span> - 
                  <a href="https://softlyft.com/" className="text-vibrant-blue hover:underline ml-1 inline-flex items-center">
                    HNG
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a> Internship
                </p>
                <p className="text-vibrant-orange">March, 2025</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="mb-6">
            <SectionHeader title="Projects" id="projects" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/30 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold text-vibrant-purple mb-2">Profile Card</p>
                <p className="text-gray-800 dark:text-gray-200">
                  Built a personal profile card with date and time functionality, showcasing my personal details. 
                  Deployed on Vercel with responsive, mobile-first design.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/30 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold text-vibrant-blue mb-2">Login Page</p>
                <p className="text-gray-800 dark:text-gray-200">
                  Implemented a login page using HTML, CSS, and JavaScript, that handles form validation 
                  and authentication with modern adaptive design for different screens.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-700 dark:to-teal-900/30 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold text-vibrant-teal mb-2">Calculator App</p>
                <p className="text-gray-800 dark:text-gray-200">
                  Created a Calculator application using JavaScript, HTML, CSS, and local Storage. Includes 
                  dynamic list rendering, form validation, and interactive UI.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-700 dark:to-pink-900/30 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold text-vibrant-pink mb-2">Weather Dashboard</p>
                <p className="text-gray-800 dark:text-gray-200">
                  Implemented a weather application using HTML, CSS, and JavaScript, fetching data from a 
                  public API and displaying real-time forecasts.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-700 dark:to-pink-900/30 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold text-vibrant-blue mb-2">Virtual Tour app</p>
                <p className="text-gray-800 dark:text-gray-200">
                  Created a virtual travel platform that allows users to explore destinations around the world
                  from the comfort of their home using tailwind css and next.js.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-700 dark:to-pink-900/30 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold text-vibrant-black mb-2">Snacks Dash App</p>
                <p className="text-gray-800 dark:text-gray-200">
                  A modern e-commerce platform for ordering snacks and treats online with seamless shopping 
                  experience and intuitive browsing.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-700 dark:to-pink-900/30 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold text-vibrant-blue mb-2">Modern landing page</p>
                <p className="text-gray-800 dark:text-gray-200">
                  Developed a modern landing page for user engagement using different bootstrap  
                 components like button, card and carousel.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-700 dark:to-pink-900/30 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold text-vibrant-pink mb-2">Conference ticket generator</p>
                <p className="text-gray-800 dark:text-gray-200">
                  Designed and built a ticket code generator to secure accesss, It generates a random unique code. 
                  Implemented a modern UI/UX for accessibility and responsiveness using typescript and Tailwind css.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div>
            <SectionHeader title="Soft Skills" id="soft-skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <p>• Strong Problem-Solving Skills</p>
              <p>• Attention to Detail</p>
              <p>• Team Collaboration</p>
              <p>• Time Management</p>
              <p>• Continuous Learner</p>
              <p>• Data Analysis</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Print Styles - These will only apply when printing */}
      <style>{`
        @media print {
          @page {
            margin: 0.5cm;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            font-size: 12pt;
          }
          .print-hidden {
            display: none !important;
          }
          h1 {
            font-size: 18pt;
            color: black !important;
          }
          h2 {
            font-size: 14pt;
            color: #1e3a8a !important;
          }
          p, li {
            color: black !important;
          }
          a {
            color: #1d4ed8 !important;
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;










