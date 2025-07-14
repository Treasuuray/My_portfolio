
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Github, Linkedin, Moon, Sun, ExternalLink, Download, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    reset();
    // Here you would typically send the data to your backend
  };

  const projects = [
    {
      imageUrl: "Colour quest game.png",
      title: "Colour Quest Game",
      description: "A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include product catalog, shopping cart, and payment integration.",
      tech: ["HTML", "JavaScript", " CSS"],
      liveUrl: "https://quest-game-for-stage1-task.netlify.app/",
      githubUrl: "https://github.com/Treasuuray/quest-game.git"
    },
    {
      imageUrl: "my virtual app image.png",
      title: "Virtual Tour App",
      description: "A virtual travel platform that allows users to explore destinations around the world from the comfort of their home. Our interactive experiences combine high-quality videos, immersive tours, and detailed information about global attractions.",
      tech: ["next.js", "React", "Tailwind css", "TypeScript", "Redux", "Framer Motion"],
      liveUrl: "https://wanderway-virtual-tourapp.netlify.app/",
      githubUrl: "https://github.com/Treasuuray/WanderWay-Virtual-TourApp.git"
    },
    {
      imageUrl: "weater output screenshot.png",
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts, animated weather icons, and responsive design.",
      tech: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      imageUrl: "Portfolio image.png",
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern web development practices with smooth animations and dark mode support.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      imageUrl: "my profile card image.png",
      title: "My profile card",
      description: "A comprehensive social media analytics dashboard with real-time date and time visualization and interactive charts.",
      tech: ["HTML", "Javascript", "CSS"],
      liveUrl: "https://olowoladetreasure-profilecard.netlify.app",
      githubUrl: "https://github.com/Treasuuray/hng-profile-card.git"
    },
    {
      imageUrl: "Snacks Dash.png",
      title: "Snacks Dash App",
      description: "Snack Dash is a modern e-commerce platform for ordering snacks and treats online. The app provides a seamless shopping experience with intuitive browsing, and easy checkout.",
      tech: ["Next.js", "JavaScript", "Bootstrap"],
      liveUrl: "https://snacks-dash.vercel.app/",
      githubUrl: "https://github.com/Treasuuray/Snacks_Dash.git"
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"
  ];

  const certifications = [
    {
      title: "Frontend Developer Professional Certificate",
      issuer: "softlyft Technologies",
      date: "2025",
    },
    {
      title: "Frontend Development Intern",
      issuer: "HNG Internship",
      date: "2025",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialUrl: "#"
    },
    {
      title: "Data analyst certification",
      issuer: "Hicom Royal",
      date: "2024",
      credentialUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            Olowolade Treasure
          </motion.h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            <div className="flex items-center space-x-2">
              <a href="https://github.com/Treasuuray" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/treasure-olowolade" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-t p-4"
          >
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">Contact</button>
              <div className="flex items-center space-x-4 pt-2">
                <a href="#" className="hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3"
            >
              <img
                src="mypicture.jpg"
                alt="Olowolade Treasure"
                className="w-65 h-auto rounded-3xl mx-auto md:mx-0 shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left md:w-2/3"
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r bg-clip-text">
                Olowolade Treasure
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
                I create beautiful, responsive, and user-friendly web applications using modern technologies and best practices.
              </p>
              
              <div className="mb-12">
                <Button 
                  size="lg" 
                  className="mr-4 mb-4 bg-vibrant-purple hover:bg-vibrant-purple/90 transition-all transform hover:scale-105" 
                  asChild
                >
                  <Link to="/resume">
                    <Download className="mr-2 h-4 w-4" />
                    View My Resume
                  </Link>
                </Button>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="flex flex-wrap md:justify-start justify-center gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section with Skills and Tech Stack */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* About Me Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">About Me</h2>
              <div className="mx-auto">
                <p className="text-lg leading-relaxed mb-6">
                  TREASURE, a passionate frontend developer with a strong focus on creating intuitive and engaging user experiences. With expertise in modern JavaScript frameworks and responsive design, I build applications that are both functional and visually appealing.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in web development began with a curiosity about how websites work, which quickly evolved into a passion for creating them. I enjoy the challenge of translating design concepts into functional code and continuously learning new technologies.
                </p>
              </div>
            </motion.div>

            {/* Technical Skills Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">🔧 Technical Skills</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Semantic HTML5 and modern CSS3</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Responsive layouts with Flexbox and Grid</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Interactive UI with JavaScript (ES6+)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Component-based architecture with React</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Server-side rendering & routing with Next.js</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Version control with Git</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Basic knowledge of API integration and state management</span>
                </li>
              </ul>
            </motion.div>

            {/* Tech Stack Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">🔧 Tech Stack / Tools</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Frameworks: React, Next.js</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Styling: Tailwind CSS, Sass, CSS Modules</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Deployment: Vercel, Netlify</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Version Control: Git + GitHub</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-1">•</span>
                  <span>Design: Figma, Adobe XD</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🧠 My Journey
            </h2>
            <p className="text-xl text-primary/80 italic font-medium">
              From Data to the DOM, and Back Again
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <p className="text-lg leading-relaxed mb-4">
              I didn't just wake up one day and say "I want to be a developer."
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My journey into tech actually started with something very different — data analysis.
              I was drawn to numbers, insights, and how raw data could tell real stories. I wanted to become a data analyst, and naturally, I turned to Python. But learning Python wasn't easy. I struggled with the basics. I felt blocked, frustrated, and overwhelmed.
            </p>
            <p className="text-lg leading-relaxed mb-4 font-medium">
              That's when I learned something that changed everything:
            </p>
            <p className="text-xl leading-relaxed mb-6 italic text-primary font-medium text-center">
              Before diving into complex tools, you need to understand how the web works.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              So I shifted my focus to the foundation: HTML, CSS, and JavaScript.
              And unexpectedly, I fell in love with frontend development.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Building interfaces, styling components, and making pages come alive gave me something I didn't know I needed — hope.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Truth is, I was battling more than just bugs in my code.
              I was fighting depression, anxiety, self-doubt, and long days where even opening my laptop felt impossible. There were times I'd cry while trying to learn — feeling like a failure, wondering if I'd ever be enough.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              But every time I wrote a line of code, I felt a tiny spark.
              A reminder that maybe I still had something to give.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I kept showing up — not because I had it all together, but because I believed I could grow, even in pain.
              Frontend development became my creative outlet, and coding became therapy.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Some days I was building components. Other days, I was just surviving.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Today, I'm still analyzing data — creating dashboards, cleaning datasets, drawing insights.
              But I'm also building beautiful, functional UIs with React and Next.js, turning concepts into real web experiences.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I haven't "arrived" — I'm still learning, still growing, and still showing up, even when it's hard.
            </p>
            <p className="text-xl leading-relaxed font-medium text-center mt-8 text-primary">
              Because I've learned that progress isn't always loud.
              <br />
              Sometimes it's just one line of code… one moment of clarity… one decision not to give up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in frontend development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    {project.imageUrl && (
                      <div className="mb-6 overflow-hidden rounded-md">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live Site
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl}>
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Professional certifications that validate my skills and knowledge in web development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-left hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {cert.issuer} • {cert.date}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.credentialUrl}>
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Credential
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register("name", { required: "Name is required" })}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                    )}
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      {...register("message", { required: "Message is required" })}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2025 Frontend Developer Portfolio. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Treasuuray" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/treasure-olowolade" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
