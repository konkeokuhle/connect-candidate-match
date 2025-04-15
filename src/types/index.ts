
export type UserRole = 'candidate' | 'employer' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
}

export interface Candidate extends User {
  role: 'candidate';
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  resume?: string; // URL to resume file
  profileImage?: string;
  bio?: string;
  location?: string;
  phoneNumber?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
}

export interface Employer extends User {
  role: 'employer';
  companyName: string;
  industry: string;
  companySize: string;
  companyDescription: string;
  logoUrl?: string;
  location: string;
  websiteUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  currentlyStudying: boolean;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorking: boolean;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Job {
  id: string;
  employerId: string;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  location: string;
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote';
  salaryRange?: {
    min: number;
    max: number;
    currency: string;
  };
  benefits?: string[];
  applicationDeadline?: Date;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  status: 'submitted' | 'in-review' | 'shortlisted' | 'rejected' | 'hired';
  appliedAt: Date;
  updatedAt: Date;
  coverLetter?: string;
  matchScore?: number; // calculated by NLP
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  sentAt: Date;
  readAt?: Date;
  attachmentUrl?: string;
}

export interface Conversation {
  id: string;
  participants: string[]; // user ids
  lastMessage?: Message;
  createdAt: Date;
  updatedAt: Date;
}
