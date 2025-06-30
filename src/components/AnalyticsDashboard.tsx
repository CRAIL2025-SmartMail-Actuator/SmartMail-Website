
import React from 'react';
import { BarChart3, TrendingUp, Clock, CheckCircle, Mail, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AnalyticsDashboard = () => {
  const metrics = [
    {
      title: "Response Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Avg Response Time",
      value: "2.3 min",
      change: "-45%",
      trend: "up",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Total Processed",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Mail,
      color: "text-purple-600"
    },
    {
      title: "Active Categories",
      value: "8",
      change: "+1",
      trend: "up",
      icon: Users,
      color: "text-orange-600"
    }
  ];

  const categoryPerformance = [
    { name: "Sales", processed: 324, success: 96, avgTime: "1.8 min" },
    { name: "Support", processed: 287, success: 94, avgTime: "2.1 min" },
    { name: "Billing", processed: 195, success: 98, avgTime: "1.5 min" },
    { name: "Business", processed: 156, success: 89, avgTime: "3.2 min" },
    { name: "General", processed: 285, success: 92, avgTime: "2.4 min" }
  ];

  const confidenceDistribution = [
    { range: "90-100%", count: 623, percentage: 65 },
    { range: "80-89%", count: 298, percentage: 31 },
    { range: "70-79%", count: 38, percentage: 4 },
    { range: "60-69%", count: 0, percentage: 0 }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {metric.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {metric.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Category Performance
            </CardTitle>
            <CardDescription>Performance metrics by email category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryPerformance.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{category.name}</span>
                    <div className="flex gap-4 text-xs text-gray-500">
                      <span>{category.processed} emails</span>
                      <span>{category.success}% success</span>
                      <span>{category.avgTime}</span>
                    </div>
                  </div>
                  <Progress value={category.success} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Confidence Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>AI Confidence Distribution</CardTitle>
            <CardDescription>Distribution of AI confidence scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {confidenceDistribution.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.range}</span>
                    <span className="text-gray-500">{item.count} emails</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest email processing activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: "2 min ago", action: "Auto-responded to sales inquiry", confidence: 96 },
              { time: "5 min ago", action: "Categorized support ticket", confidence: 89 },
              { time: "8 min ago", action: "Generated billing response", confidence: 94 },
              { time: "12 min ago", action: "Processed partnership email", confidence: 78 },
              { time: "15 min ago", action: "Auto-responded to general inquiry", confidence: 92 }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">Confidence: {activity.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
