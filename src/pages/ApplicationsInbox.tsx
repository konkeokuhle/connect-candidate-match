
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import {
  Search,
  Filter,
  Download,
  FileText,
  MessageSquare,
  User,
  Briefcase,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Calendar,
} from 'lucide-react';

// Mock applications data
const mockApplications = [
  {
    id: '1',
    candidateId: 'c1',
    candidateName: 'John Doe',
    candidateEmail: 'john.doe@example.com',
    jobId: 'j1',
    jobTitle: 'Frontend Developer',
    appliedDate: '2025-04-10T09:15:00Z',
    status: 'new',
    resumeUrl: '#',
    coverLetter: 'I am excited to apply for this position and believe my skills in React and TypeScript make me a strong candidate.',
  },
  {
    id: '2',
    candidateId: 'c2',
    candidateName: 'Sarah Johnson',
    candidateEmail: 'sarah.j@example.com',
    jobId: 'j2',
    jobTitle: 'UX Designer',
    appliedDate: '2025-04-09T14:30:00Z',
    status: 'reviewing',
    resumeUrl: '#',
    coverLetter: 'With 3 years of experience in user interface design, I am confident I can contribute to your team.',
  },
  {
    id: '3',
    candidateId: 'c3',
    candidateName: 'Michael Brown',
    candidateEmail: 'mbrown@example.com',
    jobId: 'j1',
    jobTitle: 'Frontend Developer',
    appliedDate: '2025-04-08T11:20:00Z',
    status: 'shortlisted',
    resumeUrl: '#',
    coverLetter: 'My background in frontend development and my passion for creating intuitive interfaces makes me a good fit for this role.',
  },
  {
    id: '4',
    candidateId: 'c4',
    candidateName: 'Emily Wilson',
    candidateEmail: 'emily.w@example.com',
    jobId: 'j3',
    jobTitle: 'Product Manager',
    appliedDate: '2025-04-07T15:45:00Z',
    status: 'rejected',
    resumeUrl: '#',
    coverLetter: 'I have led product development at my current company for 2 years and would love to bring my expertise to your team.',
  },
  {
    id: '5',
    candidateId: 'c5',
    candidateName: 'David Chen',
    candidateEmail: 'dchen@example.com',
    jobId: 'j4',
    jobTitle: 'Backend Developer',
    appliedDate: '2025-04-05T10:10:00Z',
    status: 'hired',
    resumeUrl: '#',
    coverLetter: 'With extensive experience in Node.js and database management, I am ready to contribute to your backend systems.',
  },
];

