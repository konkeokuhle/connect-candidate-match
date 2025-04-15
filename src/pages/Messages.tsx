
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  Search,
  Send,
  Plus,
  User,
  Building,
  Clock,
  Archive,
  Star,
  Trash2,
  Paperclip,
  MoreVertical,
  MessageSquare,
  Download,
  FileText,
} from 'lucide-react';

// Mock conversations data
const mockConversations = [
  {
    id: '1',
    participants: [
      { id: 'user-1', name: 'Current User', role: 'candidate' },
      { id: 'employer-1', name: 'Tech Solutions Ltd', role: 'employer' }
    ],
    lastMessage: {
      id: 'msg-1',
      senderId: 'employer-1',
      content: 'Thank you for your application. We would like to invite you for an interview.',
      sentAt: '2025-04-14T14:30:00Z',
      read: false
    },
    createdAt: '2025-04-10T09:15:00Z'
  },
  {
    id: '2',
    participants: [
      { id: 'user-1', name: 'Current User', role: 'candidate' },
      { id: 'employer-2', name: 'Digital Innovators', role: 'employer' }
    ],
    lastMessage: {
      id: 'msg-2',
      senderId: 'user-1',
      content: 'I have attached my updated CV as requested.',
      sentAt: '2025-04-12T11:20:00Z',
      read: true,
      hasAttachment: true
    },
    createdAt: '2025-04-05T16:45:00Z'
  },
  {
    id: '3',
    participants: [
      { id: 'user-1', name: 'Current User', role: 'candidate' },
      { id: 'employer-3', name: 'Global Systems', role: 'employer' }
    ],
    lastMessage: {
      id: 'msg-3',
      senderId: 'employer-3',
      content: 'Can you please provide more details about your experience with React?',
      sentAt: '2025-04-09T09:10:00Z',
      read: true
    },
    createdAt: '2025-04-01T14:20:00Z'
  }
];

// Mock messages for a selected conversation
const mockMessages = [
  {
    id: 'msg-a',
    conversationId: '1',
    senderId: 'user-1',
    content: 'Hello, I am interested in the Software Developer position that was posted yesterday.',
    sentAt: '2025-04-10T09:15:00Z',
    read: true
  },
  {
    id: 'msg-b',
    conversationId: '1',
    senderId: 'employer-1',
    content: 'Hi there! Thank you for your interest. Could you tell me more about your experience with React?',
    sentAt: '2025-04-10T10:30:00Z',
    read: true
  },
  {
    id: 'msg-c',
    conversationId: '1',
    senderId: 'user-1',
    content: "I have 2 years of experience with React, including building several web applications. I've also worked with Redux for state management and have experience with TypeScript.",
    sentAt: '2025-04-10T11:15:00Z',
    read: true
  },
  {
    id: 'msg-d',
    conversationId: '1',
    senderId: 'employer-1',
    content: "That sounds great! I'd like to see some examples of your work. Could you share your portfolio or GitHub profile?",
    sentAt: '2025-04-11T09:45:00Z',
    read: true
  },
  {
    id: 'msg-e',
    conversationId: '1',
    senderId: 'user-1',
    content: "Sure! Here's my GitHub: github.com/johndoe123. You can also check my portfolio at johndoe.dev where I've showcased my recent projects.",
    sentAt: '2025-04-11T10:20:00Z',
    read: true
  },
  {
    id: 'msg-f',
    conversationId: '1',
    senderId: 'employer-1',
    content: 'Thank you for your application. We would like to invite you for an interview.',
    sentAt: '2025-04-14T14:30:00Z',
    read: false
  },
  {
    id: 'msg-g',
    conversationId: '2',
    senderId: 'user-1',
    content: 'Hello, I saw your job posting for a UX Designer position and I am very interested.',
    sentAt: '2025-04-05T16:45:00Z',
    read: true
  },
  {
    id: 'msg-h',
    conversationId: '2',
    senderId: 'employer-2',
    content: 'Hi there! Thanks for your interest. Can you please share your portfolio and CV?',
    sentAt: '2025-04-06T09:30:00Z',
    read: true
  },
  {
    id: 'msg-i',
    conversationId: '2',
    senderId: 'user-1',
    content: 'Of course! Here is my updated CV as requested.',
    sentAt: '2025-04-12T11:20:00Z',
    read: true,
    hasAttachment: true,
    attachmentName: 'John_Doe_CV_2025.pdf',
    attachmentUrl: '#'
  }
];

