import React, { useState } from 'react';
import { Button } from '@blook/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Input } from '@blook/ui/input';
import { Label } from '@blook/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@blook/ui/tabs';
import { ArrowLeft, Mail, Phone, Building2, Store, Users, UserCheck } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard') => void;
  onLogin: (userData: any) => void;
}

export function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [userType, setUserType] = useState<'advertiser' | 'space' | 'vendor' | 'customer'>('advertiser');
  const [credentials, setCredentials] = useState({
    email: '',
    phone: '',
    otp: ''
  });
  const [otpSent, setOtpSent] = useState(false);

  const sendOTP = () => {
    setOtpSent(true);
    // Mock OTP - auto-fill after 2 seconds for demo
    setTimeout(() => {
      setCredentials(prev => ({ ...prev, otp: '123456' }));
    }, 2000);
  };

  const handleLogin = () => {
    // Mock successful login
    const userData = {
      name: 'Demo User',
      company: 'Demo Company',
      email: credentials.email || 'demo@company.com',
      type: userType
    };
    onLogin(userData);
  };

  const userTypes = [
    {
      id: 'advertiser',
      label: 'Advertiser',
      icon: Building2,
      description: 'Book spaces and run campaigns',
      color: 'text-primary'
    },
    {
      id: 'space',
      label: 'Space Owner',
      icon: Store,
      description: 'List and manage your spaces',
      color: 'text-secondary'
    },
    {
      id: 'vendor',
      label: 'Vendor',
      icon: Users,
      description: 'Provide services and support',
      color: 'text-green-600'
    },
    {
      id: 'customer',
      label: 'Customer',
      icon: UserCheck,
      description: 'Discover community deals',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('landing')}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div>
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>Sign in to your BLook account</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* User Type Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">I am a:</Label>
            <div className="grid grid-cols-2 gap-2">
              {userTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setUserType(type.id as any)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    userType === type.id
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <type.icon className={`h-4 w-4 ${type.color}`} />
                    <span className="font-medium text-sm">{type.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Login Method Tabs */}
          <Tabs defaultValue="email" onValueChange={(value) => setLoginMethod(value as 'email' | 'phone')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Phone</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                />
              </div>
              <Button
                className="w-full"
                onClick={sendOTP}
                disabled={!credentials.email || otpSent}
              >
                {otpSent ? 'OTP Sent to Email' : 'Send OTP'}
              </Button>
            </TabsContent>

            <TabsContent value="phone" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={credentials.phone}
                  onChange={(e) => setCredentials(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                />
              </div>
              <Button
                className="w-full"
                onClick={sendOTP}
                disabled={!credentials.phone || otpSent}
              >
                {otpSent ? 'OTP Sent to Phone' : 'Send OTP'}
              </Button>
            </TabsContent>
          </Tabs>

          {/* OTP Verification */}
          {otpSent && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  value={credentials.otp}
                  onChange={(e) => setCredentials(prev => ({ ...prev, otp: e.target.value }))}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                />
              </div>
              <Button
                className="w-full"
                onClick={handleLogin}
                disabled={credentials.otp.length !== 6}
              >
                Verify & Sign In
              </Button>
              <div className="text-center">
                <button
                  onClick={() => setOtpSent(false)}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Didn't receive? Resend OTP
                </button>
              </div>
            </div>
          )}

          {/* Demo Access */}
          <div className="border-t pt-4">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">For demo purposes:</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => onLogin({
                  name: 'Demo Advertiser',
                  company: 'Demo Company',
                  email: 'demo@company.com',
                  type: 'advertiser'
                })}
              >
                Quick Demo Access
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              New to BLook?{' '}
              <button
                onClick={() => onNavigate('register')}
                className="text-primary hover:underline"
              >
                Create an account
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}