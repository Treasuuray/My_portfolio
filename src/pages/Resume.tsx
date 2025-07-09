import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Printer, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  const [isPrinting, setIsPrinting] = useState(false);
  
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
    // This would typically generate a PDF
    // For now, we'll just trigger the print dialog which can save as PDF
    handlePrint();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with actions - hidden when printing */}
      <div className={`sticky top-0 bg-background z-10 border-b p-4 ${isPrinting ? 'hidden' : ''}`}>
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
          <div className="flex gap-2">
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto max-w-4xl p-8 print:p-0 print:max-w-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-8 print:shadow-none print:p-0"
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center mb-4">Frontend Development CV</h1>
            <div className="text-center mb-4">
              <p className="font-semibold uppercase">OLOWOLADE TREASURE SIMILOLUWA</p>
              <p>NO 13b, GAUN, MAGBORO, OGUN STATE NIGERIA</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm">
              <div className="flex items-center">
                <span className="text-red-500">📱</span>
                <span className="ml-1">07039467165</span>
              </div>
              <div className="hidden sm:block">|</div>
              <div className="flex items-center">
                <span className="text-red-500">📧</span>
                <a href="mailto:treasureolowolad@gmail.com" className="ml-1 text-blue-600 hover:underline">treasureolowolad@gmail.com</a>
              </div>
              <div className="hidden sm:block">|</div>
              <div className="flex items-center">
                <span>GitHub:</span>
                <a href="https://github.com/Treasuuray" className="ml-1 text-blue-600 hover:underline">Treasuuray</a>
              </div>
              <div className="hidden sm:block">|</div>
              <div className="flex items-center">
                <span>LinkedIn:</span>
                <a href="https://www.linkedin.com/in/treasure-olowolade" className="ml-1 text-blue-600 hover:underline">treasure-olowolade</a>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-800 border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
            <p className="text-sm">
              Creative and detail-oriented Frontend Developer with a HTML, CSS, and Next.js. Adept at 
              building responsive, user-friendly web interfaces and working in fast-paced, collaborative 
              environments. Passionate about clean code, performance optimization, and seamless user 
              experiences.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-800 border-b border-gray-300 pb-1 mb-3">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Languages:</span> JavaScript (ES6+), HTML5, CSS3</p>
                <p><span className="font-semibold">Frameworks & Libraries:</span> React, Next.js, Tailwind CSS</p>
                <p><span className="font-semibold">Tools & Platforms:</span> Git, GitHub, Visual Studio Code, Figma</p>
              </div>
              <div>
                <p><span className="font-semibold">Other:</span> Responsive Design, REST APIs, SEO Best Practices, Web Performance Optimization</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-800 border-b border-gray-300 pb-1 mb-3">Education</h2>
            <div className="text-sm">
              <p><span className="font-semibold">Ekiti State University</span> - Ado Ekiti, Nigeria</p>
              <p>B.Sc Biochemistry</p>
              <p>Completed</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-800 border-b border-gray-300 pb-1 mb-3">Certifications</h2>
            <div className="text-sm">
              <p>
                <span className="font-semibold">JavaScript Algorithms and Data Structures</span> - 
                <a href="#" className="text-blue-600 hover:underline ml-1">freeCodeCamp</a>
              </p>
              <p>January, 2025</p>
              <div className="mt-2"></div>
              <p>
                <span className="font-semibold">Frontend Development with React & Next.js</span> - 
                <a href="#" className="text-blue-600 hover:underline ml-1">softlyft</a> technologies
              </p>
              <p>May, 2025</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-800 border-b border-gray-300 pb-1 mb-3">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold">Profile Card Portfolio</p>
                <p>
                  Built a personal profile card portfolio with data functionality, showcasing projects and 
                  contact functionality. Deployed on Vercel with responsive, mobile-first design.
                </p>
              </div>
              <div>
                <p className="font-semibold">Calculator App</p>
                <p>
                  Created a Calculator application using JavaScript, HTML, CSS, and local Storage. Includes 
                  dynamic list rendering, form validation, and interactive UI.
                </p>
              </div>
              <div>
                <p className="font-semibold">Weather Dashboard</p>
                <p>
                  Implemented a weather application using HTML, CSS, and JavaScript, fetching data from a 
                  public API and displaying real-time forecasts.
                </p>
              </div>
              <div>
                <p className="font-semibold">Snacks Dash App</p>
                <p>
                  A modern e-commerce platform for ordering snacks and treats online with seamless shopping 
                  experience and intuitive browsing.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-800 border-b border-gray-300 pb-1 mb-3">Soft Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <p>• Strong Problem-Solving Skills</p>
              <p>• Attention to Detail</p>
              <p>• Team Collaboration</p>
              <p>• Time Management</p>
              <p>• Continuous Learner</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Print Styles - These will only apply when printing */}
      <style>{`
        @media print {
          @page {
            margin: 0.5cm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;


