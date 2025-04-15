
import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, UserIcon, BuildingIcon, MessageSquareIcon, BellIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Mock authentication (would use a real auth system in production)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userRole, setUserRole] = React.useState<'candidate' | 'employer' | null>(null);

  const handleRoleToggle = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
      setUserRole('candidate');
    } else {
      if (userRole === 'candidate') {
        setUserRole('employer');
      } else if (userRole === 'employer') {
        setIsLoggedIn(false);
        setUserRole(null);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="app-container flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <BriefcaseIcon className="h-8 w-8 text-brand-primary" />
            <span className="text-xl font-bold text-brand-primary">ConnectMatch</span>
          </Link>
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" onClick={handleRoleToggle}>
                  Switch to {userRole === 'candidate' ? 'Employer' : 'Candidate'} View
                </Button>
                <Button variant="outline" size="sm" className="hidden sm:block" asChild>
                  <Link to="/messages">
                    <MessageSquareIcon className="h-5 w-5 mr-2" />
                    Messages
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="relative" asChild>
                  <Link to="/notifications">
                    <BellIcon className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      3
                    </span>
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="p-1" asChild>
                  <Link to="/profile">
                    <div className="h-8 w-8 rounded-full bg-brand-primary text-white flex items-center justify-center">
                      <span className="text-sm font-bold">JD</span>
                    </div>
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
        
        {/* Navigation bar - only shown when logged in */}
        {isLoggedIn && (
          <nav className="bg-gray-50 border-b border-gray-200">
            <div className="app-container flex overflow-x-auto">
              {userRole === 'candidate' ? (
                <>
                  <Link to="/jobs" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary">
                    Browse Jobs
                  </Link>
                  <Link to="/applications" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary">
                    My Applications
                  </Link>
                  <Link to="/profile" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary">
                    My Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/post-job" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary">
                    Post a Job
                  </Link>
                  <Link to="/candidates" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary">
                    Browse Candidates
                  </Link>
                  <Link to="/manage-jobs" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary">
                    Manage Jobs
                  </Link>
                  <Link to="/company-profile" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary">
                    Company Profile
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-10">
        <div className="app-container py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">ConnectMatch</h3>
              <p className="text-sm text-gray-600">
                Connecting graduates and employers through intelligent matching.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">For Candidates</h3>
              <ul className="space-y-2">
                <li><Link to="/jobs" className="text-sm text-gray-600 hover:text-brand-primary">Browse Jobs</Link></li>
                <li><Link to="/profile" className="text-sm text-gray-600 hover:text-brand-primary">Create Profile</Link></li>
                <li><Link to="/resources" className="text-sm text-gray-600 hover:text-brand-primary">Career Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">For Employers</h3>
              <ul className="space-y-2">
                <li><Link to="/post-job" className="text-sm text-gray-600 hover:text-brand-primary">Post a Job</Link></li>
                <li><Link to="/candidates" className="text-sm text-gray-600 hover:text-brand-primary">Browse Candidates</Link></li>
                <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-brand-primary">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-gray-600 hover:text-brand-primary">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-600 hover:text-brand-primary">Contact</Link></li>
                <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-brand-primary">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-6 pt-6 text-center">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} ConnectMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
