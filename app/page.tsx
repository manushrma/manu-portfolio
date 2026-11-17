"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowDown,
  Download,
  ArrowUpRight,
  Code2,
  Menu,
  X,
  Database,
  Globe,
  Server,
  MapPin,
} from "lucide-react";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center shrink-0">
            <Image
              src="/My-logo.png"
              alt="Meena Sharma Logo"
              width={150}
              height={150}
              priority
              className="w-20 sm:w-28 md:w-32 h-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all font-medium"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/10 px-4 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 py-1 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 pt-24 pb-12"
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
        {/* Neon Glow behind Image */}
        <div className="absolute top-1/2 right-0 md:right-1/4 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm text-cyan-300 font-medium tracking-wide">
                Software Engineer | Open to Opportunities
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Meena Sharma.
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl text-gray-300 mt-6 font-medium border-l-4 border-cyan-500 pl-4">
              Software Engineer & Backend Developer
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-6 max-w-lg">
              I build scalable web applications and practical digital
              solutions using PHP, Laravel, and modern web technologies. 
              With 4+ years of experience, I'm now integrating AI into real-world applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3.5 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/meena-sharma-resume.pdf"
                download
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-cyan-400 text-white px-6 py-3.5 rounded-lg font-medium transition-all bg-white/5 hover:bg-white/10"
              >
                Download CV
                <Download size={18} />
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-10">
              <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Connect</span>
              <div className="w-8 h-[1px] bg-gray-700"></div>
              <motion.a whileHover={{ y: -3, color: "#22d3ee" }} href="https://github.com/manushrma" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors">
                <Code2 size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3, color: "#22d3ee" }} href="https://www.linkedin.com/in/meena-sharma-manu-94ba16218/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors">
                <span className="font-bold text-lg">in</span>
              </motion.a>
              <motion.a whileHover={{ y: -3, color: "#22d3ee" }} href="mailto:meenaksharma80@gmail.com" className="text-gray-400 transition-colors">
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right visual (Visible on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center relative z-10 mt-10 lg:mt-0"
          >
            <div className="relative w-64 h-72 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[480px]">
              {/* Offset Border Design */}
              <div className="absolute inset-0 border-2 border-cyan-500 rounded-2xl translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 border-2 border-indigo-500 rounded-2xl -translate-x-2 -translate-y-2"></div>
              
              {/* Main Image Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10 bg-[#111]">
                <Image
                  src="/my-photo.png"
                  alt="Meena Sharma"
                  fill
                  priority
                  className="object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Tech Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 sm:-right-6 bg-[#151515] border border-cyan-500/30 px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-xl z-20 backdrop-blur-md"
              >
                <span className="text-cyan-300 text-xs sm:text-sm font-semibold">PHP / Laravel</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-2 sm:-left-6 bg-[#151515] border border-indigo-500/30 px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-xl z-20 backdrop-blur-md"
              >
                <span className="text-indigo-300 text-xs sm:text-sm font-semibold">OpenAI API</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition-colors hidden sm:block"
        >
          <ArrowDown className="animate-bounce" size={24} />
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-4 sm:px-6 border-t border-white/5 relative bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">01. About Me</h2>
            <div className="h-[1px] bg-cyan-500/30 flex-1 max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                Turning complex problems into <span className="text-cyan-400">elegant solutions.</span>
              </h3>
              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Software Engineer with 4+ years of experience in developing web applications, backend systems and REST APIs.
                </p>
                <p>
                  My core expertise includes PHP, Laravel, CodeIgniter, MySQL and modern web technologies. I have worked on multiple projects, both independently and as part of development teams, focusing on building reliable and scalable solutions.
                </p>
                <p>
                  Currently, I am exploring Artificial Intelligence and Machine Learning while expanding my frontend skills with React and Next.js.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "4+", label: "Years of Experience" },
                { val: "10+", label: "Web Applications" },
                { val: "API", label: "Backend Development" },
                { val: "AI/ML", label: "Currently Learning" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#151515] border border-white/5 rounded-xl p-6 hover:border-cyan-500/30 transition-colors"
                >
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.val}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-4 sm:px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">02. My Skills</h2>
            <div className="h-[1px] bg-cyan-500/30 flex-1 max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Backend Development", icon: Server, skills: ["PHP", "Laravel", "CodeIgniter", "REST API", "MVC Architecture"] },
              { title: "Frontend Development", icon: Globe, skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "AJAX"] },
              { title: "Database & Tools", icon: Database, skills: ["MySQL", "Git", "GitHub", "Postman", "cPanel", "Linux"] },
              { title: "AI & Emerging Tech", icon: Code2, skills: ["OpenAI API Integration", "Artificial Intelligence", "Machine Learning (Learning)"] },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#111] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-md bg-white/5 text-gray-300 text-sm border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 px-4 sm:px-6 border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">03. Experience</h2>
            <div className="h-[1px] bg-cyan-500/30 flex-1 max-w-xs"></div>
          </div>

          <div className="relative border-l border-white/10 ml-3 pl-8 sm:pl-10">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0d0d0d]" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">PHP / Laravel Developer</h3>
                  <p className="text-cyan-400 font-medium mt-1">TDI Online Services Pvt. Ltd.</p>
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium w-fit">
                  4+ Years Experience
                </span>
              </div>

              <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                {[
                  "Developed and maintained multiple e-commerce and informative websites using PHP, Laravel and CodeIgniter.",
                  "Built and integrated REST APIs for multiple web and mobile applications.",
                  "Worked on CRM and HRM software with multi-vendor architecture and separate databases.",
                  "Implemented dynamic features, database management and business-specific workflows.",
                  "Integrated OpenAI API into an examination platform to generate syllabus-based questions, analyze student test performance and provide AI-powered doubt resolution.",
                  "Developed AI-driven features to enhance personalized learning experiences and improve student engagement.",
                  "Integrated biometric attendance devices including ESSL and Biomax.",
                  "Collaborated with development teams and independently handled assigned projects.",
                  "Worked on ongoing client requirements, debugging, optimization and application maintenance.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1 text-xs shrink-0">▶</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {["PHP", "Laravel", "CodeIgniter", "MySQL", "REST API", "JavaScript"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 sm:px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">04. Projects</h2>
            <div className="h-[1px] bg-cyan-500/30 flex-1 max-w-xs"></div>
          </div>

          {(() => {
            const projects = [
              {
                number: "01",
                title: "TDI CRM & HRM Software",
                category: "Multi-Tenant SaaS Application",
                description: "A multi-tenant business management platform designed to manage leads, customers, employees, attendance and telecalling operations. Each client gets a dedicated environment with domain-based access.",
                features: ["Multi-Tenant Architecture", "Lead & Customer Management", "Employee Attendance Management", "Telecalling Management", "Client Landing Page Websites", "Client Domain Whitelisting", "Biometric Machine Integration"],
                tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "AJAX"],
                link: "https://tdicrmsoftware.com/",
                contribution: "Software Development",
                icon: "💼",
              },
              {
                number: "02",
                title: "TDI Institute Software",
                category: "Institute Management System",
                description: "A multi-tenant institute management solution that helps educational institutes manage students, attendance, fee records and daily academic operations.",
                features: ["Multi-Tenant Architecture", "Student Management", "Student Attendance", "Fee Management", "Institute Landing Page Websites", "Client Domain Whitelisting", "Biometric Machine Integration"],
                tech: ["PHP", "Laravel", "MySQL", "JavaScript", "AJAX"],
                link: "https://tdiinstitutesoftware.com/",
                contribution: "Software Development",
                icon: "🎓",
              },
              {
                number: "03",
                title: "Lifestar Learning",
                category: "Education & Learning Platform",
                description: "An educational platform for India's leading foundation for Merchant Navy, Hotel Management and Government Job Preparation, featuring a website, student login and enquiry management system.",
                features: ["Informative Website", "Student Login Portal", "Enquiry Management", "Admin Panel", "Dynamic Content Management"],
                tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
                link: "https://lifestarlearning.in/",
                contribution: "Website & Software Development",
                icon: "📚",
              },
              {
                number: "04",
                title: "Send My Feelings",
                category: "E-Commerce Website",
                description: "An e-commerce platform developed to provide customers with an online shopping experience, supported by dynamic backend functionality and database management.",
                features: ["E-Commerce Website", "Product Management", "Dynamic Backend", "Database Integration", "Admin Functionality"],
                tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
                link: "https://sendmyfeelings.com/",
                contribution: "Website Development",
                icon: "🛍️",
              },
              {
                number: "05",
                title: "ScoreLab",
                category: "AI-Powered Competitive Exam Platform",
                description: "An AI-powered competitive exam preparation platform designed to help students prepare for competitive examinations through intelligent question generation, personalized performance analysis and AI-based doubt resolution.",
                features: ["Admin & Student Panels", "Online Examination & Test Management", "AI-Based Random Question Generation from Syllabus", "AI-Powered Student Performance Analysis", "AI-Based Student Doubt Resolution", "Subject & Topic-Wise Assessments", "Student Progress Tracking & Analytics", "Personalized Learning Insights"],
                tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "OpenAI API"],
                link: "https://scorelab.co.in/",
                contribution: "Backend Development & AI Integration",
                icon: "🤖",
              },
              {
                number: "06",
                title: "TDI Visitor Software",
                category: "Multi-Tenant Visitor Management",
                description: "A multi-tenant visitor management solution with client-specific environments, domain whitelisting and customizable landing page websites.",
                features: ["Multi-Tenant Architecture", "Visitor Management", "Client Landing Page Websites", "Client Domain Whitelisting", "Centralized Management"],
                tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
                link: "https://tdivisitorsoftware.com/",
                contribution: "Software Development",
                icon: "🏢",
              },
              {
                number: "07",
                title: "Laxita Planters",
                category: "E-Commerce Website",
                description: "Worked on the deployment of an e-commerce website and implemented additional modifications based on client requirements.",
                features: ["Website Deployment", "Client Requirement Changes", "Website Customization", "Production Updates"],
                tech: ["PHP", "E-Commerce", "Website Deployment"],
                link: "https://laxitaplanters.com/",
                contribution: "Deployment & Client-Specific Changes",
                icon: "🌱",
              },
              {
                number: "08",
                title: "Clean & Green India",
                category: "Admin Panel & Mobile App API",
                description: "Developed backend functionality including an admin panel and APIs to support the Clean & Green India mobile application.",
                features: ["Admin Panel Development", "REST API Development", "Mobile Application Integration", "Backend Data Management"],
                tech: ["Core PHP", "MySQL", "REST API"],
                link: "https://cleanandgreenindia.com/",
                contribution: "Admin Panel & API Development",
                icon: "🌿",
              },
              {
                number: "09",
                title: "Other Web Development Projects",
                category: "Informative Websites & Custom Panels",
                description: "Apart from these featured projects, I have also developed multiple informative websites, custom admin panels and backend management systems based on different client requirements.",
                features: ["Dynamic Content Management", "Database Integration", "REST API Development", "Ongoing Application Maintenance"],
                tech: ["PHP", "Laravel", "CodeIgniter", "MySQL", "JavaScript", "AJAX", "REST API"],
                link: "https://github.com/manushrma",
                contribution: "Various Client Requirements",
                icon: "🌐",
              }
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group flex flex-col bg-[#111] border border-white/5 rounded-xl p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-white/5 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                        <span className="text-2xl">{project.icon}</span>
                      </div>
                      <span className="text-gray-600 font-mono text-sm">/{project.number}</span>
                    </div>

                    <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-300 mb-2">Key Features</p>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-gray-400 text-xs">
                            <span className="text-cyan-500 mt-0.5">▶</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-[10px] sm:text-xs px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <p className="text-[10px] text-gray-500 mb-3">{project.contribution}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all text-sm font-semibold"
                      >
                        <span>{project.number === "09" ? "View on GitHub" : "Visit Live Project"}</span>
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 sm:px-6 border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">05. Contact</h2>
            <div className="h-[1px] bg-cyan-500/30 flex-1 max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-5xl font-bold leading-tight">
                Let's Build
                <br />
                Something <span className="text-cyan-400">Great.</span>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-6 sm:mt-7 leading-relaxed max-w-lg">
                I'm open to exciting opportunities, collaborations and
                challenging projects. If you are looking for a dedicated
                software engineer, let's connect!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:meenaksharma80@gmail.com"
                className="inline-flex items-center gap-3 mt-8 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3.5 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Mail size={18} />
                <span>Let's Talk</span>
                <ArrowUpRight size={18} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.a whileHover={{ scale: 1.02 }} href="mailto:meenaksharma80@gmail.com" className="flex items-center gap-4 bg-[#151515] border border-white/5 p-5 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs">Email Me</p>
                  <p className="text-white mt-1 text-sm sm:text-base truncate">meenaksharma80@gmail.com</p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500 shrink-0" size={18} />
              </motion.a>

              <motion.a whileHover={{ scale: 1.02 }} href="https://www.linkedin.com/in/meena-sharma-manu-94ba16218/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#151515] border border-white/5 p-5 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <span className="font-bold text-xl">in</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">LinkedIn</p>
                  <p className="text-white mt-1 text-sm sm:text-base">Connect with me</p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500 shrink-0" size={18} />
              </motion.a>

              <motion.a whileHover={{ scale: 1.02 }} href="https://github.com/manushrma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#151515] border border-white/5 p-5 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="p-3 rounded-lg bg-white/10 text-white shrink-0">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">GitHub</p>
                  <p className="text-white mt-1 text-sm sm:text-base">Explore my code</p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500 shrink-0" size={18} />
              </motion.a>

              <div className="flex items-center gap-4 bg-[#151515] border border-white/5 p-5 rounded-xl">
                <div className="p-3 rounded-lg bg-green-500/10 text-green-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Location</p>
                  <p className="text-white mt-1 text-sm sm:text-base">India | Open to Opportunities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-6 px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {currentYear} Meena Sharma. Built with Next.js & Tailwind.
        </p>
      </footer>
    </main>
  );
}