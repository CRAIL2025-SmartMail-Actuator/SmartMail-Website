
import React, { useState } from 'react';
import { Plus, Edit, Trash2, Tag, FileText, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

interface Category {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  autoReply: boolean;
  confidenceThreshold: number;
  responseTemplate: string;
  emailCount: number;
}

const CategoryManager = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'Sales',
      description: 'Sales inquiries and product questions',
      keywords: ['pricing', 'quote', 'buy', 'purchase', 'cost'],
      autoReply: true,
      confidenceThreshold: 85,
      responseTemplate: 'Thank you for your interest in our products...',
      emailCount: 324
    },
    {
      id: '2',
      name: 'Support',
      description: 'Technical support and troubleshooting',
      keywords: ['help', 'issue', 'problem', 'bug', 'error'],
      autoReply: true,
      confidenceThreshold: 90,
      responseTemplate: 'Thank you for contacting our support team...',
      emailCount: 287
    },
    {
      id: '3',
      name: 'Billing',
      description: 'Billing and payment related questions',
      keywords: ['invoice', 'payment', 'billing', 'refund', 'subscription'],
      autoReply: true,
      confidenceThreshold: 95,
      responseTemplate: 'Thank you for your billing inquiry...',
      emailCount: 195
    }
  ]);

  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(prev => prev.filter(cat => cat.id !== categoryId));
  };

  const getCategoryColor = (name: string) => {
    switch (name) {
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Category Management</h2>
          <p className="text-gray-600">Manage email categories and auto-reply rules</p>
        </div>
        <Button onClick={() => setShowNewCategoryForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className={getCategoryColor(category.name)}>
                  <Tag className="h-3 w-3 mr-1" />
                  {category.name}
                </Badge>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditCategory(category)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Keywords</p>
                <div className="flex flex-wrap gap-1">
                  {category.keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Auto Reply</span>
                <Switch checked={category.autoReply} />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Confidence Threshold</span>
                <Badge variant="outline">{category.confidenceThreshold}%</Badge>
              </div>

              <div className="pt-2 border-t">
                <p className="text-sm text-gray-600">
                  <FileText className="h-4 w-4 inline mr-1" />
                  {category.emailCount} emails processed
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Category Form */}
      {showNewCategoryForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
            <CardDescription>Create a new email category with auto-reply rules</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category Name</label>
                <Input placeholder="e.g., Marketing" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Confidence Threshold (%)</label>
                <Input type="number" placeholder="85" min="0" max="100" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <Input placeholder="Brief description of this category" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Keywords (comma-separated)</label>
              <Input placeholder="marketing, campaign, newsletter, promotion" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Response Template</label>
              <Textarea 
                placeholder="Default response template for this category..."
                className="min-h-24"
              />
            </div>

            <div className="flex items-center gap-2">
              <Switch />
              <label className="text-sm">Enable auto-reply for this category</label>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button className="flex-1">
                <Plus className="h-4 w-4 mr-2" />
                Create Category
              </Button>
              <Button variant="outline" onClick={() => setShowNewCategoryForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CategoryManager;
