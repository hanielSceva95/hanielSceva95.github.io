import React, { useRef } from 'react';
// import axios from 'axios';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';
import bikeImg from './assets/bike5.JPG';
import profileImg from './assets/haniel.jpg';
import resumePdf from './assets/Sceva_resume.pdf';

function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Transform logic:
  // 0-20%: Hero shrinks to sidebar (35%)
  // 20-70%: Sidebar stays
  // 70-90%: Sidebar disappears (0%)
  const width = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.9], ["100%", "0%", "0%", "0%"]);
  const sidebarOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const contentMargin = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.9], ["0%", "0%", "0%", "0%"]);

  // Hardcoded data for Frontend Only mode
  const data = {
    experience: [
      { 
        id: 1, 
        role: 'Java Full stack developer', 
        company: 'Eficens LLC (Comcast, Walmart)', 
        period: 'March 2022 - October 2024', 
        points: [
          'Architected and Integrated Microsoft OpenAI into Walmart’s subscription prediction system using NodeJS/Python, improving forecasting accuracy by leveraging AI to analyze large datasets.',
          'Led the architectural design and development of a 100% traceability system to monitor millions of events across multiple teams and modules using Java 17, Spring Boot, Project Reactor, Kafka, and Grafana.',
          'Engineered optimized Elasticsearch queries and subqueries to accelerate data retrieval and analysis, improving system performance and real-time decision-making.',
          'Established monitoring and alerting in Elasticsearch using Kibana and ElastAlert, enabling proactive issue detection.',
          'Enhanced the project by adding a dedicated configurations table in Cassandra for flexible, environment-specific code configurations.',
          'Applied Core Java concepts: OOP, Collections, Exception Handling, Concurrency, JDBC, and Generics.',
          'Implemented authentication and authorization using Spring Security and OAuth 2.0.',
          'Developed Zeraf test cases in YAML for regression testing, maintaining 95% test coverage.',
          'Implemented proactive monitoring using Prometheus and Grafana, reducing unexpected downtime by 40%.',
          'Extensive experience with Kafka API (Producers, Consumers, KStreams) for building robust pipelines.'
        ],
        technologies: ['Java 17', 'Spring Boot', 'NodeJS', 'Python', 'Kafka', 'Elasticsearch', 'Cassandra', 'Prometheus', 'Grafana', 'OAuth 2.0']
      },
      { 
        id: 2, 
        role: 'Member of Technical Staff', 
        company: 'Open Networking Foundation', 
        period: 'March 2021 - March 2022', 
        points: [
          'Developed a GUI using Angular 12 to enable users to interact with and modify APIs.',
          'Implemented Helm as a package manager for Kubernetes to manage deployment templates.',
          'Migrated project from Angular 10 to Angular 12, refactoring code for performance and maintainability.',
          'Increased unit testing coverage of the Angular project from 33% to 80%.',
          'Developed Spring Boot microservices using RESTful architecture and Apache Kafka.',
          'Utilized Swagger UI and Postman for API documentation and validation.',
          'Contributed to the full SDLC using Agile (Scrum) and TDD methodologies.'
        ],
        technologies: ['Angular 12', 'Kubernetes', 'Helm', 'Spring Boot', 'Kafka', 'Swagger', 'TDD']
      },
      { 
        id: 3, 
        role: 'Programmer Analyst', 
        company: 'Cognizant Technology Solutions', 
        period: 'August 2016 - December 2018', 
        points: [
          'Developed a MEAN Stack project, upgrading from AngularJS 1.5x to Angular 4.',
          'Created front-end UI using HTML5, CSS3, jQuery, and AJAX with Bootstrap for responsiveness.',
          'Designed MongoDB databases to maintain coherent relationships between elements.',
          'Implemented backend logic in NodeJS and migrated to SailsJS for optimized query handling.',
          'Hosted projects on AWS/VMs and managed version control with TortoiseSVN and Git.',
          'Acted as Scrum Master, managing sprint planning and issue tracking in JIRA.',
          'Developed an Amazon Lex chatbot using NLP/NLU for automated workflows.',
          'Configured CI/CD pipelines for Microservices and Lambda functions on Jenkins.',
          'collaborated on a Web Content Management system using Confluence.'
        ],
        technologies: ['MEAN Stack', 'Angular 4', 'NodeJS', 'SailsJS', 'MongoDB', 'AWS', 'Jenkins', 'Amazon Lex', 'JIRA']
      }
    ],
    education: [
      { id: 1, degree: 'Master of Information Technology Management', school: 'Campbellsville University', period: 'Present' },
      { id: 2, degree: 'Master of Science in Computer Science', school: 'Binghamton University, SUNY', period: 'December 2020' },
      { id: 3, degree: 'Bachelor of Engineering in Electrical and Electronics Engineering', school: 'Sathyabama University', period: 'April 2016' }
    ],
    hobbies: ['Biking', 'Travel', 'Gaming', 'Coding']
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans overflow-x-hidden">
      {/* Scroll Control Wrapper */}
      <div ref={targetRef} className="relative w-full">
        
        {/* Sticky/Fixed Hero Image Section */}
        <motion.div 
          style={{ width, opacity: sidebarOpacity }}
          className="fixed top-0 left-0 h-screen z-10 overflow-hidden"
        >
          <div className="absolute inset-0 z-10" /> {/* Darker Overlay for better text contrast */}
          <img 
            src={bikeImg} 
            alt="Haniel Sceva" 
            className="w-full h-full object-cover"
          />
          
          <motion.div 
            style={{ 
              scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.6]),
              y: useTransform(scrollYProgress, [0, 0.2], [0, -20]),
              x: useTransform(scrollYProgress, [0, 0.2], [0, -80]), // Slide left to fit in sidebar
              transformOrigin: "top left"
            }}
            className="absolute top-40 left-10 md:top-28 md:left-40 z-20 whitespace-nowrap"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-950">
              Haniel Sceva
            </h1>
            <p className="font-semibold text-xl text-zinc-800 mt-2 mb-6">Full Stack Developer</p>
            
            <div className="flex flex-col gap-2 text-zinc-700 text-sm md:text-base font-light tracking-wide">
              <div className="font-sans font-semibold flex items-center gap-2">
                <Phone size={18} className="text-violet-600" />
                <span>607-348-3380</span>
              </div>
              <div className="font-sans font-semibold flex items-center gap-2">
                <Mail size={18} className="text-violet-600" />
                <a href="mailto:haniel.sceva@gmail.com" className="hover:text-emerald-400 transition-colors">haniel.sceva@gmail.com</a>
              </div>
              <div className="font-sans font-semibold flex items-center gap-2">
                <Linkedin size={18} className="text-violet-600" />
                <a href="https://www.linkedin.com/in/haniel-sceva-16031b182/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn Profile</a>
              </div>
              <div className="font-sans font-semibold flex items-center gap-2">
                <MapPin size={18} className="text-violet-600" />
                <span>Santa Clara, California</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Wrapper */}
        <div className="h-screen w-full" /> 

        {/* Main Content Area */}
        <div className="flex w-full">
          <motion.div 
             style={{ width: contentMargin }}
             className="shrink-0 h-full hidden md:block"
          />
          
          <div className="flex-1 p-8 md:p-20 space-y-32 min-h-screen z-0">
            {/* About Me Section */}
            <section id="about">
              <h2 className="text-4xl font-bold mb-8 text-[#d4af37]">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="relative group w-[70%]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <img src={profileImg} alt="Haniel Sceva" className="relative w-full object-cover rounded-2xl shadow-2xl" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2">Haniel Sceva</h3>
                    <p className="text-emerald-500 text-xl font-medium">Full Stack Developer</p>
                  </div>
                  
                  {/* Contact Details in About Me */}
                  <div className="flex flex-col gap-3 text-gray-300 font-light tracking-wide p-6 bg-[#111] rounded-xl border border-[#222]">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-500">
                        <Phone size={18} />
                      </div>
                      <span>607-348-3380</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-500">
                        <Mail size={18} />
                      </div>
                      <a href="mailto:haniel.sceva@gmail.com" className="hover:text-emerald-400 transition-colors">haniel.sceva@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-500">
                        <Linkedin size={18} />
                      </div>
                      <a href="https://www.linkedin.com/in/haniel-sceva-16031b182/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn Profile</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-500">
                        <MapPin size={18} />
                      </div>
                      <span>Santa Clara, California</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg mb-8">
                    Proactive Full-Stack Developer with experience building scalable web applications using JavaScript, Java/J2EE, Python, ReactJS, Angular, NodeJS, Spring Boot, and Django. Strong background in front-end and back-end development, working with databases such as MySQL, PostgreSQL, MongoDB, and Cassandra. Skilled in writing clean, maintainable code, collaborating in Agile teams, and deploying solutions using AWS, Azure, Git, Docker, Jenkins, and RESTful APIs. Passionate about learning new technologies and mentoring junior developers. Outside of work, enjoys hiking, motorcycling, and camping, bringing adaptability, problem-solving, and a balanced mindset to building impactful solutions.
                  </p>
                </div>
              </div>
            </section>
            {/* Experience Section */}
            <section id="experience">
              <h2 className="text-4xl font-bold mb-8 text-[#d4af37]">Experience</h2>
              <div className="space-y-12">
                {data.experience.map((item) => (
                  <div key={item.id || item._id} className="border-l-2 border-[#333] pl-6 py-2 relative">
                    <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.5)]" />
                    <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                    <p className="text-emerald-500 font-mono mb-4 text-sm tracking-wide">{item.company} <span className="text-gray-600 px-2">|</span> {item.period}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {item.points && item.points.map((point, i) => (
                        <li key={i} className="text-gray-400 text-base leading-relaxed flex items-start">
                          <span className="mr-3 text-emerald-600 mt-1.5 text-xs">➢</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-[#1a1a1a] text-emerald-400 text-xs rounded-full border border-[#333] font-mono hover:border-emerald-500/50 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education">
              <h2 className="text-4xl font-bold mb-8 text-[#d4af37]">Education</h2>
              {data.education.map((item) => (
                <div key={item.id || item._id} className="bg-[#111] p-8 rounded-lg mb-4">
                   <h3 className="text-2xl font-semibold">{item.degree}</h3>
                   <p className="text-gray-400">{item.school} • {item.period}</p>
                </div>
              ))}
            </section>

             {/* Hobbies Section */}
             <section id="hobbies">
              <h2 className="text-4xl font-bold mb-8 text-[#d4af37]">Hobbies</h2>
              <div className="grid grid-cols-2 gap-4">
                 {data.hobbies.map((hobby, index) => (
                   <div key={index} className="bg-[#111] h-40 rounded flex items-center justify-center text-xl hover:bg-[#222] transition-colors">{hobby}</div>
                 ))}
              </div>
            </section>

            {/* Resume Download */}
            <section className="pb-20">
              <a href={resumePdf} download="Sceva_resume.pdf" className="inline-block bg-[#d4af37] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors cursor-pointer">
                Download Resume
              </a>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
