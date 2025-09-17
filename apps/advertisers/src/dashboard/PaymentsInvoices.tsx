import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Button } from '@blook/ui/button';
import { Badge } from '@blook/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@blook/ui/tabs';
import { Input } from '@blook/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@blook/ui/select';
import { 
  Download, 
  Eye, 
  CreditCard, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Receipt,
  Search
} from 'lucide-react';

export function PaymentsInvoices() {
  const mockInvoices = [
    {
      id: 'INV-2025-001',
      campaign: 'Mumbai Tech Hubs Campaign',
      amount: 120000,
      status: 'paid',
      dueDate: '2025-01-15',
      paidDate: '2025-01-10',
      method: 'Bank Transfer',
      gst: 21600,
      total: 141600
    },
    {
      id: 'INV-2025-002',
      campaign: 'Pune Fitness Centers',
      amount: 50000,
      status: 'pending',
      dueDate: '2025-01-20',
      paidDate: null,
      method: null,
      gst: 9000,
      total: 59000
    },
    {
      id: 'INV-2024-095',
      campaign: 'Delhi Cafes Promo',
      amount: 75000,
      status: 'paid',
      dueDate: '2024-12-30',
      paidDate: '2024-12-28',
      method: 'Razorpay',
      gst: 13500,
      total: 88500
    },
    {
      id: 'INV-2024-094',
      campaign: 'Bangalore Mall Campaign',
      amount: 25000,
      status: 'overdue',
      dueDate: '2024-12-15',
      paidDate: null,
      method: null,
      gst: 4500,
      total: 29500
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Bank Transfer',
      details: 'HDFC Bank ****1234',
      isDefault: true,
      status: 'verified'
    },
    {
      id: 2,
      type: 'Credit Card',
      details: 'Visa ****5678',
      isDefault: false,
      status: 'verified'
    },
    {
      id: 3,
      type: 'UPI',
      details: 'company@upi',
      isDefault: false,
      status: 'pending'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-500 text-white">Paid</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-500 text-white">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Payments & Invoices</h1>
          <p className="text-muted-foreground">Manage your billing and payment information</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Download Statement
        </Button>
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">₹2,95,000</p>
                <p className="text-sm text-green-600">This month: ₹1,20,000</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Outstanding</p>
                <p className="text-2xl font-bold">₹88,500</p>
                <p className="text-sm text-orange-600">2 pending invoices</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paid This Month</p>
                <p className="text-2xl font-bold">₹1,41,600</p>
                <p className="text-sm text-green-600">1 invoice</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold">₹29,500</p>
                <p className="text-sm text-red-600">1 invoice</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-6">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payments">Payment Methods</TabsTrigger>
          <TabsTrigger value="settings">Billing Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search invoices..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Invoices</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Invoices List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>Your billing history and payment status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockInvoices.map((invoice) => (
                  <div key={invoice.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{invoice.id}</h4>
                        <p className="text-sm text-muted-foreground">{invoice.campaign}</p>
                        <p className="text-xs text-muted-foreground">
                          Due: {invoice.dueDate}
                          {invoice.paidDate && ` • Paid: ${invoice.paidDate}`}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(invoice.status)}
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="font-semibold">₹{invoice.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">GST</p>
                        <p className="font-semibold">₹{invoice.gst.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="font-semibold text-primary">₹{invoice.total.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Payment Method</p>
                        <p className="font-semibold">{invoice.method || 'Pending'}</p>
                      </div>
                    </div>

                    {invoice.status === 'pending' && (
                      <div className="mt-4 pt-4 border-t">
                        <Button size="sm" className="w-full sm:w-auto">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Pay Now
                        </Button>
                      </div>
                    )}

                    {invoice.status === 'overdue' && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                          <p className="text-sm text-red-600">
                            This invoice is overdue. Please pay immediately to avoid service disruption.
                          </p>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            <CreditCard className="h-4 w-4 mr-2" />
                            Pay Now
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods for automatic billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <CreditCard className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{method.type}</h4>
                          <p className="text-sm text-muted-foreground">{method.details}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            {method.isDefault && (
                              <Badge variant="outline" className="text-xs">Default</Badge>
                            )}
                            <Badge 
                              variant={method.status === 'verified' ? 'default' : 'outline'}
                              className="text-xs"
                            >
                              {method.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>Update your billing details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Company Name</label>
                  <Input defaultValue="Demo Company Pvt Ltd" />
                </div>
                <div>
                  <label className="text-sm font-medium">GST Number</label>
                  <Input defaultValue="22AAAAA0000A1Z5" />
                </div>
                <div>
                  <label className="text-sm font-medium">PAN Number</label>
                  <Input defaultValue="ABCDE1234F" />
                </div>
                <div>
                  <label className="text-sm font-medium">Billing Address</label>
                  <Input defaultValue="123 Business Street, Mumbai, 400001" />
                </div>
                <Button>Update Billing Info</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Preferences</CardTitle>
                <CardDescription>Configure your payment settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Payment Terms</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment terms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="net15">Net 15 days</SelectItem>
                      <SelectItem value="net30">Net 30 days</SelectItem>
                      <SelectItem value="immediate">Immediate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Auto-pay</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select auto-pay option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disabled">Disabled</SelectItem>
                      <SelectItem value="enabled">Enabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Invoice Notifications</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select notification preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email only</SelectItem>
                      <SelectItem value="sms">SMS only</SelectItem>
                      <SelectItem value="both">Email & SMS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}