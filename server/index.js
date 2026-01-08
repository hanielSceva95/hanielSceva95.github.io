const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_mern';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Data Schema (Simplified for demo)
const portfolioSchema = new mongoose.Schema({
  experience: Array,
  education: Array,
  hobbies: Array
});
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Seed Data Route (dev only)
app.get('/api/seed', async (req, res) => {
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
    hobbies: ['Photography', 'Travel', 'Gaming', 'Coding']
  };
  
  // Clear and insert
  await Portfolio.deleteMany({});
  await Portfolio.create(data);
  res.json({ message: 'Database seeded with new experience data' });
});

// Get Data
app.get('/api/portfolio', async (req, res) => {
  try {
    // If DB is not connected or empty, return default data for safety
    const data = await Portfolio.findOne();
    if (!data) {
        return res.json({
            experience: [], education: [], hobbies: []
        });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
