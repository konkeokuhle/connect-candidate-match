
import React, { useState } from 'react';
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
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  PlusCircle, 
  Trash2, 
  FileText, 
  Download, 
  Wand2, 
  Briefcase, 
  GraduationCap, 
  Code,
  Save,
  UserCircle
} from 'lucide-react';
import { educationLevels, experienceLevels, popularSkills } from '@/utils/constants';

const CVBuilder = () => {
  const { toast } = useToast();
  
  // Personal information
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    portfolio: '',
    objective: ''
  });
  
  // Education
  const [education, setEducation] = useState([
    { id: 1, institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', description: '' }
  ]);
  
  // Experience
  const [experience, setExperience] = useState([
    { id: 1, role: '', company: '', location: '', startDate: '', endDate: '', description: '' }
  ]);
  
  // Skills
  const [skills, setSkills] = useState([
    { id: 1, name: '', level: 'intermediate' }
  ]);
  
  // CV Preview state
  const [previewMode, setPreviewMode] = useState(false);
  
  // AI Analysis state
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  
  // AI CV generation
  const generateAIContent = (section: string) => {
    setAiLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setAiLoading(false);
      
      // Mock suggestions based on section
      if (section === 'objective') {
        const suggestions = [
          "Dedicated Computer Science graduate from Durban University of Technology with practical experience in software development. Seeking a challenging role in web development where I can apply my skills in JavaScript and React to create innovative solutions.",
          "Motivated IT professional with a degree from DUT, eager to leverage my technical skills and academic knowledge in a growth-oriented software engineering position. Committed to delivering high-quality code and continuous learning."
        ];
        setAiSuggestions(suggestions);
      } else if (section === 'experience') {
        const suggestions = [
          "Implemented responsive UI components using React and TypeScript, resulting in a 25% improvement in user engagement metrics.",
          "Collaborated with a team of 5 developers to refactor legacy code, improving application performance by 40% and reducing load times significantly.",
          "Participated in daily stand-up meetings and bi-weekly sprint planning, effectively using Agile methodologies to deliver projects on time."
        ];
        setAiSuggestions(suggestions);
      } else if (section === 'skills') {
        const suggestions = [
          { name: 'React', level: 'advanced' },
          { name: 'TypeScript', level: 'intermediate' },
          { name: 'Node.js', level: 'intermediate' },
          { name: 'REST API Development', level: 'intermediate' },
          { name: 'Git & GitHub', level: 'advanced' }
        ];
        // Update skills directly as these are specific structured data
        const updatedSkills = [...skills];
        suggestions.forEach((skill, index) => {
          if (index < skills.length) {
            updatedSkills[index] = { ...updatedSkills[index], ...skill };
          } else {
            updatedSkills.push({ id: Date.now() + index, ...skill });
          }
        });
        setSkills(updatedSkills);
        toast({
          title: "Skills updated with AI suggestions",
          description: "Your skills section has been enhanced with relevant industry skills.",
        });
      }
    }, 1500);
  };
  
  // AI full CV generation
  const generateFullCV = () => {
    setAiLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Generate mock full CV data
      setPersonalInfo({
        fullName: 'Jane Dlamini',
        email: 'jane.dlamini@example.com',
        phone: '079 123 4567',
        location: 'Durban, South Africa',
        linkedIn: 'linkedin.com/in/janedlamini',
        portfolio: 'janedlamini.dev',
        objective: 'Recent Computer Science graduate from Durban University of Technology with a passion for web development and AI. Seeking a challenging role where I can leverage my technical skills to create innovative solutions while growing professionally.'
      });
      
      setEducation([
        {
          id: 1,
          institution: 'Durban University of Technology',
          degree: 'Bachelor of Science',
          fieldOfStudy: 'Computer Science',
          startDate: '2019-01',
          endDate: '2022-12',
          description: 'Graduated with distinction. Final year project focused on developing an AI-powered job matching system for graduates.'
        }
      ]);
      
      setExperience([
        {
          id: 1,
          role: 'Junior Web Developer (Internship)',
          company: 'Tech Innovations SA',
          location: 'Durban',
          startDate: '2022-01',
          endDate: '2022-06',
          description: 'Assisted in developing responsive websites using React and Node.js. Participated in Agile development processes and contributed to the front-end development of a client portal.'
        },
        {
          id: 2,
          role: 'IT Assistant (Part-time)',
          company: 'DUT IT Services',
          location: 'Durban',
          startDate: '2020-06',
          endDate: '2021-12',
          description: 'Provided technical support to students and staff. Assisted in maintaining and troubleshooting campus network systems. Developed a simple ticketing system to improve support request tracking.'
        }
      ]);
      
      setSkills([
        { id: 1, name: 'JavaScript/React', level: 'advanced' },
        { id: 2, name: 'HTML/CSS', level: 'advanced' },
        { id: 3, name: 'Python', level: 'intermediate' },
        { id: 4, name: 'Node.js', level: 'intermediate' },
        { id: 5, name: 'Git', level: 'intermediate' },
        { id: 6, name: 'Database Management (SQL)', level: 'intermediate' },
        { id: 7, name: 'Problem Solving', level: 'advanced' },
        { id: 8, name: 'Teamwork', level: 'advanced' }
      ]);
      
      setAiLoading(false);
      
      toast({
        title: "CV Generated Successfully",
        description: "AI has created a sample CV. You can now edit it to personalize the content.",
      });
    }, 2000);
  };
  
  // Add new education entry
  const addEducation = () => {
    setEducation([...education, { 
      id: Date.now(), 
      institution: '', 
      degree: '', 
      fieldOfStudy: '', 
      startDate: '', 
      endDate: '', 
      description: '' 
    }]);
  };
  
  // Remove education entry
  const removeEducation = (id: number) => {
    if (education.length > 1) {
      setEducation(education.filter(edu => edu.id !== id));
    } else {
      toast({
        title: "Cannot Remove",
        description: "You must have at least one education entry.",
        variant: "destructive",
      });
    }
  };
  
  // Add new experience entry
  const addExperience = () => {
    setExperience([...experience, { 
      id: Date.now(), 
      role: '', 
      company: '', 
      location: '', 
      startDate: '', 
      endDate: '', 
      description: '' 
    }]);
  };
  
  // Remove experience entry
  const removeExperience = (id: number) => {
    if (experience.length > 1) {
      setExperience(experience.filter(exp => exp.id !== id));
    } else {
      toast({
        title: "Cannot Remove",
        description: "You must have at least one experience entry.",
        variant: "destructive",
      });
    }
  };
  
  // Add new skill
  const addSkill = () => {
    setSkills([...skills, { id: Date.now(), name: '', level: 'intermediate' }]);
  };
  
  // Remove skill
  const removeSkill = (id: number) => {
    if (skills.length > 1) {
      setSkills(skills.filter(skill => skill.id !== id));
    } else {
      toast({
        title: "Cannot Remove",
        description: "You must have at least one skill entry.",
        variant: "destructive",
      });
    }
  };
  
  // Handle personal info changes
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  
  // Handle education changes
  const handleEducationChange = (id: number, field: string, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };
  
  // Handle experience changes
  const handleExperienceChange = (id: number, field: string, value: string) => {
    setExperience(experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };
  
  // Handle skill changes
  const handleSkillChange = (id: number, field: string, value: string) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };
  
  // Save CV
  const saveCV = () => {
    // In a real app, this would save to a database
    toast({
      title: "CV Saved",
      description: "Your CV has been saved successfully.",
    });
  };
  
  // Download CV
  const downloadCV = () => {
    // In a real app, this would generate a PDF
    toast({
      title: "CV Downloaded",
      description: "Your CV has been downloaded as a PDF.",
    });
  };
  
  // CV Analysis with Named Entity Recognition (NER)
  const analyzeCV = () => {
    setAiLoading(true);
    
    // Simulate AI processing with NER
    setTimeout(() => {
      setAiLoading(false);
      
      // Collect all text for analysis
      const allText = `
        ${personalInfo.objective}
        ${experience.map(exp => `${exp.role} ${exp.company} ${exp.description}`).join(' ')}
        ${education.map(edu => `${edu.institution} ${edu.degree} ${edu.fieldOfStudy} ${edu.description}`).join(' ')}
        ${skills.map(skill => skill.name).join(' ')}
      `;
      
      // Simulate NER finding entities in the CV
      const entities = {
        skills: ['JavaScript', 'React', 'Web Development', 'Python'],
        companies: ['Tech Innovations SA', 'DUT IT Services'],
        roles: ['Web Developer', 'IT Assistant'],
        education: ['Computer Science', 'Durban University of Technology'],
        locations: ['Durban', 'South Africa']
      };
      
      // Show analysis results
      toast({
        title: "CV Analysis Complete",
        description: "Named Entity Recognition has identified key elements in your CV.",
      });
      
      // Display suggestions based on NER analysis
      setAiSuggestions([
        "Consider adding more detail about your role at Tech Innovations SA to highlight your JavaScript skills.",
        "Your CV shows strong technical skills but could benefit from more emphasis on soft skills like communication and teamwork.",
        "Try to quantify your achievements with specific metrics or percentages for greater impact.",
        "Consider reorganizing your skills section to prioritize web development skills that match current job market demands."
      ]);
    }, 2000);
  };
  
  return (
    <Layout>
      <div className="app-container py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">CV Builder</h1>
              <p className="text-gray-600">Create a professional CV with our AI-powered tools</p>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="outline"
                onClick={() => setPreviewMode(!previewMode)}
              >
                {previewMode ? 'Edit Mode' : 'Preview Mode'}
              </Button>
              
              <Button 
                variant="secondary"
                onClick={saveCV}
              >
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              
              <Button 
                onClick={downloadCV}
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
          
          {!previewMode ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* CV Editor */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="personal">
                  <TabsList className="grid grid-cols-5 mb-6">
                    <TabsTrigger value="personal" className="flex items-center justify-center">
                      <UserCircle className="h-4 w-4 mr-2" />
                      <span>Personal</span>
                    </TabsTrigger>
                    <TabsTrigger value="education" className="flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>Education</span>
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="flex items-center justify-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Experience</span>
                    </TabsTrigger>
                    <TabsTrigger value="skills" className="flex items-center justify-center">
                      <Code className="h-4 w-4 mr-2" />
                      <span>Skills</span>
                    </TabsTrigger>
                    <TabsTrigger value="preview" className="flex items-center justify-center">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Preview</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <Card>
                    <CardContent className="pt-6">
                      {/* Personal Information Tab */}
                      <TabsContent value="personal">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Personal Information</h2>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => generateAIContent('objective')}
                              disabled={aiLoading}
                            >
                              <Wand2 className="mr-2 h-4 w-4" />
                              {aiLoading ? 'Generating...' : 'Generate Objective'}
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name*
                              </label>
                              <Input
                                name="fullName"
                                value={personalInfo.fullName}
                                onChange={handlePersonalInfoChange}
                                placeholder="e.g. John Doe"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email*
                              </label>
                              <Input
                                name="email"
                                type="email"
                                value={personalInfo.email}
                                onChange={handlePersonalInfoChange}
                                placeholder="e.g. john.doe@example.com"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone*
                              </label>
                              <Input
                                name="phone"
                                value={personalInfo.phone}
                                onChange={handlePersonalInfoChange}
                                placeholder="e.g. 071 234 5678"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Location*
                              </label>
                              <Input
                                name="location"
                                value={personalInfo.location}
                                onChange={handlePersonalInfoChange}
                                placeholder="e.g. Durban, South Africa"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                LinkedIn URL
                              </label>
                              <Input
                                name="linkedIn"
                                value={personalInfo.linkedIn}
                                onChange={handlePersonalInfoChange}
                                placeholder="e.g. linkedin.com/in/johndoe"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Portfolio URL
                              </label>
                              <Input
                                name="portfolio"
                                value={personalInfo.portfolio}
                                onChange={handlePersonalInfoChange}
                                placeholder="e.g. johndoe.com"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Professional Objective*
                            </label>
                            <Textarea
                              name="objective"
                              value={personalInfo.objective}
                              onChange={handlePersonalInfoChange}
                              placeholder="Brief summary of your career goals and qualifications..."
                              className="min-h-[100px]"
                            />
                          </div>
                          
                          {/* AI Suggestions */}
                          {aiSuggestions.length > 0 && (
                            <div className="mt-4 p-4 bg-brand-light rounded-lg">
                              <h3 className="font-semibold mb-2 flex items-center">
                                <Wand2 className="mr-2 h-4 w-4 text-brand-primary" />
                                AI Suggestions
                              </h3>
                              <div className="space-y-2">
                                {aiSuggestions.map((suggestion, index) => (
                                  <div key={index} className="p-2 bg-white rounded border border-gray-200">
                                    <p className="text-sm">{suggestion}</p>
                                    <Button
                                      variant="link"
                                      size="sm"
                                      className="mt-1 p-0 h-auto text-brand-primary"
                                      onClick={() => {
                                        setPersonalInfo({
                                          ...personalInfo,
                                          objective: suggestion
                                        });
                                        setAiSuggestions([]);
                                      }}
                                    >
                                      Use this suggestion
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </TabsContent>

                      {/* Education Tab */}
                      <TabsContent value="education">
                        <div className="space-y-6">
                          <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Education</h2>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={addEducation}
                            >
                              <PlusCircle className="mr-2 h-4 w-4" />
                              Add Education
                            </Button>
                          </div>
                          
                          {education.map((edu, index) => (
                            <div key={edu.id} className="p-4 border border-gray-200 rounded-lg">
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="font-medium">Education #{index + 1}</h3>
                                {education.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeEducation(edu.id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Institution*
                                  </label>
                                  <Input
                                    value={edu.institution}
                                    onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                                    placeholder="e.g. Durban University of Technology"
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Degree*
                                  </label>
                                  <Select
                                    value={edu.degree}
                                    onValueChange={(value) => handleEducationChange(edu.id, 'degree', value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a degree" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {educationLevels.map((level) => (
                                        <SelectItem key={level.value} value={level.value}>
                                          {level.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Field of Study*
                                  </label>
                                  <Input
                                    value={edu.fieldOfStudy}
                                    onChange={(e) => handleEducationChange(edu.id, 'fieldOfStudy', e.target.value)}
                                    placeholder="e.g. Computer Science"
                                  />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-2">
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Start Date*
                                    </label>
                                    <Input
                                      type="month"
                                      value={edu.startDate}
                                      onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
                                    />
                                  </div>
                                  
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      End Date (or expected)
                                    </label>
                                    <Input
                                      type="month"
                                      value={edu.endDate}
                                      onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                                    />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Description (achievements, activities, etc.)
                                </label>
                                <Textarea
                                  value={edu.description}
                                  onChange={(e) => handleEducationChange(edu.id, 'description', e.target.value)}
                                  placeholder="Describe your studies, achievements, or relevant activities..."
                                  className="min-h-[80px]"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      {/* Experience Tab */}
                      <TabsContent value="experience">
                        <div className="space-y-6">
                          <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Work Experience</h2>
                            <div className="space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => generateAIContent('experience')}
                                disabled={aiLoading}
                              >
                                <Wand2 className="mr-2 h-4 w-4" />
                                {aiLoading ? 'Generating...' : 'Generate Descriptions'}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={addExperience}
                              >
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add Experience
                              </Button>
                            </div>
                          </div>
                          
                          {experience.map((exp, index) => (
                            <div key={exp.id} className="p-4 border border-gray-200 rounded-lg">
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="font-medium">Experience #{index + 1}</h3>
                                {experience.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeExperience(exp.id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Title*
                                  </label>
                                  <Input
                                    value={exp.role}
                                    onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)}
                                    placeholder="e.g. Software Developer"
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company*
                                  </label>
                                  <Input
                                    value={exp.company}
                                    onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                                    placeholder="e.g. Tech Solutions Ltd"
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Location
                                  </label>
                                  <Input
                                    value={exp.location}
                                    onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
                                    placeholder="e.g. Durban, South Africa"
                                  />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-2">
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Start Date*
                                    </label>
                                    <Input
                                      type="month"
                                      value={exp.startDate}
                                      onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                                    />
                                  </div>
                                  
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      End Date (or current)
                                    </label>
                                    <Input
                                      type="month"
                                      value={exp.endDate}
                                      onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                                    />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Description (responsibilities and achievements)*
                                </label>
                                <Textarea
                                  value={exp.description}
                                  onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                                  placeholder="Describe your responsibilities and achievements..."
                                  className="min-h-[100px]"
                                />
                              </div>
                            </div>
                          ))}
                          
                          {/* AI Suggestions */}
                          {aiSuggestions.length > 0 && (
                            <div className="mt-4 p-4 bg-brand-light rounded-lg">
                              <h3 className="font-semibold mb-2 flex items-center">
                                <Wand2 className="mr-2 h-4 w-4 text-brand-primary" />
                                AI Suggestions for Experience Descriptions
                              </h3>
                              <div className="space-y-2">
                                {aiSuggestions.map((suggestion, index) => (
                                  <div key={index} className="p-2 bg-white rounded border border-gray-200">
                                    <p className="text-sm">{suggestion}</p>
                                    <Button
                                      variant="link"
                                      size="sm"
                                      className="mt-1 p-0 h-auto text-brand-primary"
                                      onClick={() => {
                                        if (experience.length > index) {
                                          handleExperienceChange(experience[index].id, 'description', 
                                            experience[index].description 
                                              ? `${experience[index].description}\n\n${suggestion}`
                                              : suggestion
                                          );
                                        }
                                      }}
                                    >
                                      Add to description
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </TabsContent>

                      {/* Skills Tab */}
                      <TabsContent value="skills">
                        <div className="space-y-6">
                          <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Skills</h2>
                            <div className="space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => generateAIContent('skills')}
                                disabled={aiLoading}
                              >
                                <Wand2 className="mr-2 h-4 w-4" />
                                {aiLoading ? 'Generating...' : 'Suggest Skills'}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={addSkill}
                              >
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add Skill
                              </Button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                              <div key={skill.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                <div className="flex-1">
                                  <Select
                                    value={skill.name}
                                    onValueChange={(value) => handleSkillChange(skill.id, 'name', value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select or type a skill" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {popularSkills.map((s) => (
                                        <SelectItem key={s.value} value={s.label}>
                                          {s.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                
                                <div className="w-1/3">
                                  <Select
                                    value={skill.level}
                                    onValueChange={(value) => handleSkillChange(skill.id, 'level', value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="beginner">Beginner</SelectItem>
                                      <SelectItem value="intermediate">Intermediate</SelectItem>
                                      <SelectItem value="advanced">Advanced</SelectItem>
                                      <SelectItem value="expert">Expert</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                
                                {skills.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeSkill(skill.id)}
                                    className="h-9 w-9 text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      {/* Preview Tab */}
                      <TabsContent value="preview">
                        <div className="p-4">
                          <div className="bg-white p-6 rounded-lg border shadow-sm">
                            {/* Header/Contact Info */}
                            <div className="text-center mb-6">
                              <h1 className="text-2xl font-bold text-gray-900">{personalInfo.fullName || 'Your Name'}</h1>
                              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-sm text-gray-600">
                                {personalInfo.email && <span>{personalInfo.email}</span>}
                                {personalInfo.phone && <span>{personalInfo.phone}</span>}
                                {personalInfo.location && <span>{personalInfo.location}</span>}
                              </div>
                              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-600">
                                {personalInfo.linkedIn && <span>{personalInfo.linkedIn}</span>}
                                {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
                              </div>
                            </div>
                            
                            {/* Objective */}
                            {personalInfo.objective && (
                              <div className="mb-6">
                                <h2 className="text-lg font-semibold border-b pb-1 mb-2">Professional Summary</h2>
                                <p className="text-gray-700">{personalInfo.objective}</p>
                              </div>
                            )}
                            
                            {/* Experience */}
                            {experience.some(exp => exp.role || exp.company) && (
                              <div className="mb-6">
                                <h2 className="text-lg font-semibold border-b pb-1 mb-3">Work Experience</h2>
                                {experience.map((exp, index) => (
                                  <div key={index} className={index > 0 ? 'mt-4' : ''}>
                                    {(exp.role || exp.company) && (
                                      <div className="flex justify-between">
                                        <div>
                                          <h3 className="font-medium">{exp.role || 'Position'}</h3>
                                          <p className="text-gray-600">{exp.company || 'Company'}{exp.location ? `, ${exp.location}` : ''}</p>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                          {exp.startDate && (
                                            <>
                                              {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                              {exp.endDate ? ` - ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}` : ' - Present'}
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                    {exp.description && <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>}
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Education */}
                            {education.some(edu => edu.institution || edu.degree) && (
                              <div className="mb-6">
                                <h2 className="text-lg font-semibold border-b pb-1 mb-3">Education</h2>
                                {education.map((edu, index) => (
                                  <div key={index} className={index > 0 ? 'mt-4' : ''}>
                                    {(edu.institution || edu.degree) && (
                                      <div className="flex justify-between">
                                        <div>
                                          <h3 className="font-medium">
                                            {edu.degree && educationLevels.find(level => level.value === edu.degree)?.label || edu.degree || 'Degree'}
                                            {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}
                                          </h3>
                                          <p className="text-gray-600">{edu.institution || 'Institution'}</p>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                          {edu.startDate && (
                                            <>
                                              {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                              {edu.endDate ? ` - ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}` : ' - Present'}
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                    {edu.description && <p className="mt-2 text-gray-700">{edu.description}</p>}
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Skills */}
                            {skills.some(skill => skill.name) && (
                              <div>
                                <h2 className="text-lg font-semibold border-b pb-1 mb-3">Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                  {skills.filter(skill => skill.name).map((skill, index) => (
                                    <div 
                                      key={index} 
                                      className={`px-3 py-1 rounded-full text-sm ${
                                        skill.level === 'expert' || skill.level === 'advanced' 
                                          ? 'bg-brand-primary text-white' 
                                          : 'bg-gray-100 text-gray-800'
                                      }`}
                                    >
                                      {skill.name}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </TabsContent>
                    </CardContent>
                  </Card>
                </Tabs>
              </div>
              
              {/* AI Assistant Panel */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wand2 className="mr-2 h-5 w-5 text-brand-primary" />
                      AI CV Assistant
                    </CardTitle>
                    <CardDescription>
                      Get help with your CV using our AI tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button 
                        className="w-full" 
                        onClick={generateFullCV}
                        disabled={aiLoading}
                      >
                        <Wand2 className="mr-2 h-4 w-4" />
                        {aiLoading ? 'Generating...' : 'Generate Complete CV'}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={analyzeCV}
                        disabled={aiLoading}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        {aiLoading ? 'Analyzing...' : 'Analyze My CV'}
                      </Button>
                      
                      <div className="rounded-lg border p-4 space-y-3">
                        <h3 className="font-medium">AI CV Tips</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="flex items-start">
                            <span className="flex-shrink-0 h-5 w-5 text-brand-primary inline-block mr-1">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            Use action verbs like "achieved," "led," "implemented" for impact.
                          </p>
                          <p className="flex items-start">
                            <span className="flex-shrink-0 h-5 w-5 text-brand-primary inline-block mr-1">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            Quantify achievements with specific numbers and percentages.
                          </p>
                          <p className="flex items-start">
                            <span className="flex-shrink-0 h-5 w-5 text-brand-primary inline-block mr-1">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            Tailor your CV to match the job description keywords.
                          </p>
                          <p className="flex items-start">
                            <span className="flex-shrink-0 h-5 w-5 text-brand-primary inline-block mr-1">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            Keep your CV concise, ideally 1-2 pages maximum.
                          </p>
                        </div>
                      </div>
                      
                      {/* NER Analysis Results */}
                      {aiSuggestions.length > 0 && (
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium mb-2">CV Analysis Results</h3>
                          <div className="space-y-2 text-sm">
                            {aiSuggestions.map((suggestion, index) => (
                              <p key={index} className="text-gray-600">{suggestion}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            // Preview Mode
            <Card>
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg border shadow-sm">
                  {/* Header/Contact Info */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">{personalInfo.fullName || 'Your Name'}</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-sm text-gray-600">
                      {personalInfo.email && <span>{personalInfo.email}</span>}
                      {personalInfo.phone && <span>{personalInfo.phone}</span>}
                      {personalInfo.location && <span>{personalInfo.location}</span>}
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-600">
                      {personalInfo.linkedIn && <span>{personalInfo.linkedIn}</span>}
                      {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
                    </div>
                  </div>
                  
                  {/* Objective */}
                  {personalInfo.objective && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-1 mb-2">Professional Summary</h2>
                      <p className="text-gray-700">{personalInfo.objective}</p>
                    </div>
                  )}
                  
                  {/* Experience */}
                  {experience.some(exp => exp.role || exp.company) && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-1 mb-3">Work Experience</h2>
                      {experience.map((exp, index) => (
                        <div key={index} className={index > 0 ? 'mt-4' : ''}>
                          {(exp.role || exp.company) && (
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium">{exp.role || 'Position'}</h3>
                                <p className="text-gray-600">{exp.company || 'Company'}{exp.location ? `, ${exp.location}` : ''}</p>
                              </div>
                              <div className="text-sm text-gray-500">
                                {exp.startDate && (
                                  <>
                                    {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                    {exp.endDate ? ` - ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}` : ' - Present'}
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                          {exp.description && <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Education */}
                  {education.some(edu => edu.institution || edu.degree) && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-1 mb-3">Education</h2>
                      {education.map((edu, index) => (
                        <div key={index} className={index > 0 ? 'mt-4' : ''}>
                          {(edu.institution || edu.degree) && (
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium">
                                  {edu.degree && educationLevels.find(level => level.value === edu.degree)?.label || edu.degree || 'Degree'}
                                  {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}
                                </h3>
                                <p className="text-gray-600">{edu.institution || 'Institution'}</p>
                              </div>
                              <div className="text-sm text-gray-500">
                                {edu.startDate && (
                                  <>
                                    {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                    {edu.endDate ? ` - ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}` : ' - Present'}
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                          {edu.description && <p className="mt-2 text-gray-700">{edu.description}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Skills */}
                  {skills.some(skill => skill.name) && (
                    <div>
                      <h2 className="text-lg font-semibold border-b pb-1 mb-3">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {skills.filter(skill => skill.name).map((skill, index) => (
                          <div 
                            key={index} 
                            className={`px-3 py-1 rounded-full text-sm ${
                              skill.level === 'expert' || skill.level === 'advanced' 
                                ? 'bg-brand-primary text-white' 
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CVBuilder;
