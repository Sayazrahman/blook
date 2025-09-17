import React, { useState } from 'react';
import { Button } from '@blook/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Badge } from '@blook/ui/badge';
import { Input } from '@blook/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@blook/ui/select';
import { Checkbox } from '@blook/ui/checkbox';
import { Slider } from '@blook/ui/slider';
import { Label } from '@blook/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@blook/ui/dialog';
import { ImageWithFallback } from "@blook/ui/ImageWithFallback";
import { 
  Search, 
  Filter, 
  MapPin, 
  Users, 
  Calendar, 
  Star, 
  Eye, 
  Heart,
  Building2,
  Coffee,
  Dumbbell,
  Stethoscope,
  ShoppingBag,
  Utensils,
  Car,
  Home,
  Briefcase
} from 'lucide-react';

export function SpacesDiscovery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [footfallRange, setFootfallRange] = useState([1000]);
  const [priceRange, setPriceRange] = useState([50000]);

  const spaceTypes = [
    { id: 'society', label: 'Societies', icon: Building2, count: 245 },
    { id: 'gym', label: 'Gyms', icon: Dumbbell, count: 89 },
    { id: 'cafe', label: 'Cafés', icon: Coffee, count: 156 },
    { id: 'clinic', label: 'Clinics', icon: Stethoscope, count: 67 },
    { id: 'mall', label: 'Malls', icon: ShoppingBag, count: 34 },
    { id: 'restaurant', label: 'Restaurants', icon: Utensils, count: 123 }
  ];

  const mockSpaces = [
    {
      id: 1,
      name: 'Prestige Tech Park - Building A',
      type: 'Society',
      location: 'Sarjapur Road, Bangalore',
      pincode: '560035',
      dailyFootfall: 2500,
      demographics: 'Tech Professionals, 25-40',
      avgIncome: '₹12-18L',
      rating: 4.8,
      reviews: 24,
      formats: ['Wall Branding', 'Lift Posters', 'QR Codes'],
      priceRange: '₹15,000 - ₹45,000',
      availability: 'Available from Jan 20',
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTgwODgzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      verified: true,
      trending: true
    },
    {
      id: 2,
      name: 'FitZone Premium Gym',
      type: 'Gym',
      location: 'Bandra West, Mumbai',
      pincode: '400050',
      dailyFootfall: 800,
      demographics: 'Fitness Enthusiasts, 22-45',
      avgIncome: '₹8-15L',
      rating: 4.6,
      reviews: 18,
      formats: ['Wall Branding', 'Digital Screens', 'Standees'],
      priceRange: '₹8,000 - ₹25,000',
      availability: 'Available now',
      image: 'https://images.unsplash.com/photo-1721394747060-7cfc57104f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBmaXRuZXNzJTIwY2VudGVyfGVufDF8fHx8MTc1ODA4Mzk0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      verified: true,
      trending: false
    },
    {
      id: 3,
      name: 'The Coffee Bean Café',
      type: 'Café',
      location: 'Koramangala, Bangalore',
      pincode: '560034',
      dailyFootfall: 450,
      demographics: 'Young Professionals, 22-35',
      avgIncome: '₹6-12L',
      rating: 4.4,
      reviews: 31,
      formats: ['QR Codes', 'Standees', 'Table Branding'],
      priceRange: '₹5,000 - ₹15,000',
      availability: 'Available from Jan 25',
      image: 'https://images.unsplash.com/photo-1719581228588-84cd8bc8eb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjBzaG9wJTIwY2FmZXxlbnwxfHx8fDE3NTgxMzkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      verified: true,
      trending: false
    },
    {
      id: 4,
      name: 'Metro Mall - Central Atrium',
      type: 'Mall',
      location: 'Gurgaon, Delhi NCR',
      pincode: '122001',
      dailyFootfall: 5000,
      demographics: 'Shoppers, 18-50',
      avgIncome: '₹5-20L',
      rating: 4.7,
      reviews: 42,
      formats: ['Digital Screens', 'Kiosks', 'QR Codes'],
      priceRange: '₹25,000 - ₹75,000',
      availability: 'Available now',
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTgwODgzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      verified: true,
      trending: true
    }
  ];

  const SpaceCard = ({ space }: { space: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <ImageWithFallback
          src={space.image}
          alt={space.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex space-x-2">
          {space.verified && (
            <Badge className="bg-green-500 text-white">Verified</Badge>
          )}
          {space.trending && (
            <Badge className="bg-orange-500 text-white">Trending</Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 text-white hover:text-red-500"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{space.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              {space.location}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{space.rating}</span>
            <span className="text-xs text-muted-foreground">({space.reviews})</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Daily Footfall:</span>
            <span className="font-medium">{space.dailyFootfall.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Demographics:</span>
            <span className="font-medium text-right">{space.demographics}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Avg Income:</span>
            <span className="font-medium">{space.avgIncome}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {space.formats.slice(0, 3).map((format: string) => (
            <Badge key={format} variant="outline" className="text-xs">
              {format}
            </Badge>
          ))}
          {space.formats.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{space.formats.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-primary">{space.priceRange}</p>
            <p className="text-xs text-muted-foreground">{space.availability}</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{space.name}</DialogTitle>
                <DialogDescription>{space.location}</DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ImageWithFallback
                    src={space.image}
                    alt={space.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Space Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span>{space.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Daily Footfall:</span>
                        <span>{space.dailyFootfall.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Demographics:</span>
                        <span>{space.demographics}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg Income:</span>
                        <span>{space.avgIncome}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Available Formats</h4>
                    <div className="flex flex-wrap gap-2">
                      {space.formats.map((format: string) => (
                        <Badge key={format} variant="outline">
                          {format}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pricing</h4>
                    <p className="text-lg font-semibold text-primary">{space.priceRange}</p>
                    <p className="text-sm text-muted-foreground">{space.availability}</p>
                  </div>
                  <Button className="w-full">
                    Request Connect
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Spaces Discovery</h1>
          <p className="text-muted-foreground">Find the perfect spaces for your campaigns</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => setViewMode('grid')}>
            Grid
          </Button>
          <Button variant="outline" onClick={() => setViewMode('list')}>
            List
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search */}
              <div className="space-y-2">
                <Label>Search Location</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="City, Area, Pincode" className="pl-10" />
                </div>
              </div>

              {/* Space Types */}
              <div className="space-y-3">
                <Label>Space Types</Label>
                {spaceTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-3">
                    <Checkbox id={type.id} />
                    <Label htmlFor={type.id} className="flex items-center space-x-2 cursor-pointer">
                      <type.icon className="h-4 w-4 text-muted-foreground" />
                      <span>{type.label}</span>
                      <Badge variant="secondary" className="text-xs">
                        {type.count}
                      </Badge>
                    </Label>
                  </div>
                ))}
              </div>

              {/* Footfall Range */}
              <div className="space-y-3">
                <Label>Daily Footfall Range</Label>
                <Slider
                  value={footfallRange}
                  onValueChange={setFootfallRange}
                  max={10000}
                  min={100}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>100</span>
                  <span>{footfallRange[0].toLocaleString()}</span>
                  <span>10,000+</span>
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <Label>Price Range (₹)</Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100000}
                  min={5000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹5K</span>
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹1L+</span>
                </div>
              </div>

              {/* Demographics */}
              <div className="space-y-3">
                <Label>Age Group</Label>
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

              <div className="space-y-3">
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

              <Button variant="outline" className="w-full">
                Reset Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Spaces Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {mockSpaces.length} spaces in your area
            </p>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="footfall">Highest Footfall</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
            {mockSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline">
              Load More Spaces
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}