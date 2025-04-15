
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PhoneIcon, MailIcon, MapPinIcon, ExternalLinkIcon } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <Layout>
      <div className="app-container py-10">
        <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions about ConnectMatch? We're here to help you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <PhoneIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm</p>
              <a href="tel:+27313735555" className="text-brand-primary hover:underline">
                +27 31 373 5555
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <MailIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">We'll respond as soon as possible</p>
              <a href="mailto:info@connectmatch.dut.ac.za" className="text-brand-primary hover:underline">
                info@connectmatch.dut.ac.za
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <MapPinIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Durban University of Technology</p>
              <a 
                href="https://goo.gl/maps/8QZ8Z4Z4Z4Z4Z4Z4A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline flex items-center justify-center"
              >
                Steve Biko Campus, Durban
                <ExternalLinkIcon className="h-4 w-4 ml-1" />
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-md mb-4 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1379893925125!2d31.012932!3d-29.8518841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a9a14f46f7f7%3A0x57d9eefd4493bc2!2sDurban%20University%20of%20Technology!5e0!3m2!1sen!2sza!4v1681499424563!5m2!1sen!2sza" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Durban University of Technology</p>
                  <p className="text-gray-600">
                    Steve Biko Campus<br />
                    Steve Biko Road<br />
                    Durban, 4001<br />
                    South Africa
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Hours:</span> Monday – Friday, 8am – 5pm
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
