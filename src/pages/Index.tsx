
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, Users, Award, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { mockJobs } from '@/utils/mockData';

const Index = () => {
  const featuredJobs = mockJobs.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-16">
        <div className="app-container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Connect with Your Perfect Career Match
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              AI-powered matching to connect graduates with their dream jobs. 
              Let our intelligent system find the perfect match for your skills and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-primary hover:bg-gray-100" size="lg" asChild>
                <Link to="/jobs">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Jobs
                </Link>
              </Button>
              <Button className="bg-transparent border-2 border-white hover:bg-white/10" size="lg" asChild>
                <Link to="/register">
                  <Users className="mr-2 h-5 w-5" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="bg-white py-12">
        <div className="app-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 -mt-20 relative z-10">
              <h2 className="text-xl font-semibold mb-4 text-center">Find Your Perfect Job</h2>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-grow">
                  <Input 
                    placeholder="Job title, keywords, or company" 
                    className="w-full" 
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <Input 
                    placeholder="Location" 
                    className="w-full" 
                  />
                </div>
                <Button className="w-full md:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12 bg-gray-50">
        <div className="app-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Featured Jobs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover opportunities from top employers looking for talented graduates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{job.location}</p>
                      </div>
                      <div className="bg-gray-100 rounded-full p-2">
                        <Briefcase className="h-5 w-5 text-brand-primary" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className="text-xs bg-brand-light text-brand-primary rounded-full px-2 py-1">
                          {req.split(' ').slice(0, 3).join(' ')}...
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        {job.salaryRange ? `£${job.salaryRange.min.toLocaleString()} - £${job.salaryRange.max.toLocaleString()}` : 'Competitive salary'}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/jobs/${job.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="app-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes finding the perfect job match simple
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-light rounded-full p-4 inline-flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up and build your comprehensive profile. Upload your CV and our AI will automatically extract your skills and experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-light rounded-full p-4 inline-flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
              <p className="text-gray-600">
                Our intelligent matching algorithm analyzes your profile and finds the jobs that best match your skills, experience, and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-light rounded-full p-4 inline-flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply & Succeed</h3>
              <p className="text-gray-600">
                Apply to your matched jobs with one click and track your applications. Connect with employers and take the next step in your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16 bg-gray-50">
        <div className="app-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">For Employers</h2>
              <p className="text-gray-600 mb-6">
                Find the perfect graduate talent for your company using our AI-powered matching platform. Save time and resources by focusing only on the most qualified candidates.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-brand-light rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Post jobs and reach thousands of qualified graduates</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-light rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">AI-powered candidate matching based on skills and experience</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-light rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Advanced filtering and search to find the perfect fit</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-light rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Direct messaging with candidates</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/register?role=employer">Get Started</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Employers using the platform" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="app-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of graduates and employers who have found their perfect match on ConnectMatch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-primary hover:bg-gray-100" size="lg" asChild>
              <Link to="/register?role=candidate">Sign Up as Candidate</Link>
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10" size="lg" asChild>
              <Link to="/register?role=employer">Sign Up as Employer</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
