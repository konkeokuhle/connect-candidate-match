
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import {
  Search,
  Filter,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Hourglass,
  CalendarClock,
  Building,
  MapPin,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';

// Mock applications data
const mockApplications = [
  {
    id: 'app-1',
    jobId: 'job-1',
    jobTitle: 'Frontend Developer',
    company: 'Tech Solutions Ltd',
    location: 'Durban, South Africa',
    appliedDate: '2025-04-01T08:30:00Z',
    status: 'in-review',
    interviewDate: null,
    statusUpdateDate: '2025-04-05T14:20:00Z',
    feedback: null,
  },
  {
    id: 'app-2',
    jobId: 'job-2',
    jobTitle: 'UX/UI Designer',
    company: 'Creative Digital',
    location: 'Cape Town, South Africa',
    appliedDate: '2025-03-25T10:15:00Z',
    status: 'shortlisted',
    interviewDate: '2025-04-20T13:00:00Z',
    statusUpdateDate: '2025-04-02T09:45:00Z',
    feedback: 'Your portfolio impressed our design team. We'd like to schedule an interview.',
  },
  {
    id: 'app-3',
    jobId: 'job-3',
    jobTitle: 'Data Analyst',
    company: 'Finance Solutions',
    location: 'Johannesburg, South Africa',
    appliedDate: '2025-04-10T11:20:00Z',
    status: 'submitted',
    interviewDate: null,
    statusUpdateDate: null,
    feedback: null,
  },
  {
    id: 'app-4',
    jobId: 'job-4',
    jobTitle: 'Backend Developer',
    company: 'Global Systems',
    location: 'Remote, South Africa',
    appliedDate: '2025-03-15T09:30:00Z',
    status: 'rejected',
    interviewDate: null,
    statusUpdateDate: '2025-03-30T16:10:00Z',
    feedback: 'Thank you for your application. We are looking for candidates with more experience in Node.js.',
  },
  {
    id: 'app-5',
    jobId: 'job-5',
    jobTitle: 'Project Manager',
    company: 'Construction Partners',
    location: 'Durban, South Africa',
    appliedDate: '2025-02-28T14:45:00Z',
    status: 'hired',
    interviewDate: '2025-03-10T11:00:00Z',
    statusUpdateDate: '2025-03-20T15:30:00Z',
    feedback: 'Congratulations! We are pleased to offer you the position.',
  }
];

const Applications = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applications, setApplications] = useState(mockApplications);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  
  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');
    
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to track your applications.",
        variant: "destructive",
      });
      navigate('/login');
    } else if (userRole !== 'candidate') {
      toast({
        title: "Access denied",
        description: "This page is only accessible to candidates.",
        variant: "destructive",
      });
      navigate('/');
    }
  }, [navigate, toast]);
  
  // Filter applications by search term and status
  const filteredApplications = applications.filter(app => {
    const matchesSearch = searchTerm === '' ||
      app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === null || app.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return '--';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  // Status icons and colors
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'submitted':
        return {
          icon: <Clock className="h-5 w-5" />,
          label: 'Submitted',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-700'
        };
      case 'in-review':
        return {
          icon: <Hourglass className="h-5 w-5" />,
          label: 'In Review',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-700'
        };
      case 'shortlisted':
        return {
          icon: <CheckCircle2 className="h-5 w-5" />,
          label: 'Shortlisted',
          bgColor: 'bg-amber-100',
          textColor: 'text-amber-700'
        };
      case 'rejected':
        return {
          icon: <XCircle className="h-5 w-5" />,
          label: 'Rejected',
          bgColor: 'bg-red-100',
          textColor: 'text-red-700'
        };
      case 'hired':
        return {
          icon: <CheckCircle2 className="h-5 w-5" />,
          label: 'Hired',
          bgColor: 'bg-green-100',
          textColor: 'text-green-700'
        };
      default:
        return {
          icon: <AlertCircle className="h-5 w-5" />,
          label: 'Unknown',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-700'
        };
    }
  };
  
  return (
    <Layout>
      <div className="app-container py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">My Applications</h1>
          <p className="text-gray-600 mb-8">Track and manage your job applications</p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search applications..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant={statusFilter === null ? 'default' : 'outline'}
                onClick={() => setStatusFilter(null)}
              >
                All
              </Button>
              <Button
                variant={statusFilter === 'shortlisted' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('shortlisted')}
              >
                Shortlisted
              </Button>
              <Button
                variant={statusFilter === 'in-review' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('in-review')}
              >
                In Review
              </Button>
              <Button
                variant={statusFilter === 'hired' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('hired')}
              >
                Hired
              </Button>
            </div>
          </div>
          
          {/* Applications List */}
          {filteredApplications.length > 0 ? (
            <div className="space-y-4">
              {filteredApplications.map((application) => {
                const statusInfo = getStatusInfo(application.status);
                
                return (
                  <Card key={application.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="border-l-4 border-brand-primary">
                        <div className="p-5">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <h3 className="text-lg font-semibold mb-1">{application.jobTitle}</h3>
                              <div className="flex items-center text-gray-600 mb-3">
                                <Building className="h-4 w-4 mr-1" />
                                <span className="mr-4">{application.company}</span>
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{application.location}</span>
                              </div>
                            </div>
                            
                            <div className={`${statusInfo.bgColor} ${statusInfo.textColor} flex items-center px-3 py-1 rounded-full self-start md:self-center`}>
                              {statusInfo.icon}
                              <span className="ml-1 text-sm font-medium">{statusInfo.label}</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                            <div>
                              <p className="text-xs text-gray-500">Applied on</p>
                              <p className="font-medium">{formatDate(application.appliedDate)}</p>
                            </div>
                            
                            <div>
                              <p className="text-xs text-gray-500">Status updated</p>
                              <p className="font-medium">{formatDate(application.statusUpdateDate)}</p>
                            </div>
                            
                            {application.interviewDate && (
                              <div>
                                <p className="text-xs text-gray-500">Interview scheduled</p>
                                <p className="font-medium flex items-center">
                                  <CalendarClock className="h-4 w-4 mr-1 text-brand-primary" />
                                  {formatDate(application.interviewDate)}
                                </p>
                              </div>
                            )}
                          </div>
                          
                          {application.feedback && (
                            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-500 mb-1">Feedback</p>
                              <p className="text-sm">{application.feedback}</p>
                            </div>
                          )}
                          
                          <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/jobs/${application.jobId}`}>
                                View Job
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                            
                            <div className="space-x-2">
                              <Button variant="outline" size="sm" className="text-brand-primary">
                                <MessageSquare className="mr-1 h-4 w-4" />
                                Contact Employer
                              </Button>
                              
                              {application.status === 'submitted' && (
                                <Button variant="default" size="sm">
                                  Update Application
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="bg-gray-50">
              <CardContent className="p-8 text-center">
                <div className="mb-4 text-gray-400">
                  <AlertCircle className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No applications found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || statusFilter
                    ? "No applications match your search criteria. Try adjusting your filters."
                    : "You haven't applied for any jobs yet. Start exploring opportunities!"}
                </p>
                <Button asChild>
                  <Link to="/jobs">Browse Jobs</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Applications;