const Messages = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [conversations, setConversations] = useState(mockConversations);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [attachmentName, setAttachmentName] = useState<string | null>(null);
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to access messages.",
        variant: "destructive",
      });
      navigate('/login');
    }
  }, [navigate, toast]);
  
  const userRole = localStorage.getItem('userRole') as 'candidate' | 'employer' | null;
  const currentUserId = 'user-1'; // In a real app, this would come from auth
  
  const filteredConversations = conversations.filter(convo => {
    const otherParticipant = convo.participants.find(p => p.id !== currentUserId);
    return otherParticipant?.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  const currentMessages = messages.filter(
    msg => msg.conversationId === selectedConversation
  );
  
  const getOtherParticipant = (conversationId: string) => {
    const conversation = conversations.find(c => c.id === conversationId);
    return conversation?.participants.find(p => p.id !== currentUserId);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { day: 'numeric', month: 'short' });
    }
  };
  
  const handleSendMessage = () => {
    if ((!newMessage.trim() && !attachmentName) || !selectedConversation) return;
    
    const newMsg = {
      id: `msg-${Date.now()}`,
      conversationId: selectedConversation,
      senderId: currentUserId,
      content: newMessage,
      sentAt: new Date().toISOString(),
      read: false,
      hasAttachment: attachmentName !== null,
      attachmentName: attachmentName,
      attachmentUrl: '#'
    };
    
    setMessages([...messages, newMsg]);
    
    setConversations(conversations.map(convo => 
      convo.id === selectedConversation 
        ? {
            ...convo,
            lastMessage: {
              id: newMsg.id,
              senderId: newMsg.senderId,
              content: newMsg.content,
              sentAt: newMsg.sentAt,
              read: newMsg.read,
              hasAttachment: newMsg.hasAttachment
            }
          }
        : convo
    ));
    
    setNewMessage('');
    setAttachmentName(null);
    
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    });
  };
  
  const handleFileAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachmentName(file.name);
      toast({
        title: "File attached",
        description: `${file.name} is ready to send`,
      });
    }
  };
  
  const removeAttachment = () => {
    setAttachmentName(null);
  };
  
  const downloadAttachment = (attachmentName: string) => {
    toast({
      title: "Downloading file",
      description: `${attachmentName} will be downloaded shortly.`,
    });
  };
  
  const startNewConversation = () => {
    toast({
      title: "Start a new conversation",
      description: "Feature coming soon!",
    });
  };
  
  return (
    <Layout>
      <div className="app-container py-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-250px)] min-h-[500px]">
            <div className="border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Messages</h2>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={startNewConversation}
                    title="New Message"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search conversations"
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-85px)]">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((conversation) => {
                    const otherParticipant = conversation.participants.find(p => p.id !== currentUserId);
                    const isUnread = conversation.lastMessage?.senderId !== currentUserId && !conversation.lastMessage?.read;
                    
                    return (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedConversation(conversation.id)}
                        className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                          selectedConversation === conversation.id
                            ? 'bg-brand-light'
                            : isUnread
                            ? 'bg-gray-50 hover:bg-gray-100'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            {otherParticipant?.role === 'employer' ? (
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <Building className="h-5 w-5 text-blue-600" />
                              </div>
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                <User className="h-5 w-5 text-green-600" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <h3 className={`text-sm font-semibold truncate ${isUnread ? 'text-brand-primary' : ''}`}>
                                {otherParticipant?.name}
                              </h3>
                              <span className="text-xs text-gray-500">
                                {formatDate(conversation.lastMessage?.sentAt || conversation.createdAt)}
                              </span>
                            </div>
                            <div className="flex items-center">
                              {conversation.lastMessage?.hasAttachment && (
                                <Paperclip className="h-3 w-3 text-gray-400 mr-1 flex-shrink-0" />
                              )}
                              <p className={`text-sm truncate ${isUnread ? 'font-semibold' : 'text-gray-600'}`}>
                                {conversation.lastMessage?.senderId === currentUserId && 'You: '}
                                {conversation.lastMessage?.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No conversations found
                  </div>
                )}
              </div>
            </div>
            
            <div className="col-span-2 flex flex-col">
              {selectedConversation ? (
                <>
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center">
                      {getOtherParticipant(selectedConversation)?.role === 'employer' ? (
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Building className="h-5 w-5 text-blue-600" />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <User className="h-5 w-5 text-green-600" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold">
                          {getOtherParticipant(selectedConversation)?.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {getOtherParticipant(selectedConversation)?.role === 'employer' ? 'Employer' : 'Candidate'}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" title="Archive">
                        <Archive className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Mark as Important">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="More Actions">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {currentMessages.map((message) => {
                        const isOwnMessage = message.senderId === currentUserId;
                        return (
                          <div key={message.id} className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[75%] ${
                              isOwnMessage 
                                ? 'bg-brand-primary text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
                                : 'bg-white border border-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                            } p-3 shadow-sm`}>
                              <p className="text-sm">{message.content}</p>
                              {message.hasAttachment && (
                                <div className={`mt-2 p-2 rounded-md flex items-center justify-between ${
                                  isOwnMessage ? 'bg-blue-600' : 'bg-gray-100'
                                }`}>
                                  <div className="flex items-center">
                                    <FileText className={`h-4 w-4 mr-2 ${isOwnMessage ? 'text-white' : 'text-gray-500'}`} />
                                    <span className={`text-sm truncate ${isOwnMessage ? 'text-white' : 'text-gray-700'}`}>
                                      {message.attachmentName}
                                    </span>
                                  </div>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className={isOwnMessage ? 'text-white hover:text-white hover:bg-blue-700' : ''}
                                    onClick={() => downloadAttachment(message.attachmentName || 'file')}
                                  >
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              )}
                              <div className={`text-xs mt-1 flex items-center ${isOwnMessage ? 'text-brand-light justify-end' : 'text-gray-500'}`}>
                                <Clock className="h-3 w-3 mr-1" />
                                {formatDate(message.sentAt)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-gray-200">
                    {attachmentName && (
                      <div className="bg-gray-100 p-2 rounded-md mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm truncate">{attachmentName}</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={removeAttachment}
                        >
                          <Trash2 className="h-4 w-4 text-gray-500" />
                        </Button>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <div className="relative">
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          onChange={handleFileAttachment}
                        />
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          title="Attach File"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <Paperclip className="h-5 w-5" />
                        </Button>
                      </div>
                      <Textarea
                        placeholder="Type your message..."
                        className="min-h-[56px] flex-1 resize-none"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <Button className="h-full" onClick={handleSendMessage} disabled={!newMessage.trim() && !attachmentName}>
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <MessageSquare className="h-12 w-12 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700">Select a conversation</h3>
                    <p className="text-gray-500 max-w-md">
                      Choose a conversation from the list or start a new one to begin messaging.
                    </p>
                    <Button className="mt-4" onClick={startNewConversation}>
                      <Plus className="mr-2 h-4 w-4" />
                      New Conversation
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
