
import React, { useState } from 'react';
import { Mail, Clock, User, Tag, CheckCircle, AlertCircle, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EmailViewer from '@/components/EmailViewer';

interface Email {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  timestamp: string;
  category: string;
  status: 'unread' | 'read' | 'responded' | 'pending';
  confidence?: number;
  aiSuggestion?: string;
}

interface EmailListProps {
  onEmailSelect: (email: Email | null) => void;
  selectedEmail: Email | null;
}

const EmailList: React.FC<EmailListProps> = ({ onEmailSelect, selectedEmail }) => {
  const [emails] = useState<Email[]>([
    {
      id: '1',
      sender: 'john.doe@company.com',
      subject: 'Question about product pricing',
      preview: 'Hi, I would like to know more about your pricing plans...',
      timestamp: '2 minutes ago',
      category: 'Sales',
      status: 'unread',
      confidence: 95,
      aiSuggestion: 'Thank you for your interest in our products. Our pricing plans start at...'
    },
    {
      id: '2',
      sender: 'sarah.wilson@client.com',
      subject: 'Technical support needed',
      preview: 'I am experiencing issues with the login functionality...',
      timestamp: '15 minutes ago',
      category: 'Support',
      status: 'pending',
      confidence: 87,
      aiSuggestion: 'I understand you are having login issues. Let me help you resolve this...'
    },
    {
      id: '3',
      sender: 'mike.johnson@partner.com',
      subject: 'Partnership proposal',
      preview: 'We would like to discuss a potential partnership opportunity...',
      timestamp: '1 hour ago',
      category: 'Business',
      status: 'responded',
      confidence: 78
    },
    {
      id: '4',
      sender: 'emma.brown@customer.com',
      subject: 'Billing inquiry',
      preview: 'I have a question about my last invoice...',
      timestamp: '3 hours ago',
      category: 'Billing',
      status: 'read',
      confidence: 92,
      aiSuggestion: 'Thank you for contacting us about your billing inquiry...'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'responded':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'read':
        return <Eye className="h-4 w-4 text-blue-500" />;
      default:
        return <Mail className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'responded':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'read':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sales':
        return 'bg-purple-100 text-purple-800';
      case 'Support':
        return 'bg-red-100 text-red-800';
      case 'Business':
        return 'bg-blue-100 text-blue-800';
      case 'Billing':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Inbox
          </CardTitle>
          <CardDescription>Manage your incoming emails with AI assistance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 max-h-96 overflow-y-auto">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                selectedEmail?.id === email.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
              onClick={() => onEmailSelect(email)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getStatusIcon(email.status)}
                  <span className="font-medium text-sm">{email.sender}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className={getCategoryColor(email.category)}>
                    {email.category}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(email.status)}>
                    {email.status}
                  </Badge>
                </div>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{email.subject}</h4>
              <p className="text-sm text-gray-600 mb-2">{email.preview}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  {email.timestamp}
                </div>
                {email.confidence && (
                  <div className="flex items-center gap-1">
                    <span>AI Confidence:</span>
                    <span className="font-medium">{email.confidence}%</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div>
        {selectedEmail ? (
          <EmailViewer email={selectedEmail} />
        ) : (
          <Card>
            <CardContent className="flex items-center justify-center h-96">
              <div className="text-center text-gray-500">
                <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Select an email to view details</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EmailList;
