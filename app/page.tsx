
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
    <main className="min-h-screen bg-[#09090f] text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#09090f]/85 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/My-logo.png"
              alt="Meena Sharma Logo"
              width={150}
              height={150}
              priority
              className="object-contain"
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
            className="md:hidden text-white"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-[#11111b] border-t border-white/10 px-6 py-5 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400"
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
        className="relative min-h-screen flex items-center overflow-hidden px-6 pt-28"
      >

        {/* Background effects */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-300">
                Software Engineer | Open to Opportunities
              </span>
            </div>

            <p className="text-gray-400 text-lg mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Meena
              <br />
              <span className="gradient-text">
                Sharma.
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-300 mt-7 font-medium">
              Software Engineer & Backend Developer
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-8 mt-6 max-w-xl">
              I build scalable web applications and practical
              digital solutions using PHP, Laravel, CodeIgniter
              and modern web technologies.

              With 4+ years of development experience, I'm
              now expanding my knowledge into Artificial
              Intelligence and Machine Learning.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              <a
                href="#projects"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-7 py-4 rounded-xl font-medium transition-all shadow-lg shadow-purple-600/20"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/meena-sharma-resume.pdf"
                download
                className="flex items-center gap-2 border border-white/15 hover:border-purple-500 px-7 py-4 rounded-xl font-medium transition-all"
              >
                Download CV
                <Download size={18} />
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-10">

              <span className="text-sm text-gray-500">
                Find me on
              </span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Code2 size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="font-bold text-lg">in</span>
              </a>

              <a
                href="mailto:meenaksharma80@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={22} />
              </a>

            </div>

          </motion.div>

          {/* Right visual */}
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

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl border border-purple-400/30 bg-[#151522] shadow-2xl shadow-purple-900/40 flex items-center justify-center p-8">

                  <Image
                    src="/My-logo.png"
                    alt="Meena Sharma - Software Engineer"
                    width={300}
                    height={300}
                    priority
                    className="w-full h-full object-contain"
                  />

                </div>

              </div>

              <div className="absolute -top-2 right-5 bg-[#171725] border border-white/10 px-4 py-3 rounded-xl shadow-xl">
                <span className="text-purple-300 text-sm font-medium">
                  PHP / Laravel
                </span>
              </div>

              <div className="absolute bottom-8 -left-8 bg-[#171725] border border-white/10 px-4 py-3 rounded-xl shadow-xl">
                <span className="text-blue-300 text-sm font-medium">
                  REST API
                </span>
              </div>

              <div className="absolute bottom-0 right-0 bg-[#171725] border border-white/10 px-4 py-3 rounded-xl shadow-xl">
                <span className="text-green-300 text-sm font-medium">
                  AI / ML Learner
                </span>
              </div>

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
        className="py-24 px-6 border-t border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          <p className="text-purple-400 tracking-widest text-sm font-medium">
            01 / ABOUT ME
          </p>

          <div className="grid md:grid-cols-2 gap-16 mt-6 items-start">

            {/* Left Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Turning Ideas Into
                <span className="gradient-text"> Digital Solutions.</span>
              </h2>

              <p className="text-gray-400 mt-7 leading-8">
                I am a Software Engineer with 4+ years of experience
                in developing web applications, backend systems and
                REST APIs.
              </p>

              <p className="text-gray-400 mt-5 leading-8">
                My core expertise includes PHP, Laravel, CodeIgniter,
                MySQL and modern web technologies. I have worked on
                multiple projects, both independently and as part of
                development teams, focusing on building reliable and
                scalable solutions.
              </p>

              <p className="text-gray-400 mt-5 leading-8">
                Currently, I am exploring Artificial Intelligence
                and Machine Learning while expanding my frontend
                skills with React and Next.js.
              </p>
            </div>

            {/* Right Content */}
            <div className="grid grid-cols-2 gap-5">

              <div className="bg-[#151522] border border-white/10 rounded-2xl p-7 hover:border-purple-500/50 transition-all">
                <h3 className="text-4xl font-bold gradient-text">4+</h3>
                <p className="text-gray-400 mt-3 text-sm">
                  Years of Experience
                </p>
              </div>

              <div className="bg-[#151522] border border-white/10 rounded-2xl p-7 hover:border-purple-500/50 transition-all">
                <h3 className="text-4xl font-bold gradient-text">10+</h3>
                <p className="text-gray-400 mt-3 text-sm">
                  Web Applications
                </p>
              </div>

              <div className="bg-[#151522] border border-white/10 rounded-2xl p-7 hover:border-purple-500/50 transition-all">
                <h3 className="text-4xl font-bold gradient-text">API</h3>
                <p className="text-gray-400 mt-3 text-sm">
                  Backend Development
                </p>
              </div>

              <div className="bg-[#151522] border border-white/10 rounded-2xl p-7 hover:border-purple-500/50 transition-all">
                <h3 className="text-4xl font-bold gradient-text">AI/ML</h3>
                <p className="text-gray-400 mt-3 text-sm">
                  Currently Learning
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      
      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="py-24 px-6 border-t border-white/10 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <p className="text-purple-400 tracking-widest text-sm font-medium">
            02 / MY SKILLS
          </p>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Technologies I <span className="gradient-text">Work With.</span>
            </h2>
            <p className="text-gray-400 mt-5 leading-8">
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
              title: "Currently Exploring",
              icon: Code2,
              skills: ["Artificial Intelligence", "Machine Learning"],
            },
          ].map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#151522] border border-white/10 rounded-2xl p-7 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-purple-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          }).reduce((rows: React.ReactNode[], item, index) => {
            const rowIndex = Math.floor(index / 2);
            if (!rows[rowIndex]) rows[rowIndex] = [];
            (rows[rowIndex] as React.ReactNode[]).push(item);
            return rows;
          }, []).map((row, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-5 mt-5">
              {row}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="py-24 px-6 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-purple-400 tracking-widest text-sm font-medium">
            03 / EXPERIENCE
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-6">
            My Professional <span className="gradient-text">Journey.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl leading-8">
            Building practical software solutions, solving technical
            challenges and continuously growing as a developer.
          </p>

          <div className="mt-12 relative border-l border-purple-500/30 ml-3 pl-8">
            <div className="absolute -left-[7px] top-2 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />

            <div className="bg-[#151522] border border-white/10 rounded-2xl p-7 sm:p-9 hover:border-purple-500/40 transition-all">
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <span className="text-purple-400 text-sm font-medium">
                    Professional Experience
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    PHP / Laravel Developer
                  </h3>

                  <p className="text-gray-300 mt-2">
                    TDI Online Services Pvt. Ltd.
                  </p>
                </div>

                <div className="h-fit px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">
                  4+ Years Experience
                </div>
              </div>

              <div className="mt-7 space-y-4 text-gray-400 leading-7">
                {[
                  "Developed and maintained multiple e-commerce and informative websites using PHP, Laravel and CodeIgniter.",
                  "Built and integrated REST APIs for multiple web and mobile applications.",
                  "Worked on CRM and HRM software with multi-vendor architecture and separate databases.",
                  "Implemented dynamic features, database management and business-specific workflows.",
                  "Integrated biometric attendance devices including ESSL and Biomax.",
                  "Collaborated with development teams and independently handled assigned projects.",
                  "Worked on ongoing client requirements, debugging, optimization and application maintenance.",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-purple-400 mt-1">✦</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {["PHP", "Laravel", "CodeIgniter", "MySQL", "REST API", "JavaScript"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

     
{/* PROJECTS SECTION */}
<section
  id="projects"
  className="py-24 px-6 border-t border-white/10 relative overflow-hidden"
>
  <div className="absolute top-20 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto relative">

    <p className="text-purple-400 tracking-widest text-sm font-medium">
      04 / MY PROJECTS
    </p>

    <div className="flex flex-wrap justify-between items-end gap-6 mt-6">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold">
          Projects I've <span className="gradient-text">Worked On.</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl leading-8">
          A collection of software applications, SaaS platforms,
          e-commerce websites and custom web solutions developed
          through real-world projects and client collaborations.
        </p>
      </div>

      <div className="text-gray-400 text-sm">
        8+ Featured Projects
      </div>
    </div>

    {(() => {
      const projects = [
        {
          number: "01",
          title: "TDI CRM & HRM Software",
          category: "Multi-Tenant SaaS Application",
          description:
            "A multi-tenant business management platform designed to manage leads, customers, employees, attendance and telecalling operations. Each client gets a dedicated environment with domain-based access.",
          features: [
            "Multi-Tenant Architecture",
            "Lead & Customer Management",
            "Employee Attendance Management",
            "Telecalling Management",
            "Client Landing Page Websites",
            "Client Domain Whitelisting",
            "Biometric Machine Integration",
          ],
          tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "AJAX"],
          link: "https://tdicrmsoftware.com/",
          contribution: "Software Development",
          icon: "💼",
        },
        {
          number: "02",
          title: "TDI Institute Software",
          category: "Institute Management System",
          description:
            "A multi-tenant institute management solution that helps educational institutes manage students, attendance, fee records and daily academic operations.",
          features: [
            "Multi-Tenant Architecture",
            "Student Management",
            "Student Attendance",
            "Fee Management",
            "Institute Landing Page Websites",
            "Client Domain Whitelisting",
            "Biometric Machine Integration",
          ],
          tech: ["PHP", "Laravel", "MySQL", "JavaScript", "AJAX"],
          link: "https://tdiinstitutesoftware.com/",
          contribution: "Software Development",
          icon: "🎓",
        },
        {
          number: "03",
          title: "Lifestar Learning",
          category: "Education & Learning Platform",
          description:
            "An educational platform for India's leading foundation for Merchant Navy, Hotel Management and Government Job Preparation, featuring a website, student login and enquiry management system.",
          features: [
            "Informative Website",
            "Student Login Portal",
            "Enquiry Management",
            "Admin Panel",
            "Dynamic Content Management",
          ],
          tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
          link: "https://lifestarlearning.in/",
          contribution: "Website & Software Development",
          icon: "📚",
        },
        {
          number: "04",
          title: "Send My Feelings",
          category: "E-Commerce Website",
          description:
            "An e-commerce platform developed to provide customers with an online shopping experience, supported by dynamic backend functionality and database management.",
          features: [
            "E-Commerce Website",
            "Product Management",
            "Dynamic Backend",
            "Database Integration",
            "Admin Functionality",
          ],
          tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
          link: "https://sendmyfeelings.com/",
          contribution: "Website Development",
          icon: "🛍️",
        },
        {
          number: "05",
          title: "ScoreLab",
          category: "Online Examination Platform",
          description:
            "A competitive exam preparation platform with separate admin and student panels, designed for online tests, question management and student performance tracking.",
          features: [
            "Admin & Student Panels",
            "Online Examination System",
            "Question & Test Management",
            "Subject-Wise Assessments",
            "Student Dashboard",
            "Performance Tracking",
          ],
          tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
          link: "https://scorelab.co.in/",
          contribution: "Software Development",
          icon: "📝",
        },
        {
          number: "06",
          title: "TDI Visitor Software",
          category: "Multi-Tenant Visitor Management",
          description:
            "A multi-tenant visitor management solution with client-specific environments, domain whitelisting and customizable landing page websites.",
          features: [
            "Multi-Tenant Architecture",
            "Visitor Management",
            "Client Landing Page Websites",
            "Client Domain Whitelisting",
            "Centralized Management",
          ],
          tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
          link: "https://tdivisitorsoftware.com/",
          contribution: "Software Development",
          icon: "🏢",
        },
        {
          number: "07",
          title: "Laxita Planters",
          category: "E-Commerce Website",
          description:
            "Worked on the deployment of an e-commerce website and implemented additional modifications based on client requirements.",
          features: [
            "Website Deployment",
            "Client Requirement Changes",
            "Website Customization",
            "Production Updates",
          ],
          tech: ["PHP", "E-Commerce", "Website Deployment"],
          link: "https://laxitaplanters.com/",
          contribution: "Deployment & Client-Specific Changes",
          icon: "🌱",
        },
        {
          number: "08",
          title: "Clean & Green India",
          category: "Admin Panel & Mobile App API",
          description:
            "Developed backend functionality including an admin panel and APIs to support the Clean & Green India mobile application.",
          features: [
            "Admin Panel Development",
            "REST API Development",
            "Mobile Application Integration",
            "Backend Data Management",
          ],
          tech: ["Core PHP", "MySQL", "REST API"],
          link: "https://cleanandgreenindia.com/",
          contribution: "Admin Panel & API Development",
          icon: "🌿",
        },
     
        {
          number: "09",
          title: "Other Web Development Projects",
          category: "Informative Websites & Custom Panels",
          description:
            "Apart from these featured projects, I have also developed multiple informative websites, custom admin panels and backend management systems based on different client requirements.",
          features: [
            "Dynamic Content Management",
            "Database Integration",
            "REST API Development",
            "Ongoing Application Maintenance",
          ],
          tech: ["PHP", "Laravel", "CodeIgniter", "MySQL", "JavaScript", "AJAX", "REST API"],
          link: "https://github.com/manushrma", // Ya jo bhi link aap dena chahein
          contribution: "Various Client Requirements",
          icon: "🌐",
        }
      ];

      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex flex-col bg-[#151522] border border-white/10 rounded-2xl p-7 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <span className="text-4xl">{project.icon}</span>
                <span className="text-gray-600 text-sm">
                  {project.number}
                </span>
              </div>

              <p className="text-purple-400 text-xs mt-7 tracking-wide uppercase">
                {project.category}
              </p>

              <h3 className="text-xl font-bold mt-3 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7 mt-4">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-300 mb-3">
                  Key Features
                </p>

                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-purple-400 mt-0.5">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-300 mb-3">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-white/5 text-gray-400 rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-7">
                <p className="text-xs text-gray-500 mb-4">
                  {project.contribution}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-5 py-3 rounded-xl border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"
                >
                  <span className="text-sm font-medium">
                    Visit Live Project
                  </span>
                  <ArrowUpRight size={18} />
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
      <section
        id="contact"
        className="py-24 px-6 border-t border-white/10 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <p className="text-purple-400 tracking-widest text-sm font-medium">
            05 / CONTACT
          </p>

          <div className="grid md:grid-cols-2 gap-16 mt-8">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
                Let's Build
                <br />
                Something <span className="gradient-text">Great.</span>
              </h2>

              <p className="text-gray-400 mt-7 leading-8 max-w-lg">
                I'm open to exciting opportunities, collaborations
                and challenging projects. If you are looking for
                a dedicated software engineer, let's connect!
              </p>

              <a
                href="mailto:meenaksharma80@gmail.com"
                className="inline-flex items-center gap-3 mt-9 bg-purple-600 hover:bg-purple-700 px-7 py-4 rounded-xl font-medium transition-all shadow-lg shadow-purple-600/20"
              >
                <Mail size={19} />
                Let's Talk
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:meenaksharma80@gmail.com"
                className="flex items-center gap-5 bg-[#151522] border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition-all"
              >
                <div className="p-4 rounded-xl bg-purple-500/10 text-purple-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email Me</p>
                  <p className="text-white mt-1">
                    meenaksharma80@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/manu-sharma-94ba16218/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-[#151522] border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition-all"
              >
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400">
                  <span className="font-bold text-2xl">in</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">LinkedIn</p>
                  <p className="text-white mt-1">Connect with me</p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500" />
              </a>

              <a
                href="https://github.com/manushrma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-[#151522] border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition-all"
              >
                <div className="p-4 rounded-xl bg-white/10 text-white">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">GitHub</p>
                  <p className="text-white mt-1">Explore my code</p>
                </div>
                <ArrowUpRight className="ml-auto text-gray-500" />
              </a>

              <div className="flex items-center gap-5 bg-[#151522] border border-white/10 p-6 rounded-2xl">
                <div className="p-4 rounded-xl bg-green-500/10 text-green-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white mt-1">India | Open to Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
           © {currentYear} Meena Sharma. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-gray-400 hover:text-purple-400 text-sm flex items-center gap-2 transition-colors"
          >
            Back to Top <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>


    </main>
  );
}
