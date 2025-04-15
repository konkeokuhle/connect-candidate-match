
import React from 'react';
import Layout from '@/components/Layout';
import CareerResources from '@/components/CareerResources';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Video, BookOpen, Briefcase } from 'lucide-react';

const Resources = () => {
  return (
    <Layout>
      <div className="app-container py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Career Resources</h1>
          <p className="text-gray-600 mb-8">
            Equip yourself with the knowledge and tools to succeed in your career journey
          </p>

          {/* AI CV Builder Banner */}
          <Card className="mb-10 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">AI-Powered CV Builder</h2>
                  <p className="mb-6">
                    Our advanced AI helps you create a professional CV tailored to your skills and career goals.
                    Get personalized recommendations and optimize your CV for job applications.
                  </p>
                  <Button variant="secondary" size="lg" asChild>
                    <a href="/cv-builder">Create Your CV</a>
                  </Button>
                </div>
                <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardContent className="p-6">
                <Video className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Interview Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Master the art of interviewing with our comprehensive guides and practice sessions.
                </p>
                <Button variant="link" className="p-0">Learn more →</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Skills Development</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your skillset with courses, workshops, and resources tailored for DUT graduates.
                </p>
                <Button variant="link" className="p-0">Learn more →</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Briefcase className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Career Planning</h3>
                <p className="text-gray-600 mb-4">
                  Map out your career path with expert advice on industry trends and opportunities.
                </p>
                <Button variant="link" className="p-0">Learn more →</Button>
              </CardContent>
            </Card>
          </div>

          {/* Career Resources Component */}
          <CareerResources />
          
          {/* AI Profile Analysis */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">AI Profile Analysis</h2>
                <p className="mb-6">
                  Let our AI analyze your profile and provide personalized recommendations to improve your chances of landing your dream job. 
                  Our system uses Named Entity Recognition (NER) to identify key skills and qualifications from your profile.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-brand-primary">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-2">Get personalized job recommendations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-brand-primary">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-2">Identify skill gaps and areas for improvement</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-brand-primary">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-2">Enhance your profile with AI suggestions</p>
                  </li>
                </ul>
                <Button>Analyze My Profile</Button>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
                <img 
                  src="https://placehold.co/300x300/e2e8f0/475569?text=AI+Analysis" 
                  alt="AI Analysis" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
