
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, MapPin, Clock, Filter, ChevronDown } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { mockJobs } from '@/utils/mockData';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  
  // Filter states
  const [jobType, setJobType] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState('');
  
  const handleSearch = () => {
    // In a real application, this would call an API with the search parameters
    // For now, we'll just filter the mock data
    const filtered = mockJobs.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesLocation = location === '' || 
        job.location.toLowerCase().includes(location.toLowerCase());
        
      const matchesJobType = jobType.length === 0 || 
        jobType.includes(job.jobType);
        
      let matchesSalary = true;
      if (salaryRange && job.salaryRange) {
        const [min, max] = salaryRange.split('-').map(s => parseInt(s.replace(/\D/g, '')));
        matchesSalary = job.salaryRange.min <= max && job.salaryRange.max >= min;
      }
      
      return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
    });
    
    setFilteredJobs(filtered);
  };
  
  const handleJobTypeChange = (type: string) => {
    if (jobType.includes(type)) {
      setJobType(jobType.filter(t => t !== type));
    } else {
      setJobType([...jobType, type]);
    }
  };
  
  return (
    <Layout>
      {/* Search Header */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary py-10">
        <div className="app-container">
          <h1 className="text-white text-3xl font-bold mb-6 text-center">Find Your Perfect Job</h1>
          <div className="bg-white rounded-xl shadow-lg p-5 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow">
                <Input 
                  placeholder="Job title, keywords, or company" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full" 
                />
              </div>
              <div className="w-full md:w-1/3">
                <Input 
                  placeholder="Location" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full" 
                />
              </div>
              <Button onClick={handleSearch}>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Listings */}
      <section className="py-10 bg-gray-50">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button variant="ghost" size="sm" className="text-sm text-gray-500">
                      Reset
                    </Button>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="job-type">
                      <AccordionTrigger className="text-base font-medium">Job Type</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="full-time" 
                              checked={jobType.includes('full-time')}
                              onCheckedChange={() => handleJobTypeChange('full-time')}
                            />
                            <label 
                              htmlFor="full-time" 
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Full-time
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="part-time" 
                              checked={jobType.includes('part-time')}
                              onCheckedChange={() => handleJobTypeChange('part-time')}
                            />
                            <label 
                              htmlFor="part-time" 
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Part-time
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="contract" 
                              checked={jobType.includes('contract')}
                              onCheckedChange={() => handleJobTypeChange('contract')}
                            />
                            <label 
                              htmlFor="contract" 
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Contract
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="internship" 
                              checked={jobType.includes('internship')}
                              onCheckedChange={() => handleJobTypeChange('internship')}
                            />
                            <label 
                              htmlFor="internship" 
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Internship
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="remote" 
                              checked={jobType.includes('remote')}
                              onCheckedChange={() => handleJobTypeChange('remote')}
                            />
                            <label 
                              htmlFor="remote" 
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Remote
                            </label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="salary">
                      <AccordionTrigger className="text-base font-medium">Salary Range</AccordionTrigger>
                      <AccordionContent>
                        <Select value={salaryRange} onValueChange={setSalaryRange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-30000">Up to £30,000</SelectItem>
                            <SelectItem value="30000-50000">£30,000 - £50,000</SelectItem>
                            <SelectItem value="50000-70000">£50,000 - £70,000</SelectItem>
                            <SelectItem value="70000-100000">£70,000 - £100,000</SelectItem>
                            <SelectItem value="100000-999999">£100,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="date-posted">
                      <AccordionTrigger className="text-base font-medium">Date Posted</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="last-24h" />
                            <label 
                              htmlFor="last-24h" 
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Last 24 hours
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="last-week" />
                            <label 
                              htmlFor="last-week" 
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Last week
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="last-month" />
                            <label 
                              htmlFor="last-month" 
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Last month
                            </label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button className="w-full mt-4" onClick={handleSearch}>
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Job Results */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">{filteredJobs.length} jobs found</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="date">Date Posted</SelectItem>
                      <SelectItem value="salary-high">Salary (High to Low)</SelectItem>
                      <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Mobile Filters */}
              <div className="lg:hidden mb-4">
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </div>
              
              {/* Active Filters */}
              {(jobType.length > 0 || salaryRange) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {jobType.map(type => (
                    <Badge key={type} variant="secondary" className="flex items-center gap-1">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                      <button className="ml-1 text-xs" onClick={() => handleJobTypeChange(type)}>×</button>
                    </Badge>
                  ))}
                  {salaryRange && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Salary: {salaryRange.replace('-', ' - £')}
                      <button className="ml-1 text-xs" onClick={() => setSalaryRange('')}>×</button>
                    </Badge>
                  )}
                  <Button variant="ghost" size="sm" className="text-xs" onClick={() => {
                    setJobType([]);
                    setSalaryRange('');
                  }}>
                    Clear all
                  </Button>
                </div>
              )}
              
              {/* Job Cards */}
              <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between">
                          <div>
                            <Link to={`/jobs/${job.id}`} className="text-lg font-semibold hover:text-brand-primary transition-colors">
                              {job.title}
                            </Link>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                              <Briefcase className="h-4 w-4 mr-1" />
                              <span>Company Name</span>
                              <span className="mx-2">•</span>
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                          <Badge variant={job.jobType === 'full-time' ? 'default' : 'secondary'}>
                            {job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1)}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 my-4 line-clamp-2">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <Badge key={index} variant="outline" className="bg-brand-light text-brand-primary border-brand-light">
                              {req.split(' ').slice(0, 3).join(' ')}...
                            </Badge>
                          ))}
                          {job.requirements.length > 3 && (
                            <Badge variant="outline" className="bg-transparent">
                              +{job.requirements.length - 3} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Posted {Math.floor(Math.random() * 30) + 1} days ago</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {job.salaryRange && (
                              <span className="text-sm font-medium">
                                £{job.salaryRange.min.toLocaleString()} - £{job.salaryRange.max.toLocaleString()}
                              </span>
                            )}
                            <Button asChild>
                              <Link to={`/jobs/${job.id}`}>View Job</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500 mb-4">No jobs found matching your criteria</p>
                    <Button variant="outline" onClick={() => {
                      setSearchTerm('');
                      setLocation('');
                      setJobType([]);
                      setSalaryRange('');
                      setFilteredJobs(mockJobs);
                    }}>
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
