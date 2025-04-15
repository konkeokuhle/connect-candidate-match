
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  CalendarClock, 
  Clock, 
  DollarSign, 
  Award, 
  ListChecks, 
  Layers, 
  Share2, 
  Bookmark,
  CheckCircle,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { mockJobs, mockEmployers, getJobById, getEmployerById, getMatchingScore } from '@/utils/mockData';
import { useToast } from '@/components/ui/use-toast';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState(getJobById(id || ''));
  const [employer, setEmployer] = useState(getEmployerById(job?.employerId || ''));
  const [matchScore, setMatchScore] = useState(75); // Default value, would be calculated with NLP
  const [coverLetter, setCoverLetter] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id) {
      const jobData = getJobById(id);
      setJob(jobData);
      
      if (jobData) {
        const employerData = getEmployerById(jobData.employerId);
        setEmployer(employerData);
        
        // In a real app, this would be calculated by comparing job requirements with candidate skills
        setMatchScore(Math.floor(Math.random() * 30) + 70); // Random score between 70-99
      }
    }
  }, [id]);
  
  if (!job) {
    return (
      <Layout>
        <div className="app-container py-10 text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/jobs">Browse All Jobs</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleApply = () => {
    // In a real app, this would submit the application to an API
    toast({
      title: "Application Submitted!",
      description: "Your job application has been successfully submitted.",
      action: (
        <Button variant="outline" size="sm" asChild>
          <Link to="/applications">View Applications</Link>
        </Button>
      ),
    });
    
    setIsApplying(false);
    // Navigate to applications page in a real app
  };
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="app-container py-8">
        <Button variant="ghost" className="mb-4" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Jobs
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Job Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {/* Job Header */}
                <div className="mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                      <div className="flex flex-wrap items-center text-gray-500 text-sm gap-y-1">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{employer?.companyName || 'Company Name'}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                        <span className="mx-2">•</span>
                        <Badge variant={job.jobType === 'full-time' ? 'default' : 'secondary'}>
                          {job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                {/* Job Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="text-gray-500 text-sm mb-1 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Posted
                    </div>
                    <div className="font-medium">{formatDate(job.createdAt)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1 flex items-center">
                      <CalendarClock className="h-4 w-4 mr-1" />
                      Deadline
                    </div>
                    <div className="font-medium">
                      {job.applicationDeadline ? formatDate(job.applicationDeadline) : 'Open until filled'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Salary
                    </div>
                    <div className="font-medium">
                      {job.salaryRange ? (
                        `£${job.salaryRange.min.toLocaleString()} - £${job.salaryRange.max.toLocaleString()}`
                      ) : (
                        'Competitive'
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1 flex items-center">
                      <Layers className="h-4 w-4 mr-1" />
                      Experience
                    </div>
                    <div className="font-medium">Graduate/Entry Level</div>
                  </div>
                </div>
                
                {/* Match Score (only visible when logged in) */}
                <div className="mb-6 bg-brand-light rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-brand-primary">Match Score</h3>
                    <span className="text-brand-primary font-bold">{matchScore}%</span>
                  </div>
                  <Progress value={matchScore} className="h-2" />
                  <p className="text-sm text-gray-600 mt-2">
                    {matchScore > 85 
                      ? 'Excellent match! Your profile aligns very well with this job.'
                      : matchScore > 70
                      ? 'Good match! Your profile aligns well with this job.'
                      : 'Fair match. You might want to highlight relevant skills in your application.'}
                  </p>
                </div>
                
                {/* Job Description */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Job Description</h2>
                  <p className="text-gray-700 whitespace-pre-line mb-4">{job.description}</p>
                </div>
                
                {/* Requirements */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 flex items-center">
                    <ListChecks className="h-5 w-5 mr-2 text-brand-primary" />
                    Requirements
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">{req}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Responsibilities */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-brand-primary" />
                    Responsibilities
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-700">{resp}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                {job.benefits && job.benefits.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Benefits</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Apply Section */}
                <div className="mt-8">
                  {isApplying ? (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Complete Your Application</h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cover Letter (Optional)
                        </label>
                        <Textarea 
                          placeholder="Tell the employer why you're a good fit for this position..." 
                          className="min-h-[150px]"
                          value={coverLetter}
                          onChange={(e) => setCoverLetter(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={handleApply}>
                          Submit Application
                        </Button>
                        <Button variant="outline" onClick={() => setIsApplying(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <Button size="lg" onClick={() => setIsApplying(true)}>
                        Apply Now
                      </Button>
                      <Button variant="outline" size="lg">
                        Save Job
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Company Card */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mr-3">
                    <Briefcase className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{employer?.companyName || 'Company Name'}</h3>
                    <p className="text-sm text-gray-500">{employer?.industry || 'Technology'}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  {employer?.companyDescription || 'Company description not available.'}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                    <span>{employer?.location || job.location}</span>
                  </div>
                  {employer?.websiteUrl && (
                    <div className="flex items-start">
                      <svg 
                        className="h-4 w-4 text-gray-500 mr-2 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                        />
                      </svg>
                      <a 
                        href={employer.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-brand-primary hover:underline"
                      >
                        {employer.websiteUrl.replace(/(^\w+:|^)\/\//, '')}
                      </a>
                    </div>
                  )}
                  <div className="flex items-start">
                    <svg 
                      className="h-4 w-4 text-gray-500 mr-2 mt-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                      />
                    </svg>
                    <span>{employer?.companySize || '50-200 employees'}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to={`/companies/${employer?.id || '1'}`}>
                    View Company Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Similar Jobs */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Similar Jobs</h3>
                <div className="space-y-4">
                  {mockJobs
                    .filter(j => j.id !== job.id && j.employerId === job.employerId)
                    .slice(0, 3)
                    .map(similarJob => (
                      <div key={similarJob.id} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                        <Link 
                          to={`/jobs/${similarJob.id}`} 
                          className="font-medium hover:text-brand-primary transition-colors"
                        >
                          {similarJob.title}
                        </Link>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{similarJob.location}</span>
                          <span className="mx-2">•</span>
                          <span>{similarJob.jobType.charAt(0).toUpperCase() + similarJob.jobType.slice(1)}</span>
                        </div>
                      </div>
                    ))}
                  
                  {mockJobs.filter(j => j.id !== job.id && j.employerId === job.employerId).length === 0 && (
                    <p className="text-gray-500 text-sm">No similar jobs found at this company.</p>
                  )}
                </div>
                <Button variant="link" className="p-0 h-auto text-brand-primary mt-3" asChild>
                  <Link to="/jobs">View all jobs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;
