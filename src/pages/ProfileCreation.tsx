
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Upload, 
  Plus, 
  Trash2, 
  BookOpen, 
  Briefcase, 
  Database, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle 
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProfileCreation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  
  // Profile data
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    bio: '',
    linkedInUrl: '',
    githubUrl: '',
    portfolioUrl: '',
    resumeFile: null as File | null,
    profileImage: null as File | null,
    education: [
      {
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        currentlyStudying: false,
        description: ''
      }
    ],
    experience: [
      {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        description: ''
      }
    ],
    skills: [
      {
        name: '',
        category: '',
        level: 'intermediate' as 'beginner' | 'intermediate' | 'advanced' | 'expert'
      }
    ]
  });
  
  // Handle basic info form changes
  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };
  
  // Handle education form changes
  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedEducation = [...profileData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value
    };
    setProfileData({
      ...profileData,
      education: updatedEducation
    });
  };
  
  // Handle education checkbox change
  const handleEducationCheckboxChange = (index: number, checked: boolean) => {
    const updatedEducation = [...profileData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      currentlyStudying: checked,
      endDate: checked ? '' : updatedEducation[index].endDate
    };
    setProfileData({
      ...profileData,
      education: updatedEducation
    });
  };
  
  // Add education entry
  const addEducation = () => {
    setProfileData({
      ...profileData,
      education: [
        ...profileData.education,
        {
          institution: '',
          degree: '',
          fieldOfStudy: '',
          startDate: '',
          endDate: '',
          currentlyStudying: false,
          description: ''
        }
      ]
    });
  };
  
  // Remove education entry
  const removeEducation = (index: number) => {
    if (profileData.education.length === 1) {
      return; // Keep at least one education entry
    }
    const updatedEducation = [...profileData.education];
    updatedEducation.splice(index, 1);
    setProfileData({
      ...profileData,
      education: updatedEducation
    });
  };
  
  // Handle experience form changes
  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedExperience = [...profileData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value
    };
    setProfileData({
      ...profileData,
      experience: updatedExperience
    });
  };
  
  // Handle experience checkbox change
  const handleExperienceCheckboxChange = (index: number, checked: boolean) => {
    const updatedExperience = [...profileData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      currentlyWorking: checked,
      endDate: checked ? '' : updatedExperience[index].endDate
    };
    setProfileData({
      ...profileData,
      experience: updatedExperience
    });
  };
  
  // Add experience entry
  const addExperience = () => {
    setProfileData({
      ...profileData,
      experience: [
        ...profileData.experience,
        {
          company: '',
          position: '',
          location: '',
          startDate: '',
          endDate: '',
          currentlyWorking: false,
          description: ''
        }
      ]
    });
  };
  
  // Remove experience entry
  const removeExperience = (index: number) => {
    if (profileData.experience.length === 1) {
      return; // Keep at least one experience entry
    }
    const updatedExperience = [...profileData.experience];
    updatedExperience.splice(index, 1);
    setProfileData({
      ...profileData,
      experience: updatedExperience
    });
  };
  
  // Handle skills form changes
  const handleSkillChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedSkills = [...profileData.skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [name]: value
    };
    setProfileData({
      ...profileData,
      skills: updatedSkills
    });
  };
  
  // Add skill entry
  const addSkill = () => {
    setProfileData({
      ...profileData,
      skills: [
        ...profileData.skills,
        {
          name: '',
          category: '',
          level: 'intermediate' as 'beginner' | 'intermediate' | 'advanced' | 'expert'
        }
      ]
    });
  };
  
  // Remove skill entry
  const removeSkill = (index: number) => {
    if (profileData.skills.length === 1) {
      return; // Keep at least one skill entry
    }
    const updatedSkills = [...profileData.skills];
    updatedSkills.splice(index, 1);
    setProfileData({
      ...profileData,
      skills: updatedSkills
    });
  };
  
  // Handle file uploads
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resumeFile' | 'profileImage') => {
    if (e.target.files && e.target.files[0]) {
      setProfileData({
        ...profileData,
        [fileType]: e.target.files[0]
      });
      
      // In a real application, this is where we would trigger the NLP analysis of the resume
      if (fileType === 'resumeFile') {
        toast({
          title: "Resume uploaded!",
          description: "Our AI is analyzing your resume to extract skills and experience...",
        });
        
        // Mock the extraction of skills (in a real app, this would be done through NLP)
        setTimeout(() => {
          toast({
            title: "Resume analysis complete!",
            description: "We've extracted skills and experience from your resume.",
          });
          
          // Add some mock extracted skills
          setProfileData(prev => ({
            ...prev,
            skills: [
              { name: 'JavaScript', category: 'Programming', level: 'advanced' },
              { name: 'React', category: 'Frontend', level: 'intermediate' },
              { name: 'Python', category: 'Programming', level: 'intermediate' },
              ...prev.skills
            ]
          }));
        }, 2000);
      }
    }
  };
  
  // Next step
  const goToNextStep = () => {
    // Validate current step
    if (step === 1) {
      if (!profileData.fullName || !profileData.email || !profileData.location) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }
    }
    
    setStep(prev => prev + 1);
  };
  
  // Previous step
  const goToPrevStep = () => {
    setStep(prev => prev - 1);
  };
  
  // Submit profile
  const handleSubmit = () => {
    // In a real app, this would submit the form data to an API
    toast({
      title: "Profile Created!",
      description: "Your profile has been successfully created.",
    });
    
    // Navigate to the jobs page or dashboard
    navigate('/jobs');
  };
  
  return (
    <Layout>
      <div className="app-container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-3">Create Your Profile</h1>
            <p className="text-gray-600">
              Complete your profile to help us find the perfect job matches for you.
            </p>
          </div>
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-brand-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                  1
                </div>
                <span className="text-sm">Basic Info</span>
              </div>
              <div className="flex-grow mx-2 flex items-center">
                <div className={`h-1 w-full ${step >= 2 ? 'bg-brand-primary' : 'bg-gray-200'} rounded`}></div>
              </div>
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-brand-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                  2
                </div>
                <span className="text-sm">Education</span>
              </div>
              <div className="flex-grow mx-2 flex items-center">
                <div className={`h-1 w-full ${step >= 3 ? 'bg-brand-primary' : 'bg-gray-200'} rounded`}></div>
              </div>
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-brand-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                  3
                </div>
                <span className="text-sm">Experience</span>
              </div>
              <div className="flex-grow mx-2 flex items-center">
                <div className={`h-1 w-full ${step >= 4 ? 'bg-brand-primary' : 'bg-gray-200'} rounded`}></div>
              </div>
              <div className={`flex flex-col items-center ${step >= 4 ? 'text-brand-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 4 ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                  4
                </div>
                <span className="text-sm">Skills</span>
              </div>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={profileData.fullName}
                        onChange={handleBasicInfoChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleBasicInfoChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={profileData.phoneNumber}
                        onChange={handleBasicInfoChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location *
                      </label>
                      <Input
                        id="location"
                        name="location"
                        value={profileData.location}
                        onChange={handleBasicInfoChange}
                        required
                        placeholder="City, Country"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                        Professional Summary
                      </label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={profileData.bio}
                        onChange={handleBasicInfoChange}
                        placeholder="Write a brief summary about yourself and your career goals..."
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="linkedInUrl" className="block text-sm font-medium text-gray-700 mb-1">
                          LinkedIn Profile
                        </label>
                        <Input
                          id="linkedInUrl"
                          name="linkedInUrl"
                          value={profileData.linkedInUrl}
                          onChange={handleBasicInfoChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                      <div>
                        <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700 mb-1">
                          GitHub Profile
                        </label>
                        <Input
                          id="githubUrl"
                          name="githubUrl"
                          value={profileData.githubUrl}
                          onChange={handleBasicInfoChange}
                          placeholder="https://github.com/yourusername"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio Website
                      </label>
                      <Input
                        id="portfolioUrl"
                        name="portfolioUrl"
                        value={profileData.portfolioUrl}
                        onChange={handleBasicInfoChange}
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Resume / CV (PDF, DOC, DOCX)
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-brand-primary transition-colors">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="resume-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-brand-secondary focus-within:outline-none"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="resume-upload"
                                  name="resume-upload"
                                  type="file"
                                  className="sr-only"
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) => handleFileUpload(e, 'resumeFile')}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 10MB</p>
                            {profileData.resumeFile && (
                              <p className="text-xs text-green-500 font-medium">
                                Uploaded: {profileData.resumeFile.name}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Profile Picture (JPG, PNG)
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-brand-primary transition-colors">
                          <div className="space-y-1 text-center">
                            {profileData.profileImage ? (
                              <div className="mx-auto h-20 w-20 relative">
                                <img
                                  src={URL.createObjectURL(profileData.profileImage)}
                                  alt="Profile preview"
                                  className="h-20 w-20 rounded-full object-cover"
                                />
                                <button
                                  type="button"
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                  onClick={() => setProfileData({ ...profileData, profileImage: null })}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </button>
                              </div>
                            ) : (
                              <>
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="profile-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-brand-secondary focus-within:outline-none"
                                  >
                                    <span>Upload a photo</span>
                                    <input
                                      id="profile-upload"
                                      name="profile-upload"
                                      type="file"
                                      className="sr-only"
                                      accept="image/*"
                                      onChange={(e) => handleFileUpload(e, 'profileImage')}
                                    />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">JPG or PNG up to 5MB</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 2: Education */}
              {step === 2 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-brand-primary" />
                      Education
                    </h2>
                    <Button variant="outline" size="sm" onClick={addEducation}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Education
                    </Button>
                  </div>
                  
                  {profileData.education.map((edu, index) => (
                    <div 
                      key={index} 
                      className="p-4 border border-gray-200 rounded-md mb-4 hover:border-brand-primary transition-colors"
                    >
                      <div className="flex justify-between mb-3">
                        <h3 className="font-medium">Education #{index + 1}</h3>
                        {profileData.education.length > 1 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0 text-red-500" 
                            onClick={() => removeEducation(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Institution *
                          </label>
                          <Input
                            name="institution"
                            value={edu.institution}
                            onChange={(e) => handleEducationChange(index, e)}
                            required
                            placeholder="University or School Name"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Degree *
                            </label>
                            <Input
                              name="degree"
                              value={edu.degree}
                              onChange={(e) => handleEducationChange(index, e)}
                              required
                              placeholder="e.g., Bachelor's, Master's"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Field of Study *
                            </label>
                            <Input
                              name="fieldOfStudy"
                              value={edu.fieldOfStudy}
                              onChange={(e) => handleEducationChange(index, e)}
                              required
                              placeholder="e.g., Computer Science"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Start Date *
                            </label>
                            <Input
                              name="startDate"
                              type="date"
                              value={edu.startDate}
                              onChange={(e) => handleEducationChange(index, e)}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              End Date {edu.currentlyStudying ? '(Current)' : '*'}
                            </label>
                            <Input
                              name="endDate"
                              type="date"
                              value={edu.endDate}
                              onChange={(e) => handleEducationChange(index, e)}
                              disabled={edu.currentlyStudying}
                              required={!edu.currentlyStudying}
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <input
                            id={`currently-studying-${index}`}
                            type="checkbox"
                            className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
                            checked={edu.currentlyStudying}
                            onChange={(e) => handleEducationCheckboxChange(index, e.target.checked)}
                          />
                          <label
                            htmlFor={`currently-studying-${index}`}
                            className="text-sm font-medium text-gray-700"
                          >
                            I am currently studying here
                          </label>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description (Optional)
                          </label>
                          <Textarea
                            name="description"
                            value={edu.description}
                            onChange={(e) => handleEducationChange(index, e)}
                            placeholder="Describe your achievements, coursework, or thesis..."
                            className="min-h-[80px]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Step 3: Experience */}
              {step === 3 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-brand-primary" />
                      Work Experience
                    </h2>
                    <Button variant="outline" size="sm" onClick={addExperience}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Experience
                    </Button>
                  </div>
                  
                  {profileData.experience.map((exp, index) => (
                    <div 
                      key={index} 
                      className="p-4 border border-gray-200 rounded-md mb-4 hover:border-brand-primary transition-colors"
                    >
                      <div className="flex justify-between mb-3">
                        <h3 className="font-medium">Experience #{index + 1}</h3>
                        {profileData.experience.length > 1 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0 text-red-500" 
                            onClick={() => removeExperience(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company/Organization *
                          </label>
                          <Input
                            name="company"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, e)}
                            required
                            placeholder="Company Name"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Position *
                            </label>
                            <Input
                              name="position"
                              value={exp.position}
                              onChange={(e) => handleExperienceChange(index, e)}
                              required
                              placeholder="Job Title"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Location
                            </label>
                            <Input
                              name="location"
                              value={exp.location}
                              onChange={(e) => handleExperienceChange(index, e)}
                              placeholder="City, Country"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Start Date *
                            </label>
                            <Input
                              name="startDate"
                              type="date"
                              value={exp.startDate}
                              onChange={(e) => handleExperienceChange(index, e)}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              End Date {exp.currentlyWorking ? '(Current)' : '*'}
                            </label>
                            <Input
                              name="endDate"
                              type="date"
                              value={exp.endDate}
                              onChange={(e) => handleExperienceChange(index, e)}
                              disabled={exp.currentlyWorking}
                              required={!exp.currentlyWorking}
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <input
                            id={`currently-working-${index}`}
                            type="checkbox"
                            className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
                            checked={exp.currentlyWorking}
                            onChange={(e) => handleExperienceCheckboxChange(index, e.target.checked)}
                          />
                          <label
                            htmlFor={`currently-working-${index}`}
                            className="text-sm font-medium text-gray-700"
                          >
                            I am currently working here
                          </label>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description *
                          </label>
                          <Textarea
                            name="description"
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(index, e)}
                            required
                            placeholder="Describe your responsibilities and achievements..."
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Step 4: Skills */}
              {step === 4 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold flex items-center">
                      <Database className="h-5 w-5 mr-2 text-brand-primary" />
                      Skills
                    </h2>
                    <Button variant="outline" size="sm" onClick={addSkill}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Skill
                    </Button>
                  </div>
                  
                  <div className="bg-brand-light rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-brand-primary">NLP-Powered Skills Detection</h3>
                        <p className="text-sm text-gray-600">
                          Upload your resume in the first step to let our AI automatically detect your skills and experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {profileData.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="p-4 border border-gray-200 rounded-md hover:border-brand-primary transition-colors"
                      >
                        <div className="flex justify-between mb-3">
                          <h3 className="font-medium">Skill #{index + 1}</h3>
                          {profileData.skills.length > 1 && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0 text-red-500" 
                              onClick={() => removeSkill(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="md:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Skill Name *
                            </label>
                            <Input
                              name="name"
                              value={skill.name}
                              onChange={(e) => handleSkillChange(index, e)}
                              required
                              placeholder="e.g., JavaScript"
                            />
                          </div>
                          <div className="md:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Category
                            </label>
                            <Input
                              name="category"
                              value={skill.category}
                              onChange={(e) => handleSkillChange(index, e)}
                              placeholder="e.g., Programming"
                            />
                          </div>
                          <div className="md:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Proficiency Level
                            </label>
                            <Select 
                              value={skill.level} 
                              onValueChange={(value) => {
                                const e = { 
                                  target: { 
                                    name: 'level', 
                                    value 
                                  } 
                                } as unknown as React.ChangeEvent<HTMLSelectElement>;
                                handleSkillChange(index, e);
                              }}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="beginner">Beginner</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="advanced">Advanced</SelectItem>
                                <SelectItem value="expert">Expert</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <Button variant="outline" onClick={goToPrevStep}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            ) : (
              <div></div> // Empty div to maintain justify-between
            )}
            
            {step < 4 ? (
              <Button onClick={goToNextStep}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                Complete Profile
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileCreation;
