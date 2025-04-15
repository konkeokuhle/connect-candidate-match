
import { Job, Candidate, Employer, Application } from '@/types';

export const mockJobs: Job[] = [
  {
    id: '1',
    employerId: '1',
    title: 'Data Scientist',
    description: 'We are looking for a data scientist to join our growing team. You will be responsible for analyzing and interpreting complex data to help drive business decisions.',
    requirements: [
      'Masters or PhD in Computer Science, Statistics, or related field',
      'Strong programming skills in Python, R, or similar',
      'Experience with machine learning frameworks',
      'Knowledge of SQL and database systems',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Develop and implement machine learning models',
      'Analyze large datasets to extract insights',
      'Work with stakeholders to understand business needs',
      'Present findings to technical and non-technical audiences',
      'Contribute to the improvement of data collection and analysis processes'
    ],
    location: 'London, UK (Hybrid)',
    jobType: 'full-time',
    salaryRange: {
      min: 55000,
      max: 75000,
      currency: 'GBP'
    },
    benefits: [
      'Flexible working hours',
      'Health insurance',
      'Gym membership',
      'Professional development budget'
    ],
    applicationDeadline: new Date(2025, 5, 30),
    createdAt: new Date(2025, 4, 1),
    updatedAt: new Date(2025, 4, 1),
    isActive: true
  },
  {
    id: '2',
    employerId: '2',
    title: 'Software Engineer (Graduate)',
    description: 'Join our innovative software team and work on cutting-edge technologies. This position is perfect for recent graduates looking to start their career in software development.',
    requirements: [
      'Bachelors or Masters in Computer Science or related field',
      'Knowledge of at least one programming language (Java, Python, JavaScript)',
      'Understanding of data structures and algorithms',
      'Ability to work in a team environment',
      'Willingness to learn new technologies'
    ],
    responsibilities: [
      'Develop and maintain software applications',
      'Participate in code reviews',
      'Write unit and integration tests',
      'Collaborate with team members on project requirements',
      'Document code and processes'
    ],
    location: 'Manchester, UK',
    jobType: 'full-time',
    salaryRange: {
      min: 30000,
      max: 40000,
      currency: 'GBP'
    },
    benefits: [
      'Flexible working hours',
      'Remote work options',
      'Training and development',
      'Modern office space'
    ],
    applicationDeadline: new Date(2025, 6, 15),
    createdAt: new Date(2025, 4, 5),
    updatedAt: new Date(2025, 4, 5),
    isActive: true
  },
  {
    id: '3',
    employerId: '3',
    title: 'Marketing Analyst',
    description: 'We are seeking a Marketing Analyst to help our team drive data-driven marketing decisions and optimize our campaigns.',
    requirements: [
      'Degree in Marketing, Business, or a related field',
      'Experience with marketing analytics tools',
      'Strong analytical and quantitative skills',
      'Knowledge of digital marketing channels',
      'Excellent communication skills'
    ],
    responsibilities: [
      'Analyze marketing campaign performance',
      'Develop reports and dashboards',
      'Identify trends and insights from marketing data',
      'Make recommendations for marketing optimization',
      'Work with marketing team to implement data-driven strategies'
    ],
    location: 'Remote (UK-based)',
    jobType: 'full-time',
    salaryRange: {
      min: 35000,
      max: 45000,
      currency: 'GBP'
    },
    benefits: [
      'Fully remote work',
      'Flexible schedule',
      'Professional development opportunities',
      'Team retreats twice a year'
    ],
    applicationDeadline: new Date(2025, 5, 20),
    createdAt: new Date(2025, 4, 10),
    updatedAt: new Date(2025, 4, 10),
    isActive: true
  },
  {
    id: '4',
    employerId: '1',
    title: 'Machine Learning Engineer',
    description: 'Help us build and deploy machine learning models that power our products and drive business value.',
    requirements: [
      'Masters or PhD in Computer Science, Machine Learning, or related field',
      'Strong programming skills in Python',
      'Experience with TensorFlow, PyTorch, or similar frameworks',
      'Understanding of ML operations and deployment',
      'Good communication skills'
    ],
    responsibilities: [
      'Design and implement machine learning models',
      'Optimize existing models for performance and accuracy',
      'Deploy models to production environments',
      'Collaborate with data scientists and engineers',
      'Stay current with latest ML research and techniques'
    ],
    location: 'Cambridge, UK',
    jobType: 'full-time',
    salaryRange: {
      min: 60000,
      max: 80000,
      currency: 'GBP'
    },
    benefits: [
      'Flexible working arrangements',
      'Regular team social events',
      'Learning and development budget',
      'State-of-the-art hardware'
    ],
    applicationDeadline: new Date(2025, 5, 25),
    createdAt: new Date(2025, 4, 15),
    updatedAt: new Date(2025, 4, 15),
    isActive: true
  },
  {
    id: '5',
    employerId: '2',
    title: 'UX/UI Designer Internship',
    description: 'A 3-month internship opportunity for graduate designers looking to gain practical experience in UX/UI design within a fast-paced tech company.',
    requirements: [
      'Degree in Design, HCI, or related field',
      'Portfolio demonstrating UX/UI projects',
      'Familiarity with design tools like Figma or Adobe XD',
      'Understanding of user-centered design principles',
      'Creativity and attention to detail'
    ],
    responsibilities: [
      'Assist in creating wireframes and prototypes',
      'Conduct user research and usability testing',
      'Design UI elements and components',
      'Collaborate with product and development teams',
      'Present design concepts and iterations'
    ],
    location: 'Edinburgh, UK',
    jobType: 'internship',
    salaryRange: {
      min: 1500,
      max: 1800,
      currency: 'GBP'
    },
    benefits: [
      'Mentorship from senior designers',
      'Possibility for full-time employment',
      'Portfolio-worthy projects',
      'Networking opportunities'
    ],
    applicationDeadline: new Date(2025, 4, 30),
    createdAt: new Date(2025, 4, 1),
    updatedAt: new Date(2025, 4, 1),
    isActive: true
  }
];

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    email: 'john.smith@example.com',
    name: 'John Smith',
    role: 'candidate',
    createdAt: new Date(2025, 3, 15),
    education: [
      {
        id: '1',
        institution: 'University of Manchester',
        degree: 'MSc',
        fieldOfStudy: 'Computer Science',
        startDate: new Date(2023, 8, 1),
        endDate: new Date(2025, 6, 30),
        currentlyStudying: false,
        description: 'Specialization in Machine Learning and AI'
      },
      {
        id: '2',
        institution: 'University of Leeds',
        degree: 'BSc',
        fieldOfStudy: 'Computer Science',
        startDate: new Date(2020, 8, 1),
        endDate: new Date(2023, 6, 30),
        currentlyStudying: false,
        description: 'First-class honors'
      }
    ],
    experience: [
      {
        id: '1',
        company: 'Tech Startup Ltd',
        position: 'Software Development Intern',
        location: 'Manchester, UK',
        startDate: new Date(2022, 5, 1),
        endDate: new Date(2022, 8, 31),
        currentlyWorking: false,
        description: 'Developed features for the company\'s web application using React and Node.js'
      }
    ],
    skills: [
      { id: '1', name: 'JavaScript', category: 'Programming', level: 'advanced' },
      { id: '2', name: 'React', category: 'Frontend', level: 'intermediate' },
      { id: '3', name: 'Node.js', category: 'Backend', level: 'intermediate' },
      { id: '4', name: 'Python', category: 'Programming', level: 'advanced' },
      { id: '5', name: 'Machine Learning', category: 'Data Science', level: 'intermediate' }
    ],
    resume: '/resumes/john-smith-resume.pdf',
    profileImage: '/images/john-smith.jpg',
    bio: 'Recent Computer Science graduate with a passion for software development and machine learning. Looking for opportunities to apply my skills in a challenging environment.',
    location: 'Manchester, UK',
    phoneNumber: '+44 7123 456789',
    linkedInUrl: 'https://linkedin.com/in/johnsmith',
    githubUrl: 'https://github.com/johnsmith',
    portfolioUrl: 'https://johnsmith.dev'
  },
  {
    id: '2',
    email: 'sarah.johnson@example.com',
    name: 'Sarah Johnson',
    role: 'candidate',
    createdAt: new Date(2025, 2, 20),
    education: [
      {
        id: '1',
        institution: 'Imperial College London',
        degree: 'PhD',
        fieldOfStudy: 'Data Science',
        startDate: new Date(2022, 8, 1),
        currentlyStudying: true,
        description: 'Research focus on natural language processing applications in healthcare'
      },
      {
        id: '2',
        institution: 'University College London',
        degree: 'MSc',
        fieldOfStudy: 'Machine Learning',
        startDate: new Date(2021, 8, 1),
        endDate: new Date(2022, 8, 31),
        currentlyStudying: false,
        description: 'Distinction'
      }
    ],
    experience: [
      {
        id: '1',
        company: 'Healthcare AI Ltd',
        position: 'Research Assistant',
        location: 'London, UK',
        startDate: new Date(2022, 6, 1),
        currentlyWorking: true,
        description: 'Working on applying NLP techniques to medical records for improved diagnostics'
      },
      {
        id: '2',
        company: 'Data Insights Ltd',
        position: 'Data Scientist Intern',
        location: 'London, UK',
        startDate: new Date(2021, 5, 1),
        endDate: new Date(2021, 8, 31),
        currentlyWorking: false,
        description: 'Developed predictive models for customer behavior analysis'
      }
    ],
    skills: [
      { id: '1', name: 'Python', category: 'Programming', level: 'expert' },
      { id: '2', name: 'Machine Learning', category: 'Data Science', level: 'advanced' },
      { id: '3', name: 'Natural Language Processing', category: 'Data Science', level: 'advanced' },
      { id: '4', name: 'TensorFlow', category: 'Machine Learning', level: 'advanced' },
      { id: '5', name: 'PyTorch', category: 'Machine Learning', level: 'advanced' },
      { id: '6', name: 'R', category: 'Data Analysis', level: 'intermediate' }
    ],
    resume: '/resumes/sarah-johnson-resume.pdf',
    profileImage: '/images/sarah-johnson.jpg',
    bio: 'PhD candidate in Data Science with expertise in NLP and healthcare applications. Seeking part-time data science roles to complement my research.',
    location: 'London, UK',
    phoneNumber: '+44 7123 456790',
    linkedInUrl: 'https://linkedin.com/in/sarahjohnson',
    githubUrl: 'https://github.com/sarahjohnson',
    portfolioUrl: 'https://sarahjohnson.io'
  }
];

