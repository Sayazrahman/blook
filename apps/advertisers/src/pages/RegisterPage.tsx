import React, { useState } from 'react';
import { Button } from '@blook/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Input } from '@blook/ui/input';
import { Label } from '@blook/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@blook/ui/select';
import { Checkbox } from '@blook/ui/checkbox';
import { ArrowLeft, Building2, Target, MapPin, DollarSign } from 'lucide-react';

interface RegisterPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard') => void;
  onLogin: (userData: any) => void;
}

export function RegisterPage({ onNavigate, onLogin }: RegisterPageProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    mobile: '',
    otp: '',
    industry: '',
    subCategory: '',
    cities: '',
    pincodes: '',
    budgetRange: '',
    objective: '',
    gst: '',
    pan: ''
  });
  const [otpSent, setOtpSent] = useState(false);

  const industries = [
    'FMCG & Consumer Goods',
    'Healthcare & Pharmaceuticals',
    'Technology & Software',
    'Financial Services',
    'Education & Training',
    'Real Estate',
    'Food & Beverages',
    'Retail & E-commerce',
    'Automotive',
    'Travel & Hospitality'
  ];

  const objectives = [
    'Brand Awareness',
    'Lead Generation',
    'Footfall Increase',
    'Sales Conversion',
    'Product Launch',
    'Event Promotion'
  ];

  const budgetRanges = [
    '₹10,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    '₹10,00,000+'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendOTP = () => {
    // Mock OTP sending
    setOtpSent(true);
    setTimeout(() => {
      // Auto-fill OTP for demo
      setFormData(prev => ({ ...prev, otp: '123456' }));
    }, 2000);
  };

  const verifyOTP = () => {
    if (formData.otp === '123456') {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    // Mock successful registration
    onLogin({
      name: formData.contactPerson,
      company: formData.companyName,
      email: formData.email,
      industry: formData.industry
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => step === 1 ? onNavigate('landing') : setStep(1)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div>
              <CardTitle className="text-2xl">Join BLook Advertisers</CardTitle>
              <CardDescription>
                Step {step} of 2 - {step === 1 ? 'Account Setup' : 'Business Details'}
              </CardDescription>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <div className={`h-2 rounded-full flex-1 ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`} />
            <div className={`h-2 rounded-full flex-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 1 && (
            <>
              {/* Basic Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Company Information</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company/Brand Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="e.g., Acme Corp"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="e.g., John Smith"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@acmecorp.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="flex-1"
                    />
                    <Button
                      onClick={sendOTP}
                      disabled={!formData.mobile || otpSent}
                      variant="outline"
                    >
                      {otpSent ? 'Sent' : 'Send OTP'}
                    </Button>
                  </div>
                </div>

                {otpSent && (
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP *</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="otp"
                        value={formData.otp}
                        onChange={(e) => handleInputChange('otp', e.target.value)}
                        placeholder="123456"
                        className="flex-1"
                      />
                      <Button
                        onClick={verifyOTP}
                        disabled={formData.otp.length !== 6}
                      >
                        Verify
                      </Button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gst">GST Number (Optional)</Label>
                    <Input
                      id="gst"
                      value={formData.gst}
                      onChange={(e) => handleInputChange('gst', e.target.value)}
                      placeholder="22AAAAA0000A1Z5"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number (Optional)</Label>
                    <Input
                      id="pan"
                      value={formData.pan}
                      onChange={(e) => handleInputChange('pan', e.target.value)}
                      placeholder="ABCDE1234F"
                    />
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => setStep(2)}
                disabled={!formData.companyName || !formData.contactPerson || !formData.email || !formData.mobile || (otpSent && formData.otp !== '123456')}
              >
                Continue to Business Details
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              {/* Business Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Business & Campaign Details</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Industry Category *</Label>
                    <Select onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subCategory">Sub-category</Label>
                    <Input
                      id="subCategory"
                      value={formData.subCategory}
                      onChange={(e) => handleInputChange('subCategory', e.target.value)}
                      placeholder="e.g., Packaged Foods"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <h4 className="font-medium">Target Geography</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cities">Target Cities *</Label>
                      <Input
                        id="cities"
                        value={formData.cities}
                        onChange={(e) => handleInputChange('cities', e.target.value)}
                        placeholder="e.g., Mumbai, Delhi, Bangalore"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincodes">Specific Pincodes (Optional)</Label>
                      <Input
                        id="pincodes"
                        value={formData.pincodes}
                        onChange={(e) => handleInputChange('pincodes', e.target.value)}
                        placeholder="e.g., 400001, 110001"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <h4 className="font-medium">Campaign Preferences</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Monthly Budget Range *</Label>
                      <Select onValueChange={(value) => handleInputChange('budgetRange', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Primary Objective *</Label>
                      <Select onValueChange={(value) => handleInputChange('objective', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select objective" />
                        </SelectTrigger>
                        <SelectContent>
                          {objectives.map((objective) => (
                            <SelectItem key={objective} value={objective}>
                              {objective}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{' '}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={handleSubmit}
                disabled={!formData.industry || !formData.cities || !formData.budgetRange || !formData.objective}
              >
                Create Account & Access Dashboard
              </Button>
            </>
          )}

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <button
                onClick={() => onNavigate('login')}
                className="text-primary hover:underline"
              >
                Sign in here
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}