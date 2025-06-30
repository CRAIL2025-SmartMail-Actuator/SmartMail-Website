
import React, { useState } from 'react';
import { Send, Sparkles, Upload, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const EmailComposer = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
    category: ''
  });

  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const categories = ['Sales', 'Support', 'Business', 'Billing', 'General'];

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setAiSuggestions([
        "Thank you for your inquiry. I'd be happy to help you with that.",
        "I appreciate you reaching out to us. Let me provide you with the information you need.",
        "Thank you for contacting our team. Here's what I can help you with today."
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setFormData(prev => ({
      ...prev,
      message: suggestion
    }));
    setAiSuggestions([]);
  };

  const handleSend = () => {
    console.log('Sending email:', formData);
    // TODO: Implement send functionality
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5" />
          Compose Email
        </CardTitle>
        <CardDescription>Create a new email with AI assistance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">To</label>
            <Input
              placeholder="recipient@example.com"
              value={formData.to}
              onChange={(e) => setFormData(prev => ({ ...prev, to: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Subject</label>
          <Input
            placeholder="Email subject"
            value={formData.subject}
            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">Message</label>
            <Button
              size="sm"
              variant="outline"
              onClick={handleGenerateAI}
              disabled={isGenerating}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              {isGenerating ? 'Generating...' : 'AI Suggest'}
            </Button>
          </div>
          <Textarea
            placeholder="Type your message here..."
            className="min-h-32"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          />
        </div>

        {/* AI Suggestions */}
        {aiSuggestions.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">AI Suggestions</h4>
            <div className="space-y-2">
              {aiSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-3 bg-blue-50 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                  onClick={() => handleSuggestionSelect(suggestion)}
                >
                  <p className="text-sm text-gray-700">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t">
          <Button onClick={handleSend} className="flex-1">
            <Send className="h-4 w-4 mr-2" />
            Send Email
          </Button>
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Attach File
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailComposer;
