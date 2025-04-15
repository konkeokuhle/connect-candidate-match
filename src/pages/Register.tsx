import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  UserIcon, 
  BuildingIcon, 
  ChevronRight, 
  Eye, 
  EyeOff,
  CheckCircle 
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') === 'employer' ? 'employer' : 'candidate';
  
  const [activeTab, setActiveTab] = useState(initialRole);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Candidate fields
    candidateFullName: '',
    candidateEmail: '',
    candidatePassword: '',
    candidateConfirmPassword: '',
    
    // Employer fields
    companyName: '',
    contactName: '',
    employerEmail: '',
    employerPassword: '',
    employerConfirmPassword: ''
  });
  
  const { toast } = useToast();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.candidatePassword !== formData.candidateConfirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would call an API to register the user
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', 'candidate');
    localStorage.setItem('userName', formData.candidateFullName);
    localStorage.setItem('userEmail', formData.candidateEmail);
    
    toast({
      title: "Registration Successful!",
      description: "Your account has been created. Welcome to ConnectMatch!",
    });
    
    // Navigate to the dashboard or profile completion page
    navigate('/profile');
  };
  
  const handleEmployerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.employerPassword !== formData.employerConfirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would call an API to register the employer
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', 'employer');
    localStorage.setItem('companyName', formData.companyName);
    localStorage.setItem('contactName', formData.contactName);
    localStorage.setItem('userEmail', formData.employerEmail);
    
    toast({
      title: "Registration Successful!",
      description: "Your company account has been created. Welcome to ConnectMatch!",
    });
    
    // Navigate to the dashboard or profile completion page
    navigate('/employer-dashboard');
  };
  
  return (
    <Layout>
      <div className="app-container py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Join ConnectMatch</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="candidate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="candidate" className="flex items-center justify-center space-x-2">
                <UserIcon className="h-4 w-4" />
                <span>Graduate</span>
              </TabsTrigger>
              <TabsTrigger value="employer" className="flex items-center justify-center space-x-2">
                <BuildingIcon className="h-4 w-4" />
                <span>Employer</span>
              </TabsTrigger>
            </TabsList>
            
            <Card>
              <CardContent className="pt-6">
                <TabsContent value="candidate">
                  <form onSubmit={handleCandidateSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="candidateFullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input
                          id="candidateFullName"
                          name="candidateFullName"
                          value={formData.candidateFullName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="candidateEmail" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input
                          id="candidateEmail"
                          name="candidateEmail"
                          type="email"
                          value={formData.candidateEmail}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="candidatePassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <Input
                            id="candidatePassword"
                            name="candidatePassword"
                            type={showPassword ? "text" : "password"}
                            value={formData.candidatePassword}
                            onChange={handleInputChange}
                            required
                            placeholder="Create a password"
                            className="pr-10"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="candidateConfirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password
                        </label>
                        <Input
                          id="candidateConfirmPassword"
                          name="candidateConfirmPassword"
                          type="password"
                          value={formData.candidateConfirmPassword}
                          onChange={handleInputChange}
                          required
                          placeholder="Confirm your password"
                        />
                      </div>
                      
                      <div className="pt-2">
                        <Button type="submit" className="w-full">
                          Create Account
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="employer">
                  <form onSubmit={handleEmployerSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Person
                        </label>
                        <Input
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="employerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input
                          id="employerEmail"
                          name="employerEmail"
                          type="email"
                          value={formData.employerEmail}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your business email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="employerPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <Input
                            id="employerPassword"
                            name="employerPassword"
                            type={showPassword ? "text" : "password"}
                            value={formData.employerPassword}
                            onChange={handleInputChange}
                            required
                            placeholder="Create a password"
                            className="pr-10"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="employerConfirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password
                        </label>
                        <Input
                          id="employerConfirmPassword"
                          name="employerConfirmPassword"
                          type="password"
                          value={formData.employerConfirmPassword}
                          onChange={handleInputChange}
                          required
                          placeholder="Confirm your password"
                        />
                      </div>
                      
                      <div className="pt-2">
                        <Button type="submit" className="w-full">
                          Create Company Account
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </form>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-brand-primary hover:underline">
                Log in
              </Link>
            </p>
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Why Join ConnectMatch?
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-brand-primary">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2">
                  {activeTab === 'candidate' 
                    ? 'AI-powered job matching to find opportunities that fit your skills'
                    : 'Access to a pool of qualified graduates and postgraduates'
                  }
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-brand-primary">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2">
                  {activeTab === 'candidate' 
                    ? 'Easily track your job applications and interviews'
                    : 'NLP-powered candidate matching and filtering'
                  }
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-brand-primary">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2">
                  {activeTab === 'candidate' 
                    ? 'Direct messaging with potential employers'
                    : 'Comprehensive analytics and reporting tools'
                  }
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