export const mockEmployers: Employer[] = [
  {
    id: '1',
    email: 'recruiter@techcorp.com',
    name: 'Alex Thompson',
    role: 'employer',
    createdAt: new Date(2025, 1, 10),
    companyName: 'TechCorp Solutions',
    industry: 'Information Technology',
    companySize: '50-200',
    companyDescription: 'TechCorp Solutions is a leading technology company specializing in AI, machine learning, and cloud solutions. We work with enterprises to transform their businesses through innovative technology solutions.',
    logoUrl: '/logos/techcorp.png',
    location: 'London, UK',
    websiteUrl: 'https://techcorp-solutions.com'
  },
  {
    id: '2',
    email: 'hr@innovatech.com',
    name: 'Emily Williams',
    role: 'employer',
    createdAt: new Date(2025, 2, 5),
    companyName: 'InnovaTech',
    industry: 'Software Development',
    companySize: '10-50',
    companyDescription: 'InnovaTech is a dynamic startup focused on creating cutting-edge software solutions for businesses of all sizes. Our team of talented engineers and designers work together to build products that make a difference.',
    logoUrl: '/logos/innovatech.png',
    location: 'Manchester, UK',
    websiteUrl: 'https://innovatech.co.uk'
  },
  {
    id: '3',
    email: 'careers@datainsight.com',
    name: 'Michael Brown',
    role: 'employer',
    createdAt: new Date(2025, 3, 15),
    companyName: 'DataInsight Analytics',
    industry: 'Data Analytics',
    companySize: '10-50',
    companyDescription: 'DataInsight Analytics helps businesses make data-driven decisions through advanced analytics and visualization tools. Our team of data scientists and analysts work closely with clients to extract valuable insights from their data.',
    logoUrl: '/logos/datainsight.png',
    location: 'Edinburgh, UK',
    websiteUrl: 'https://datainsight-analytics.com'
  }
];

