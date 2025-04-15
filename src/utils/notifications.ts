
import { toast } from "@/hooks/use-toast";

interface NotificationOptions {
  title: string;
  description: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}

// Function to show notifications for real-time events
export const showNotification = ({ title, description, type = 'info' }: NotificationOptions) => {
  const variant = type === 'error' ? 'destructive' : 'default';
  
  toast({
    title,
    description,
    variant,
  });
};

// Function to handle real-time job notifications
export const notifyNewJob = (job: { title: string, company: string }) => {
  showNotification({
    title: "New Job Posted",
    description: `${job.company} just posted a new ${job.title} position.`,
    type: 'info'
  });
};

// Function to handle application status changes
export const notifyApplicationUpdate = (application: { jobTitle: string, company: string, status: string }) => {
  showNotification({
    title: "Application Updated",
    description: `Your application for ${application.jobTitle} at ${application.company} has been ${application.status}.`,
    type: 'success'
  });
};

// Function to handle new message notifications
export const notifyNewMessage = (sender: { name: string }) => {
  showNotification({
    title: "New Message",
    description: `You have received a new message from ${sender.name}.`,
    type: 'info'
  });
};

// Mock function to simulate polling for updates
export const startRealtimeUpdates = () => {
  // In a real app, this would use WebSockets or polling
  console.log("Started real-time updates polling");
  
  // This is just for demonstration - in a real app you'd connect to a backend service
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (isLoggedIn) {
    // Set up polling interval (every 30 seconds)
    const interval = setInterval(() => {
      const userRole = localStorage.getItem('userRole');
      
      // Random chance of triggering a notification for demo purposes
      const random = Math.random();
      
      if (random < 0.3 && userRole === 'candidate') {
        notifyNewJob({ 
          title: "Software Developer", 
          company: "Tech Innovations Ltd" 
        });
      } else if (random < 0.6 && userRole === 'candidate') {
        notifyApplicationUpdate({ 
          jobTitle: "Frontend Developer", 
          company: "Tech Solutions", 
          status: "shortlisted" 
        });
      } else if (random < 0.9) {
        notifyNewMessage({ 
          name: userRole === 'candidate' ? "HR Manager" : "John Applicant" 
        });
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }
  
  return () => {}; // Empty cleanup if not logged in
};
