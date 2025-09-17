import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Button } from '@blook/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@blook/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@blook/ui/tabs';
import { Badge } from '@blook/ui/badge';
import { Progress } from '@blook/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Eye, 
  Users, 
  MapPin, 
  Calendar,
  DollarSign,
  Target,
  Clock
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export function ReportsAnalytics() {
  const [timeRange, setTimeRange] = useState('last30days');

  const impressionData = [
    { name: 'Week 1', impressions: 12000, scans: 340 },
    { name: 'Week 2', impressions: 15000, scans: 420 },
    { name: 'Week 3', impressions: 18000, scans: 510 },
    { name: 'Week 4', impressions: 22000, scans: 680 },
  ];

  const campaignPerformance = [
    { name: 'Mumbai Tech Hubs', impressions: 45230, scans: 1240, conversions: 45, roi: 185 },
    { name: 'Pune Fitness Centers', impressions: 0, scans: 0, conversions: 0, roi: 0 },
    { name: 'Delhi Cafes Promo', impressions: 32100, scans: 890, conversions: 32, roi: 142 },
  ];

  const locationData = [
    { name: 'Mumbai', value: 45, color: '#1E90FF' },
    { name: 'Delhi', value: 32, color: '#FF6A00' },
    { name: 'Bangalore', value: 18, color: '#10b981' },
    { name: 'Pune', value: 12, color: '#f59e0b' },
    { name: 'Others', value: 8, color: '#ef4444' },
  ];

  const demographicsData = [
    { ageGroup: '18-25', percentage: 25, income: '₹3-6L' },
    { ageGroup: '25-35', percentage: 45, income: '₹6-12L' },
    { ageGroup: '35-45', percentage: 20, income: '₹12-18L' },
    { ageGroup: '45+', percentage: 10, income: '₹18L+' },
  ];

  const topSpaces = [
    { name: 'Prestige Tech Park - Building A', scans: 456, conversions: 18, revenue: '₹45,000' },
    { name: 'Metro Mall - Central Atrium', scans: 387, conversions: 15, revenue: '₹38,000' },
    { name: 'FitZone Premium Gym', scans: 234, conversions: 12, revenue: '₹28,000' },
    { name: 'The Coffee Bean Café', scans: 198, conversions: 8, revenue: '₹19,000' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Track performance and optimize your campaigns</p>
        </div>
        <div className="flex space-x-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last3months">Last 3 months</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Reach</p>
                <p className="text-2xl font-bold">77,330</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12.5% vs last month
                </p>
              </div>
              <Eye className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Engagement</p>
                <p className="text-2xl font-bold">2,130</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +8.2% vs last month
                </p>
              </div>
              <Users className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversions</p>
                <p className="text-2xl font-bold">77</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +15.3% vs last month
                </p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spend</p>
                <p className="text-2xl font-bold">₹1,95,000</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  ROI: 156%
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          {/* Impressions & Scans Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Impressions & Scans Over Time</CardTitle>
              <CardDescription>Track your campaign reach and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={impressionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="impressions" fill="#1E90FF" name="Impressions" />
                  <Bar dataKey="scans" fill="#FF6A00" name="Scans" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Performing Spaces */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Spaces</CardTitle>
              <CardDescription>Spaces with highest engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSpaces.map((space, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium">{space.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {space.scans} scans • {space.conversions} conversions
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{space.revenue}</p>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          {/* Demographics */}
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
              <CardDescription>Age groups and income distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demographicsData.map((demo, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{demo.ageGroup}</span>
                      <div className="text-right">
                        <span className="font-semibold">{demo.percentage}%</span>
                        <p className="text-sm text-muted-foreground">{demo.income}</p>
                      </div>
                    </div>
                    <Progress value={demo.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engagement by Time */}
          <Card>
            <CardHeader>
              <CardTitle>Engagement by Time of Day</CardTitle>
              <CardDescription>When your audience is most active</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { time: '6-10 AM', scans: 245, percentage: 15 },
                  { time: '10-2 PM', scans: 567, percentage: 35 },
                  { time: '2-6 PM', scans: 489, percentage: 30 },
                  { time: '6-10 PM', scans: 324, percentage: 20 },
                ].map((slot, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <p className="font-semibold">{slot.time}</p>
                    <p className="text-2xl font-bold text-primary">{slot.scans}</p>
                    <p className="text-sm text-muted-foreground">{slot.percentage}% of total</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations" className="space-y-6">
          {/* Location Performance */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance by City</CardTitle>
                <CardDescription>Engagement distribution across cities</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={locationData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {locationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Pincodes</CardTitle>
                <CardDescription>Areas with highest engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { pincode: '400001', area: 'Fort, Mumbai', scans: 456 },
                    { pincode: '560001', area: 'MG Road, Bangalore', scans: 387 },
                    { pincode: '110001', area: 'Connaught Place, Delhi', scans: 334 },
                    { pincode: '411001', area: 'Pune Station, Pune', scans: 298 },
                    { pincode: '400050', area: 'Bandra West, Mumbai', scans: 267 },
                  ].map((location, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">{location.pincode}</p>
                        <p className="text-sm text-muted-foreground">{location.area}</p>
                      </div>
                      <Badge variant="outline">{location.scans} scans</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          {/* Campaign Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance Comparison</CardTitle>
              <CardDescription>Compare metrics across all campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold">{campaign.name}</h4>
                      <Badge 
                        variant={campaign.roi > 150 ? 'default' : campaign.roi > 100 ? 'secondary' : 'outline'}
                      >
                        ROI: {campaign.roi}%
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-lg font-bold">{campaign.impressions.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Impressions</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">{campaign.scans.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Scans</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">{campaign.conversions}</p>
                        <p className="text-sm text-muted-foreground">Conversions</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-green-600">{campaign.roi}%</p>
                        <p className="text-sm text-muted-foreground">ROI</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}