import React from 'react';
import { Button } from '@blook/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Badge } from '@blook/ui/badge';
import { Progress } from '@blook/ui/progress';
import { 
  Plus, 
  TrendingUp, 
  Eye, 
  Users, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface DashboardHomeProps {
  user: any;
  onNavigate: (page: string) => void;
}

export function DashboardHome({ user, onNavigate }: DashboardHomeProps) {
  const mockCampaigns = [
    {
      id: 1,
      name: 'Mumbai Tech Hubs Campaign',
      status: 'active',
      budget: '₹2,50,000',
      spent: '₹1,20,000',
      impressions: '45,230',
      scans: '1,240',
      spaces: 12,
      endDate: '2025-01-15'
    },
    {
      id: 2,
      name: 'Pune Fitness Centers',
      status: 'pending',
      budget: '₹1,00,000',
      spent: '₹0',
      impressions: '0',
      scans: '0',
      spaces: 8,
      endDate: '2025-01-20'
    },
    {
      id: 3,
      name: 'Delhi Cafes Promo',
      status: 'completed',
      budget: '₹75,000',
      spent: '₹75,000',
      impressions: '32,100',
      scans: '890',
      spaces: 15,
      endDate: '2024-12-30'
    }
  ];

  const quickStats = [
    {
      title: 'Total Impressions',
      value: '77,330',
      change: '+12.5%',
      trend: 'up',
      icon: Eye
    },
    {
      title: 'QR Scans',
      value: '2,130',
      change: '+8.2%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Active Campaigns',
      value: '3',
      change: '+1',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Total Spend',
      value: '₹1,95,000',
      change: '+15.3%',
      trend: 'up',
      icon: ArrowUpRight
    }
  ];

  const upcomingBookings = [
    {
      space: 'Tech Park Society - Building A',
      date: '2025-01-18',
      format: 'Lift Posters',
      status: 'confirmed'
    },
    {
      space: 'Premium Gym - Bandra',
      date: '2025-01-20',
      format: 'Wall Branding',
      status: 'pending'
    },
    {
      space: 'Coffee Bean Café - Powai',
      date: '2025-01-22',
      format: 'QR Standees',
      status: 'confirmed'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your campaigns today.</p>
        </div>
        <Button onClick={() => onNavigate('campaigns')} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Campaign</span>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm flex items-center ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${
                  stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <stat.icon className={`h-6 w-6 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Campaigns */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Active Campaigns</CardTitle>
                <CardDescription>Monitor your ongoing campaigns</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => onNavigate('campaigns')}>
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{campaign.name}</h3>
                        <p className="text-sm text-muted-foreground">{campaign.spaces} spaces • Ends {campaign.endDate}</p>
                      </div>
                      <Badge 
                        variant={campaign.status === 'active' ? 'default' : campaign.status === 'completed' ? 'secondary' : 'outline'}
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Budget</p>
                        <p className="font-medium">{campaign.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Spent</p>
                        <p className="font-medium">{campaign.spent}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Impressions</p>
                        <p className="font-medium">{campaign.impressions}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Scans</p>
                        <p className="font-medium">{campaign.scans}</p>
                      </div>
                    </div>
                    
                    {campaign.status === 'active' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Budget Utilization</span>
                          <span>{Math.round((parseInt(campaign.spent.replace(/[₹,]/g, '')) / parseInt(campaign.budget.replace(/[₹,]/g, ''))) * 100)}%</span>
                        </div>
                        <Progress 
                          value={(parseInt(campaign.spent.replace(/[₹,]/g, '')) / parseInt(campaign.budget.replace(/[₹,]/g, ''))) * 100} 
                          className="h-2"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Bookings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Upcoming Bookings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingBookings.map((booking, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      booking.status === 'confirmed' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      {booking.status === 'confirmed' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Clock className="h-4 w-4 text-orange-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{booking.space}</p>
                      <p className="text-xs text-muted-foreground">{booking.format}</p>
                      <p className="text-xs text-muted-foreground">{booking.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => onNavigate('spaces')}>
                <Plus className="h-4 w-4 mr-2" />
                Book New Space
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => onNavigate('spaces')}
              >
                <Eye className="h-4 w-4 mr-2" />
                Discover Spaces
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => onNavigate('qr')}
              >
                <Users className="h-4 w-4 mr-2" />
                QR Campaign
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => onNavigate('reports')}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                View Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}