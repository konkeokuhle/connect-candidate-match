
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCapIcon, BriefcaseIcon, BarChartIcon, HeartIcon } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="app-container py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">About ConnectMatch</h1>
          <p className="text-center text-gray-600 mb-8">
            Bridging the gap between graduates and employers at Durban University of Technology
          </p>

          {/* Hero section */}
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              ConnectMatch is dedicated to empowering DUT graduates by connecting them with meaningful career opportunities. 
              We leverage cutting-edge technology to match talented graduates with employers seeking their unique skills and 
              qualifications, creating pathways to successful careers and helping businesses find their perfect candidates.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">DUT's Premier Recruitment Platform</h3>
              <p className="text-gray-600">
                Developed specifically for the Durban University of Technology community, ConnectMatch provides 
                a seamless connection between our graduates and industry partners, supporting the university's 
                mission to produce work-ready professionals who contribute to economic growth and societal development.
              </p>
            </div>
          </div>

          {/* Features section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCapIcon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">For DUT Graduates</h3>
                    <p className="text-gray-600">
                      Create professional profiles, showcase your skills and qualifications, 
                      apply to curated job opportunities, and connect directly with employers 
                      who value your DUT education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <BriefcaseIcon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">For Employers</h3>
                    <p className="text-gray-600">
                      Access a pool of qualified DUT graduates, post job openings, 
                      search for candidates using our intelligent matching system, 
                      and build relationships with future talent.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <BarChartIcon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Smart Matching</h3>
                    <p className="text-gray-600">
                      Our advanced algorithms analyze skills, qualifications, and preferences 
                      to suggest the most suitable jobs to graduates and the most 
                      qualified candidates to employers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <HeartIcon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">DUT Community</h3>
                    <p className="text-gray-600">
                      ConnectMatch is more than a platform—it's a community that 
                      supports DUT's vision of being a preferred university for 
                      developing leadership and creating sustainable futures.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About DUT section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">About Durban University of Technology</h2>
            <p className="text-gray-700 mb-4">
              Durban University of Technology (DUT) is a leading higher education institution in KwaZulu-Natal, 
              South Africa. With a strong focus on career-focused education, DUT prepares students for the 
              workplace through innovative teaching, learning, and research.
            </p>
            <p className="text-gray-700 mb-4">
              Our graduates are known for their practical skills, theoretical knowledge, and ability to 
              contribute meaningfully to their chosen industries from day one. ConnectMatch extends DUT's 
              commitment to student success by facilitating the transition from education to employment.
            </p>
            <p className="text-gray-700">
              At DUT, we believe in creating sustainable futures for our students, our communities, and 
              our country. ConnectMatch is a vital tool in realizing this vision.
            </p>
          </div>

          {/* Team section placeholder - can be expanded with actual team details */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              ConnectMatch is developed and maintained by a dedicated team of professionals 
              committed to supporting DUT graduates and industry partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Placeholder for team members */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Team Member Name</h3>
                <p className="text-gray-600 text-sm">Position</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Team Member Name</h3>
                <p className="text-gray-600 text-sm">Position</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Team Member Name</h3>
                <p className="text-gray-600 text-sm">Position</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-brand-primary text-white font-medium py-2 px-6 rounded-md hover:bg-brand-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
