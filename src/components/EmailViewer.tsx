
import React, { useState } from 'react';
import { Send, ThumbsUp, ThumbsDown, Edit, Clock, User, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

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

interface EmailViewerProps {
  email: Email;
}

const EmailViewer: React.FC<EmailViewerProps> = ({ email }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [responseText, setResponseText] = useState(email.aiSuggestion || '');

  const handleSendResponse = () => {
    console.log('Sending response:', responseText);
    // TODO: Implement send functionality
  };

  const handleAIFeedback = (positive: boolean) => {
    console.log('AI Feedback:', positive ? 'positive' : 'negative');
    // TODO: Implement feedback functionality
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
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{email.subject}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <User className="h-4 w-4" />
              {email.sender}
              <Clock className="h-4 w-4 ml-4" />
              {email.timestamp}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className={getCategoryColor(email.category)}>
              <Tag className="h-3 w-3 mr-1" />
              {email.category}
            </Badge>
            {email.confidence && (
              <Badge variant="outline">
                AI: {email.confidence}%
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Original Email Content */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Original Message</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              Hi, I would like to know more about your pricing plans and what features are included 
              in each tier. Could you please provide detailed information about the differences 
              between your basic, professional, and enterprise plans? I am particularly interested 
              in understanding the API limits and support options for each plan.
            </p>
          </div>
        </div>

        {/* AI Suggested Response */}
        {email.aiSuggestion && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">AI Suggested Response</h4>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAIFeedback(true)}
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAIFeedback(false)}
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {isEditing ? (
              <Textarea
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                className="min-h-32"
                placeholder="Edit the AI suggested response..."
              />
            ) : (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-gray-700">{responseText}</p>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t">
          <Button onClick={handleSendResponse} className="flex-1">
            <Send className="h-4 w-4 mr-2" />
            Send Response
          </Button>
          <Button variant="outline" onClick={() => setIsEditing(true)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailViewer;