const ApplicationsInbox = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applications, setApplications] = useState(mockApplications);
  const [filteredApplications, setFilteredApplications] = useState(mockApplications);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [jobFilter, setJobFilter] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);
  
  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');
    
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to view applications.",
        variant: "destructive",
      });
      navigate('/login');
    } else if (userRole !== 'employer') {
      toast({
        title: "Access denied",
        description: "This page is only accessible to employers.",
        variant: "destructive",
      });
      navigate('/');
    }
  }, [navigate, toast]);
  
  // Filter applications based on search term and filters
  useEffect(() => {
    let filtered = applications;
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(app => 
        app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(app => app.status === statusFilter);
    }
    
    // Apply job filter
    if (jobFilter !== 'all') {
      filtered = filtered.filter(app => app.jobId === jobFilter);
    }
    
    setFilteredApplications(filtered);
  }, [applications, searchTerm, statusFilter, jobFilter]);
  
  // Get unique jobs for filter dropdown
  const uniqueJobs = Array.from(new Set(applications.map(app => app.jobTitle)))
    .map(title => {
      const job = applications.find(app => app.jobTitle === title);
      return { id: job?.jobId || '', title };
    });
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  // Update application status
  const updateApplicationStatus = (applicationId: string, newStatus: string) => {
    const updatedApplications = applications.map(app => 
      app.id === applicationId 
        ? { ...app, status: newStatus } 
        : app
    );
    
    setApplications(updatedApplications);
    
    toast({
      title: "Status updated",
      description: `Application status has been updated to ${newStatus}.`,
    });
  };
  
  // Download resume mock function
  const downloadResume = (applicationId: string) => {
    toast({
      title: "Downloading resume",
      description: "The resume will be downloaded shortly.",
    });
  };
  
  // Get status badge info
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'new':
        return { color: 'bg-blue-100 text-blue-700', icon: <Clock className="h-4 w-4 mr-1" />, label: 'New' };
      case 'reviewing':
        return { color: 'bg-purple-100 text-purple-700', icon: <FileText className="h-4 w-4 mr-1" />, label: 'Reviewing' };
      case 'shortlisted':
        return { color: 'bg-amber-100 text-amber-700', icon: <Star className="h-4 w-4 mr-1" />, label: 'Shortlisted' };
      case 'rejected':
        return { color: 'bg-red-100 text-red-700', icon: <XCircle className="h-4 w-4 mr-1" />, label: 'Rejected' };
      case 'hired':
        return { color: 'bg-green-100 text-green-700', icon: <CheckCircle2 className="h-4 w-4 mr-1" />, label: 'Hired' };
      default:
        return { color: 'bg-gray-100 text-gray-700', icon: <AlertCircle className="h-4 w-4 mr-1" />, label: 'Unknown' };
    }
  };
  
  return (
    <Layout>
      <div className="app-container py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">Applications Inbox</h1>
              <p className="text-gray-600 mb-4 md:mb-0">Manage and review candidate applications</p>
            </div>
            
            <Button asChild>
              <Link to="/post-job">
                Post New Job
              </Link>
            </Button>
          </div>
          
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search candidates or positions..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="reviewing">Reviewing</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={jobFilter} onValueChange={setJobFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                {uniqueJobs.map(job => (
                  <SelectItem key={job.id} value={job.id}>{job.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Applications List */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 overflow-auto max-h-[calc(100vh-250px)]">
              <h2 className="text-lg font-semibold mb-3">Applications ({filteredApplications.length})</h2>
              
              {filteredApplications.length > 0 ? (
                <div className="space-y-3">
                  {filteredApplications.map(application => {
                    const statusBadge = getStatusBadge(application.status);
                    const isSelected = selectedApplication === application.id;
                    
                    return (
                      <Card 
                        key={application.id} 
                        className={`cursor-pointer transition-colors ${isSelected ? 'border-brand-primary ring-1 ring-brand-primary' : ''}`}
                        onClick={() => setSelectedApplication(application.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                                <User className="h-4 w-4 text-gray-600" />
                              </div>
                              <div>
                                <h3 className="font-medium text-lg">{application.candidateName}</h3>
                                <p className="text-sm text-gray-600">{application.jobTitle}</p>
                              </div>
                            </div>
                            <div className={`px-2 py-1 rounded-full flex items-center ${statusBadge.color}`}>
                              {statusBadge.icon}
                              <span className="text-xs font-medium">{statusBadge.label}</span>
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-gray-500 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Applied {formatDate(application.appliedDate)}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <AlertCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">No applications match your filters</p>
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Application Detail */}
            <div className="lg:col-span-2">
              {selectedApplication ? (
                (() => {
                  const application = applications.find(a => a.id === selectedApplication);
                  
                  if (!application) return null;
                  
                  const statusBadge = getStatusBadge(application.status);
                  
                  return (
                    <Card>
                      <CardHeader className="border-b pb-3">
                        <div className="flex justify-between items-center">
                          <CardTitle>{application.candidateName}</CardTitle>
                          <div className={`px-2 py-1 rounded-full flex items-center ${statusBadge.color}`}>
                            {statusBadge.icon}
                            <span className="text-xs font-medium">{statusBadge.label}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Job Position</p>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
                                <p className="font-medium">{application.jobTitle}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Applied on</p>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                                <p className="font-medium">{formatDate(application.appliedDate)}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500 mb-2">Contact Information</p>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="mb-1">
                                <span className="font-medium">Email:</span> {application.candidateEmail}
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-sm text-gray-500">Resume</p>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => downloadResume(application.id)}
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm italic">PDF document available for download</p>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500 mb-2">Cover Letter</p>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm">{application.coverLetter}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row justify-between pt-4 border-t border-gray-100">
                            <div className="space-x-2 mb-3 sm:mb-0">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => navigate(`/messages?candidate=${application.candidateId}`)}
                              >
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Message
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => downloadResume(application.id)}
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Resume
                              </Button>
                            </div>
                            <div className="space-x-2">
                              {application.status !== 'rejected' && (
                                <Button 
                                  variant="destructive" 
                                  size="sm"
                                  onClick={() => updateApplicationStatus(application.id, 'rejected')}
                                >
                                  Reject
                                </Button>
                              )}
                              {application.status === 'new' && (
                                <Button 
                                  variant="default" 
                                  size="sm"
                                  onClick={() => updateApplicationStatus(application.id, 'reviewing')}
                                >
                                  Review
                                </Button>
                              )}
                              {application.status === 'reviewing' && (
                                <Button 
                                  variant="default" 
                                  size="sm"
                                  onClick={() => updateApplicationStatus(application.id, 'shortlisted')}
                                >
                                  Shortlist
                                </Button>
                              )}
                              {application.status === 'shortlisted' && (
                                <Button 
                                  variant="default" 
                                  size="sm"
                                  onClick={() => updateApplicationStatus(application.id, 'hired')}
                                >
                                  Hire
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })()
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-12 text-center">
                    <FileText className="h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Select an Application</h3>
                    <p className="text-gray-500 max-w-md">
                      Click on an application from the list to view details and take action.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationsInbox;
