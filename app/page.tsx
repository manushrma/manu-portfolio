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
    <main className="min-h-screen bg-[#09090f] text-white overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center shrink-0">
            <Image
              src="/My-logo.png"
              alt="Manu Sharma Logo"
              width={150}
              height={150}
              priority
              className="w-20 sm:w-32 md:w-36 h-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white transition-all"
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
          <div className="md:hidden bg-[#11111b] border-t border-white/10 px-4 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 py-1"
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
        className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 pt-24 pb-20"
      >
        {/* Animated Background effects */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 blur-[130px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"
        />

        <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex flex-wrap items-center gap-2 border border-purple-500/30 bg-purple-500/10 px-3 sm:px-4 py-2 rounded-full mb-8 max-w-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm text-purple-300">
                Software Engineer | Open to Opportunities
              </span>
            </div>

            <p className="text-gray-400 text-lg mb-4">Hello, I'm</p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Meena
              <br />
              <span className="gradient-text">Sharma.</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-300 mt-7 font-medium">
              Software Engineer & Backend Developer
            </h2>

            <p className="text-gray-400 text-sm sm:text-lg leading-7 sm:leading-8 mt-6 max-w-xl">
              I build scalable web applications and practical digital
              solutions using PHP, Laravel, CodeIgniter and modern web
              technologies. With 4+ years of development experience, I'm now
              expanding my knowledge into Artificial Intelligence and Machine
              Learning.
            </p>

            {/* Buttons with Hover Animation */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-9">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3.5 sm:py-4 rounded-xl font-medium transition-all shadow-lg shadow-purple-600/20"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/meena-sharma-resume.pdf"
                download
                className="flex items-center justify-center gap-2 border border-white/15 hover:border-purple-500 px-6 py-3.5 sm:py-4 rounded-xl font-medium transition-all"
              >
                Download CV
                <Download size={18} />
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-10">
              <span className="text-sm text-gray-500">Find me on</span>
              <motion.a
                whileHover={{ y: -3, color: "#fff" }}
                href="https://github.com/manushrma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition-colors"
              >
                <Code2 size={22} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, color: "#fff" }}
                href="https://www.linkedin.com/in/meena-sharma-manu-94ba16218/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors"
              >
                <span className="font-bold text-lg">in</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -3, color: "#fff" }}
                href="mailto:meenaksharma80@gmail.com"
                aria-label="Email"
                className="text-gray-400 transition-colors"
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right visual (Hidden on small screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/20 blur-2xl" />
              <div className="absolute inset-5 rounded-full border border-purple-500/30" />
              <div className="absolute inset-10 rounded-full border border-blue-500/20" />

              {/* Floating Profile Photo Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl border border-purple-400/30 bg-[#151522] shadow-2xl shadow-purple-900/40 overflow-hidden relative">
                  <Image
                    src="/my-photo.png"
                    alt="Meena Sharma - Software Engineer"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Floating Badges Animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-2 right-5 bg-[#171725] border border-white/10 px-4 py-3 rounded-xl shadow-xl"
              >
                <span className="text-purple-300 text-sm font-medium">
                  PHP / Laravel
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 -left-8 bg-[#171725] border border-white/10 px-4 py-3 rounded-xl shadow-xl"
              >
                <span className="text-blue-300 text-sm font-medium">
                  REST API
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-0 right-0 bg-[#171725] border border-white/10 px-4 py-3 rounded-xl shadow-xl"
              >
                <span className="text-green-300 text-sm font-medium">
                  AI / ML Learner
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-purple-400 transition-colors"
        >
          <ArrowDown className="animate-bounce" />
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-purple-400 tracking-widest text-sm font-medium">
            01 / ABOUT ME
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                Turning Ideas Into
                <span className="gradient-text"> Digital Solutions.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-7 leading-7 sm:leading-8">
                I am a Software Engineer with 4+ years of experience in
                developing web applications, backend systems and REST APIs.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-5 leading-7 sm:leading-8">
                My core expertise includes PHP, Laravel, CodeIgniter, MySQL and
                modern web technologies. I have worked on multiple projects,
                both independently and as part of development teams, focusing on
                building reliable and scalable solutions.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-5 leading-7 sm:leading-8">
                Currently, I am exploring Artificial Intelligence and Machine
                Learning while expanding my frontend skills with React and
                Next.js.
              </p>
            </motion.div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
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
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                  className="bg-[#151522] border border-white/10 rounded-2xl p-4 sm:p-7 transition-all cursor-default"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold gradient-text">{stat.val}</h3>
                  <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-purple-400 tracking-widest text-sm font-medium">
            02 / MY SKILLS
          </p>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Technologies I <span className="gradient-text">Work With.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-5 leading-7 sm:leading-8">
              I work with modern technologies to build scalable web
              applications, backend systems and user-friendly digital
              experiences.
            </p>
          </div>

          {[
            {
              title: "Backend Development",
              icon: Server,
              skills: ["PHP", "Laravel", "CodeIgniter", "REST API", "MVC Architecture"],
            },
            {
              title: "Frontend Development",
              icon: Globe,
              skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "AJAX"],
            },
            {
              title: "Database & Tools",
              icon: Database,
              skills: ["MySQL", "Git", "GitHub", "Postman", "cPanel", "Linux"],
            },
            {
              title: "AI & Emerging Technologies",
              icon: Code2,
              skills: [
                "OpenAI API Integration",
                "Artificial Intelligence",
                "Machine Learning (Learning)",
                "AI-Powered Applications"
              ],
            },

          ]
            .map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#151522] border border-white/10 rounded-2xl p-5 sm:p-7 hover:border-purple-500/50 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-purple-500/10 text-purple-400">
                      <Icon size={20} className="sm:w-[23px] sm:h-[23px]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {category.skills.map((skill) => (
                      <motion.span
                        whileHover={{ scale: 1.1, y: -2 }}
                        key={skill}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-purple-300 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })
            .reduce((rows: React.ReactNode[], item, index) => {
              const rowIndex = Math.floor(index / 2);
              if (!rows[rowIndex]) rows[rowIndex] = [];
              (rows[rowIndex] as React.ReactNode[]).push(item);
              return rows;
            }, [])
            .map((row, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5">
                {row}
              </div>
            ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-purple-400 tracking-widest text-sm font-medium">
            03 / EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mt-6">
            My Professional <span className="gradient-text">Journey.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-5 max-w-2xl leading-7 sm:leading-8">
            Building practical software solutions, solving technical challenges
            and continuously growing as a developer.
          </p>

          <div className="mt-12 relative border-l border-purple-500/30 ml-2 sm:ml-3 pl-4 sm:pl-8">
            <div className="absolute -left-[7px] top-2 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#151522] border border-white/10 rounded-2xl p-5 sm:p-9 hover:border-purple-500/40 transition-all"
            >
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <span className="text-purple-400 text-xs sm:text-sm font-medium">
                    Professional Experience
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-3">
                    PHP / Laravel Developer
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-1 sm:mt-2">
                    TDI Online Services Pvt. Ltd.
                  </p>
                </div>
                <div className="h-fit px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm">
                  4+ Years Experience
                </div>
              </div>

              <div className="mt-6 sm:mt-7 space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base leading-6 sm:leading-7">
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
                ].map((item, index) => (
                  <div key={index} className="flex gap-2 sm:gap-3">
                    <span className="text-purple-400 mt-0.5 sm:mt-1 shrink-0">✦</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
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
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-purple-400 tracking-widest text-sm font-medium">
            04 / MY PROJECTS
          </p>

          <div className="flex flex-wrap justify-between items-end gap-4 sm:gap-6 mt-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold">
                Projects I've <span className="gradient-text">Worked On.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-5 max-w-2xl leading-7 sm:leading-8">
                A collection of software applications, SaaS platforms,
                e-commerce websites and custom web solutions developed through
                real-world projects and client collaborations.
              </p>
            </div>
            <div className="text-gray-400 text-sm hidden sm:block">
              8+ Featured Projects
            </div>
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

                description:
                  "An AI-powered competitive exam preparation platform designed to help students prepare for competitive examinations through intelligent question generation, personalized performance analysis and AI-based doubt resolution.",

                features: [
                  "Admin & Student Panels",
                  "Online Examination & Test Management",
                  "AI-Based Random Question Generation from Syllabus",
                  "AI-Powered Student Performance Analysis",
                  "AI-Based Student Doubt Resolution",
                  "Subject & Topic-Wise Assessments",
                  "Student Progress Tracking & Analytics",
                  "Personalized Learning Insights"
                ],

                tech: [
                  "PHP",
                  "Laravel",
                  "MySQL",
                  "JavaScript",
                  "Tailwind CSS",
                  "OpenAI API"
                ],

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -8 }}
                    className="group flex flex-col bg-[#151522] border border-white/10 rounded-2xl p-5 sm:p-7 hover:border-purple-500/50 transition-all duration-300 cursor-default"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-3xl sm:text-4xl">{project.icon}</span>
                      <span className="text-gray-600 text-sm">{project.number}</span>
                    </div>

                    <p className="text-purple-400 text-[10px] sm:text-xs mt-6 sm:mt-7 tracking-wide uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold mt-2 sm:mt-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-6 sm:leading-7 mt-3 sm:mt-4">
                      {project.description}
                    </p>

                    <div className="mt-5 sm:mt-6">
                      <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Key Features</p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                            <span className="text-purple-400 mt-0.5">✦</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 sm:mt-6">
                      <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Technologies</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 text-gray-400 rounded-md border border-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-6 sm:pt-7">
                      <p className="text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4">{project.contribution}</p>
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"
                      >
                        <span className="text-xs sm:text-sm font-medium">
                          {project.number === "09" ? "View on GitHub" : "Visit Live Project"}
                        </span>
                        <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-purple-400 tracking-widest text-sm font-medium">
            05 / CONTACT
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-6xl font-bold leading-tight">
                Let's Build
                <br />
                Something <span className="gradient-text">Great.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-6 sm:mt-7 leading-7 sm:leading-8 max-w-lg">
                I'm open to exciting opportunities, collaborations and
                challenging projects. If you are looking for a dedicated
                software engineer, let's connect!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:meenaksharma80@gmail.com"
                className="inline-flex items-center gap-3 mt-8 sm:mt-9 bg-purple-600 hover:bg-purple-700 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-medium transition-all shadow-lg shadow-purple-600/20"
              >
                <Mail size={18} className="sm:w-[19px] sm:h-[19px]" />
                <span className="text-sm sm:text-base">Let's Talk</span>
                <ArrowUpRight size={18} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-5"
            >
              <motion.a whileHover={{ scale: 1.02 }} href="mailto:meenaksharma80@gmail.com" className="flex items-center gap-4 sm:gap-5 bg-[#151522] border border-white/10 p-4 sm:p-6 rounded-2xl hover:border-purple-500/50 transition-all">
                <div className="p-3 sm:p-4 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <Mail size={20} className="sm:w-[24px] sm:h-[24px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs sm:text-sm">Email Me</p>
                  <p className="text-white mt-0.5 sm:mt-1 text-sm sm:text-base truncate">meenaksharma80@gmail.com</p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500 shrink-0" size={18} />
              </motion.a>

              <motion.a whileHover={{ scale: 1.02 }} href="https://www.linkedin.com/in/meena-sharma-manu-94ba16218/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 sm:gap-5 bg-[#151522] border border-white/10 p-4 sm:p-6 rounded-2xl hover:border-purple-500/50 transition-all">
                <div className="p-3 sm:p-4 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <span className="font-bold text-xl sm:text-2xl">in</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">LinkedIn</p>
                  <p className="text-white mt-0.5 sm:mt-1 text-sm sm:text-base">Connect with me</p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500 shrink-0" size={18} />
              </motion.a>

              <motion.a whileHover={{ scale: 1.02 }} href="https://github.com/manushrma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 sm:gap-5 bg-[#151522] border border-white/10 p-4 sm:p-6 rounded-2xl hover:border-purple-500/50 transition-all">
                <div className="p-3 sm:p-4 rounded-xl bg-white/10 text-white shrink-0">
                  <Code2 size={20} className="sm:w-[24px] sm:h-[24px]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">GitHub</p>
                  <p className="text-white mt-0.5 sm:mt-1 text-sm sm:text-base">Explore my code</p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500 shrink-0" size={18} />
              </motion.a>

              <div className="flex items-center gap-4 sm:gap-5 bg-[#151522] border border-white/10 p-4 sm:p-6 rounded-2xl">
                <div className="p-3 sm:p-4 rounded-xl bg-green-500/10 text-green-400 shrink-0">
                  <MapPin size={20} className="sm:w-[24px] sm:h-[24px]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Location</p>
                  <p className="text-white mt-0.5 sm:mt-1 text-sm sm:text-base">India | Open to Opportunities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Meena Sharma. All rights reserved.
          </p>
          <a href="#home" className="text-gray-400 hover:text-purple-400 text-xs sm:text-sm flex items-center gap-2 transition-colors">
            Back to Top <ArrowUpRight size={14} className="sm:w-[16px] sm:h-[16px]" />
          </a>
        </div>
      </footer>
    </main>
  );
}