
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <div className="app-container py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: April 15, 2025</p>
          
          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
                <p>
                  Welcome to ConnectMatch ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
                <p>We collect several types of information from and about users of our platform, including:</p>
                <ul className="list-disc pl-6 my-3 space-y-1">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, education details, work experience, skills, and other information you provide when creating a profile or applying for jobs.</li>
                  <li><strong>Resume/CV Data:</strong> Information contained in your uploaded resume or CV, including qualifications, certificates, and career history.</li>
                  <li><strong>Employer Information:</strong> For employer accounts, we collect company name, industry, size, location, and contact details.</li>
                  <li><strong>Job Application Data:</strong> Information related to your job applications, including cover letters and application status.</li>
                  <li><strong>Usage Information:</strong> How you interact with our platform, features you use, and time spent on pages.</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, and device information.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 my-3 space-y-1">
                  <li>Provide and maintain our services</li>
                  <li>Match candidates with suitable job opportunities</li>
                  <li>Facilitate communication between employers and candidates</li>
                  <li>Analyze and improve our platform and services</li>
                  <li>Customize your experience and provide personalized job recommendations</li>
                  <li>Process job applications and track application status</li>
                  <li>Generate analytics and reports</li>
                  <li>Detect and prevent fraud, spam, and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-3">4. Our AI and Algorithmic Systems</h2>
                <p>
                  ConnectMatch uses artificial intelligence and algorithmic systems to enhance your experience on our platform. These technologies help us provide more relevant job matching, skills assessment, and career recommendations.
                </p>
                <h3 className="text-lg font-medium mt-4 mb-2">4.1. AI-Powered Matching Algorithm</h3>
                <p>
                  Our advanced matching algorithm analyzes skills, qualifications, and preferences to suggest the most suitable jobs to graduates and the most qualified candidates to employers. This system processes data including academic qualifications, skills, experience, location preferences, and career interests.
                </p>
                <h3 className="text-lg font-medium mt-4 mb-2">4.2. Named Entity Recognition (NER)</h3>
                <p>
                  We use Named Entity Recognition (NER), a natural language processing technique, to extract and identify key information from your profile, resume, and job descriptions. This technology helps us:
                </p>
                <ul className="list-disc pl-6 my-3 space-y-1">
                  <li>Extract relevant skills, qualifications, and experience from your resume</li>
                  <li>Identify key requirements and responsibilities from job descriptions</li>
                  <li>Recognize locations, organizations, certifications, and other entities within text</li>
                  <li>Improve the accuracy of job matching and recommendations</li>
                </ul>
                <p>
                  The NER system does not make automated decisions without human oversight and is regularly reviewed for accuracy and fairness.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">5. Information Sharing and Disclosure</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 my-3 space-y-1">
                  <li><strong>Employers:</strong> When you apply for jobs, your profile and application information will be shared with the relevant employers.</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in providing and improving our services.</li>
                  <li><strong>Analytics Partners:</strong> Companies that help us analyze how our services are used.</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and the safety of our users.</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties for marketing purposes.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">6. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">7. Your Rights and Choices</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 my-3 space-y-1">
                  <li>Accessing and reviewing your personal information</li>
                  <li>Correcting inaccuracies in your personal information</li>
                  <li>Deleting your personal information</li>
                  <li>Restricting or objecting to processing of your personal information</li>
                  <li>Requesting portability of your personal information</li>
                  <li>Withdrawing consent (where processing is based on consent)</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">8. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining how long to retain information, we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and the purposes for which we process the information.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">10. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p className="my-3">
                  ConnectMatch - Durban University of Technology<br />
                  Email: privacy@connectmatch.dut.ac.za<br />
                  Address: 70 Steve Biko Road, Musgrave, Durban, 4001<br />
                  Phone: +27 31 123 4567
                </p>
                <p>
                  We will respond to your inquiry as soon as reasonably possible and within the timeframes required by applicable law.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
