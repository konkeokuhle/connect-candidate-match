
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, BriefcaseBusiness } from 'lucide-react';
import { notifyNewJob } from '@/utils/notifications';

const PostJob = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    jobType: 'full-time',
    description: '',
    requirements: '',
    responsibilities: '',
    minSalary: 15000,
    maxSalary: 30000,
    applicationDeadline: new Date(new Date().setDate(new Date().getDate() + 30))
  });
  
  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');
    
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to post a job.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    } 
    
    if (userRole !== 'employer') {
      toast({
        title: "Access denied",
        description: "Only employers can post jobs.",
        variant: "destructive",
      });
      navigate('/');
      return;
    }
    
    // Pre-fill company name if available
    const companyName = localStorage.getItem('companyName');
    if (companyName) {
      setFormData(prev => ({
        ...prev,
        company: companyName
      }));
    }
  }, [navigate, toast]);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData({
        ...formData,
        applicationDeadline: date
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would call an API to create the job posting
    console.info("Job posting values:", formData);
    
    // Simulating success response
    toast({
      title: "Job Posted Successfully",
      description: "Your job has been published and is now visible to candidates.",
    });
    
    // Simulate real-time notification to candidates
    notifyNewJob({
      title: formData.title,
      company: formData.company
    });
    
    // Navigate to the manage jobs page
    navigate('/employer-dashboard');
  };
  
  return (
    <Layout>
      <div className="app-container py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-brand-light p-3 rounded-full mr-4">
              <BriefcaseBusiness className="h-8 w-8 text-brand-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Post a New Job</h1>
              <p className="text-gray-600">Find the perfect candidate for your open position</p>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>
                Fill in the information below to create your job posting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Job Title*
                    </label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleTextChange}
                      placeholder="e.g. Frontend Developer"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name*
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleTextChange}
                      placeholder="e.g. Tech Solutions Ltd"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Location*
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleTextChange}
                      placeholder="e.g. Durban, South Africa"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="jobType" className="text-sm font-medium">
                      Job Type*
                    </label>
                    <Select
                      value={formData.jobType}
                      onValueChange={(value) => handleSelectChange('jobType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Job Description*
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleTextChange}
                    placeholder="Provide a detailed description of the job..."
                    required
                    rows={6}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="requirements" className="text-sm font-medium">
                      Requirements*
                    </label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleTextChange}
                      placeholder="List the key requirements for this position..."
                      required
                      rows={5}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="responsibilities" className="text-sm font-medium">
                      Responsibilities*
                    </label>
                    <Textarea
                      id="responsibilities"
                      name="responsibilities"
                      value={formData.responsibilities}
                      onChange={handleTextChange}
                      placeholder="List the key responsibilities for this position..."
                      required
                      rows={5}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2 md:col-span-1">
                    <label htmlFor="minSalary" className="text-sm font-medium">
                      Minimum Salary (ZAR)*
                    </label>
                    <Input
                      id="minSalary"
                      name="minSalary"
                      type="number"
                      value={formData.minSalary}
                      onChange={handleTextChange}
                      placeholder="e.g. 15000"
                      min={0}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-1">
                    <label htmlFor="maxSalary" className="text-sm font-medium">
                      Maximum Salary (ZAR)*
                    </label>
                    <Input
                      id="maxSalary"
                      name="maxSalary"
                      type="number"
                      value={formData.maxSalary}
                      onChange={handleTextChange}
                      placeholder="e.g. 30000"
                      min={0}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-1">
                    <label htmlFor="applicationDeadline" className="text-sm font-medium">
                      Application Deadline*
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {format(formData.applicationDeadline, "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.applicationDeadline}
                          onSelect={handleDateChange}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-end space-x-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate('/employer-dashboard')}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      Post Job
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PostJob;