export const mockApplications: Application[] = [
  {
    id: '1',
    jobId: '1',
    candidateId: '1',
    status: 'in-review',
    appliedAt: new Date(2025, 4, 5),
    updatedAt: new Date(2025, 4, 7),
    coverLetter: 'I am excited to apply for the Data Scientist position at TechCorp Solutions. With my MSc in Computer Science and experience in machine learning, I believe I would be a valuable addition to your team.',
    matchScore: 85
  },
  {
    id: '2',
    jobId: '4',
    candidateId: '1',
    status: 'submitted',
    appliedAt: new Date(2025, 4, 16),
    updatedAt: new Date(2025, 4, 16),
    coverLetter: 'I would like to express my interest in the Machine Learning Engineer position at TechCorp Solutions. My background in AI and programming makes me well-suited for this role.',
    matchScore: 78
  },
  {
    id: '3',
    jobId: '1',
    candidateId: '2',
    status: 'shortlisted',
    appliedAt: new Date(2025, 4, 3),
    updatedAt: new Date(2025, 4, 8),
    coverLetter: 'As a PhD candidate in Data Science with a focus on NLP, I am very interested in the Data Scientist position at TechCorp Solutions. My research and industry experience align perfectly with the job requirements.',
    matchScore: 92
  }
];

// Helper function to get job by id
export const getJobById = (id: string): Job | undefined => {
  return mockJobs.find(job => job.id === id);
};

// Helper function to get candidate by id
export const getCandidateById = (id: string): Candidate | undefined => {
  return mockCandidates.find(candidate => candidate.id === id);
};

// Helper function to get employer by id
export const getEmployerById = (id: string): Employer | undefined => {
  return mockEmployers.find(employer => employer.id === id);
};

// Helper function to get applications by job id
export const getApplicationsByJobId = (jobId: string): Application[] => {
  return mockApplications.filter(application => application.jobId === jobId);
};

// Helper function to get applications by candidate id
export const getApplicationsByCandidateId = (candidateId: string): Application[] => {
  return mockApplications.filter(application => application.candidateId === candidateId);
};

// Helper function to get jobs by employer id
export const getJobsByEmployerId = (employerId: string): Job[] => {
  return mockJobs.filter(job => job.employerId === employerId);
};

// Helper function to get matching score between job and candidate
export const getMatchingScore = (jobId: string, candidateId: string): number => {
  const application = mockApplications.find(
    app => app.jobId === jobId && app.candidateId === candidateId
  );
  
  if (application && application.matchScore) {
    return application.matchScore;
  }
  
  // If no existing application/score, calculate a random score
  // In a real app, this would use NLP to compare job requirements with candidate skills
  return Math.floor(Math.random() * 40) + 60; // Random score between 60-99
};
