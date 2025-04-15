
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <div className="app-container py-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-2">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Data Collection and Usage</h2>
              <p className="text-gray-700">
                ConnectMatch collects and processes personal information to provide job matching services. This includes:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Profile information (name, contact details, education history)</li>
                <li>CV and professional documents</li>
                <li>Job preferences and search history</li>
                <li>Communications with employers and other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Algorithm and AI Processing</h2>
              <p className="text-gray-700">
                Our platform uses advanced algorithms and Named Entity Recognition (NER) technology to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Extract and analyze key information from CVs and job descriptions</li>
                <li>Identify skills, qualifications, and experience requirements</li>
                <li>Match candidates with suitable job opportunities</li>
                <li>Process and analyze professional documents for better matching accuracy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Security</h2>
              <p className="text-gray-700">
                We implement robust security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Encryption of sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Strict access controls and authentication</li>
                <li>Compliance with data protection regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
              <p className="text-gray-700">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Access your personal data</li>
                <li>Request corrections to your information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of promotional communications</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Privacy;
