import React, { useState } from 'react';
import { Button } from '@blook/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Badge } from '@blook/ui/badge';
import { Input } from '@blook/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@blook/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@blook/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@blook/ui/dialog';
import { Label } from '@blook/ui/label';
import { Textarea } from '@blook/ui/textarea';
import { Calendar } from '@blook/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@blook/ui/popover';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Play, 
  Pause, 
  Eye, 
  Calendar as CalendarIcon,
  Target,
  MapPin,
  DollarSign,
  Image as ImageIcon,
  Upload
} from 'lucide-react';
import { format } from 'date-fns';

export function CampaignsPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [campaignStep, setCampaignStep] = useState(1);

  const mockCampaigns = [
    {
      id: 1,
      name: 'Mumbai Tech Hubs Campaign',
      status: 'active',
      objective: 'Brand Awareness',
      budget: 250000,
      spent: 120000,
      impressions: 45230,
      scans: 1240,
      ctr: 2.74,
      spaces: 12,
      startDate: '2024-12-15',
      endDate: '2025-01-15',
      targetAudience: 'Tech Professionals, 25-40',
      geography: 'Mumbai, Pune'
    },
    {
      id: 2,
      name: 'Pune Fitness Centers',
      status: 'pending',
      objective: 'Lead Generation',
      budget: 100000,
      spent: 0,
      impressions: 0,
      scans: 0,
      ctr: 0,
      spaces: 8,
      startDate: '2025-01-20',
      endDate: '2025-02-20',
      targetAudience: 'Fitness Enthusiasts, 20-45',
      geography: 'Pune'
    },
    {
      id: 3,
      name: 'Delhi Cafes Promo',
      status: 'completed',
      objective: 'Sales Conversion',
      budget: 75000,
      spent: 75000,
      impressions: 32100,
      scans: 890,
      ctr: 2.77,
      spaces: 15,
      startDate: '2024-12-01',
      endDate: '2024-12-30',
      targetAudience: 'Young Professionals, 22-35',
      geography: 'Delhi NCR'
    }
  ];

  const CampaignCard = ({ campaign }: { campaign: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{campaign.name}</CardTitle>
            <CardDescription className="mt-1">
              {campaign.targetAudience} • {campaign.geography}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Badge 
              variant={campaign.status === 'active' ? 'default' : campaign.status === 'completed' ? 'secondary' : 'outline'}
            >
              {campaign.status}
            </Badge>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Budget</p>
            <p className="font-semibold">₹{campaign.budget.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Spent</p>
            <p className="font-semibold">₹{campaign.spent.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Impressions</p>
            <p className="font-semibold">{campaign.impressions.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">QR Scans</p>
            <p className="font-semibold">{campaign.scans.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>{campaign.spaces} spaces</span>
            <span>•</span>
            <span>{campaign.startDate} to {campaign.endDate}</span>
          </div>
          <div className="flex space-x-2">
            {campaign.status === 'active' && (
              <Button size="sm" variant="outline">
                <Pause className="h-4 w-4 mr-1" />
                Pause
              </Button>
            )}
            <Button size="sm" variant="outline">
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const CreateCampaignForm = () => (
    <div className="space-y-6">
      {campaignStep === 1 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Campaign Basics</h3>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="campaignName">Campaign Name</Label>
            <Input id="campaignName" placeholder="e.g., Mumbai Tech Hubs Q1 2025" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Campaign Objective</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select objective" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="awareness">Brand Awareness</SelectItem>
                  <SelectItem value="leads">Lead Generation</SelectItem>
                  <SelectItem value="footfall">Footfall Increase</SelectItem>
                  <SelectItem value="sales">Sales Conversion</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget (₹)</Label>
              <Input id="budget" type="number" placeholder="100000" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Duration (Days)</Label>
              <Input type="number" placeholder="30" />
            </div>
          </div>
        </div>
      )}
      
      {campaignStep === 2 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="h-5 w-5 text-secondary" />
            <h3 className="font-semibold">Audience & Targeting</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Age Range</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-25">18-25</SelectItem>
                  <SelectItem value="25-35">25-35</SelectItem>
                  <SelectItem value="35-45">35-45</SelectItem>
                  <SelectItem value="45+">45+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Income Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select income level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="premium">Premium (₹10L+)</SelectItem>
                  <SelectItem value="mid">Mid-tier (₹5-10L)</SelectItem>
                  <SelectItem value="entry">Entry (₹3-5L)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cities">Target Cities</Label>
            <Input id="cities" placeholder="Mumbai, Pune, Delhi" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="pincodes">Specific Pincodes (Optional)</Label>
            <Input id="pincodes" placeholder="400001, 411001, 110001" />
          </div>
          
          <div className="space-y-2">
            <Label>Daypart Targeting</Label>
            <div className="flex flex-wrap gap-2">
              {['Morning (6-10 AM)', 'Afternoon (12-4 PM)', 'Evening (6-10 PM)', 'Night (10 PM-12 AM)'].map((time) => (
                <Badge key={time} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                  {time}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {campaignStep === 3 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <ImageIcon className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold">Ad Formats & Creatives</h3>
          </div>
          
          <div className="space-y-4">
            <Label>Select Ad Formats</Label>
            <div className="grid grid-cols-2 gap-3">
              {['Wall Branding', 'Lift Posters', 'Standees', 'QR Codes', 'Digital Screens', 'Kiosks'].map((format) => (
                <Card key={format} className="cursor-pointer hover:border-primary">
                  <CardContent className="p-4 text-center">
                    <p className="font-medium">{format}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Upload Creative Assets</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Drag & drop files or click to browse</p>
              <p className="text-sm text-muted-foreground mt-1">Supports JPG, PNG, PDF up to 10MB</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Campaign Message</Label>
            <Textarea id="message" placeholder="Enter your campaign message or call-to-action" />
          </div>
        </div>
      )}
      
      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={() => setCampaignStep(Math.max(1, campaignStep - 1))}
          disabled={campaignStep === 1}
        >
          Previous
        </Button>
        <div className="flex space-x-2">
          {campaignStep < 3 ? (
            <Button onClick={() => setCampaignStep(campaignStep + 1)}>
              Next Step
            </Button>
          ) : (
            <Button onClick={() => setShowCreateDialog(false)}>
              Create Campaign
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Campaigns</h1>
          <p className="text-muted-foreground">Manage and track your advertising campaigns</p>
        </div>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Create Campaign</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
              <DialogDescription>
                Step {campaignStep} of 3 - Set up your advertising campaign
              </DialogDescription>
            </DialogHeader>
            <CreateCampaignForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search campaigns..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Campaigns</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="paused">Paused</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Campaign Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Campaigns (3)</TabsTrigger>
          <TabsTrigger value="active">Active (1)</TabsTrigger>
          <TabsTrigger value="pending">Pending (1)</TabsTrigger>
          <TabsTrigger value="completed">Completed (1)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {mockCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {mockCampaigns.filter(c => c.status === 'active').map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {mockCampaigns.filter(c => c.status === 'pending').map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {mockCampaigns.filter(c => c.status === 'completed').map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}