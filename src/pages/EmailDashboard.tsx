
import React, { useState } from 'react';
import { Mail, Send, Clock, CheckCircle, AlertCircle, Settings, BarChart3 } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmailList from '@/components/EmailList';
import EmailComposer from '@/components/EmailComposer';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import CategoryManager from '@/components/CategoryManager';

const EmailDashboard = () => {
  const [activeTab, setActiveTab] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);

  const stats = [
    {
      title: "Total Emails",
      value: "1,247",
      icon: Mail,
      change: "+12% from last month"
    },
    {
      title: "Auto Responses",
      value: "956",
      icon: Send,
      change: "+18% from last month"
    },
    {
      title: "Avg Response Time",
      value: "2.3 min",
      icon: Clock,
      change: "-45% from last month"
    },
    {
      title: "Success Rate",
      value: "94.2%",
      icon: CheckCircle,
      change: "+2.1% from last month"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Email Auto-Responder</h1>
            <p className="text-gray-600">Intelligent email management powered by AI</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
              <TabsTrigger value="inbox" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Inbox
              </TabsTrigger>
              <TabsTrigger value="compose" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Compose
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="categories" className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Categories
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="inbox" className="space-y-6">
              <EmailList onEmailSelect={setSelectedEmail} selectedEmail={selectedEmail} />
            </TabsContent>

            <TabsContent value="compose" className="space-y-6">
              <EmailComposer />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <AnalyticsDashboard />
            </TabsContent>

            <TabsContent value="categories" className="space-y-6">
              <CategoryManager />
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure your AI email auto-responder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Settings panel coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default EmailDashboard;
