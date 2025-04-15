
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, Video, Calendar } from 'lucide-react';

const CareerResources = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Career Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-brand-primary" />
              CV Writing Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Professional CV templates</li>
              <li>• Industry-specific examples</li>
              <li>• Expert writing guidelines</li>
            </ul>
            <Button variant="link" className="mt-4 p-0">Learn more →</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Video className="h-5 w-5 mr-2 text-brand-primary" />
              Interview Preparation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Common interview questions</li>
              <li>• Virtual interview tips</li>
              <li>• Industry insights</li>
            </ul>
            <Button variant="link" className="mt-4 p-0">Learn more →</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-brand-primary" />
              Skills Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Online courses and certifications</li>
              <li>• Technical skills workshops</li>
              <li>• Soft skills training</li>
            </ul>
            <Button variant="link" className="mt-4 p-0">Learn more →</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-brand-primary" />
              Career Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• DUT career fairs</li>
              <li>• Networking workshops</li>
              <li>• Industry meetups</li>
            </ul>
            <Button variant="link" className="mt-4 p-0">Learn more →</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareerResources;
