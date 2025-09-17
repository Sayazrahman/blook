import React, { useState } from 'react';
import { Button } from '@blook/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Badge } from '@blook/ui/badge';
import { Input } from '@blook/ui/input';
import { QrCode, Plus, Download, Eye, Share, BarChart3, Users, TrendingUp } from 'lucide-react';

export function QRCampaigns() {
  const mockQRCampaigns = [
    {
      id: 1,
      name: 'Mumbai Tech Hub QR',
      qrCode: 'BLK-QR-MTH-001',
      campaign: 'Mumbai Tech Hubs Campaign',
      scans: 1240,
      uniqueScans: 890,
      conversions: 45,
      conversionRate: 5.1,
      createdDate: '2024-12-15',
      status: 'active',
      locations: ['Prestige Tech Park', 'Mindspace Malad', 'WeWork BKC']
    },
    {
      id: 2,
      name: 'Pune Fitness QR',
      qrCode: 'BLK-QR-PFT-002',
      campaign: 'Pune Fitness Centers',
      scans: 0,
      uniqueScans: 0,
      conversions: 0,
      conversionRate: 0,
      createdDate: '2025-01-10',
      status: 'pending',
      locations: ['FitZone Baner', 'Gold\'s Gym Kothrud']
    },
    {
      id: 3,
      name: 'Delhi Cafe QR',
      qrCode: 'BLK-QR-DCF-003',
      campaign: 'Delhi Cafes Promo',
      scans: 890,
      uniqueScans: 650,
      conversions: 32,
      conversionRate: 4.9,
      createdDate: '2024-12-01',
      status: 'completed',
      locations: ['Coffee Bean CP', 'Starbucks Khan Market', 'Blue Tokai GK']
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">QR Campaigns</h1>
          <p className="text-muted-foreground">Create and manage QR code campaigns for interactive experiences</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create QR Campaign</span>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total QR Scans</p>
                <p className="text-2xl font-bold">2,130</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12.5%
                </p>
              </div>
              <QrCode className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unique Users</p>
                <p className="text-2xl font-bold">1,540</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +8.2%
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
                  +15.3%
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Conv. Rate</p>
                <p className="text-2xl font-bold">5.0%</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +0.3%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* QR Campaigns List */}
      <Card>
        <CardHeader>
          <CardTitle>QR Campaigns</CardTitle>
          <CardDescription>Manage your QR code campaigns and track performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockQRCampaigns.map((qr) => (
              <div key={qr.id} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{qr.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Campaign: {qr.campaign} • Code: {qr.qrCode}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Created: {qr.createdDate} • Locations: {qr.locations.join(', ')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={qr.status === 'active' ? 'default' : qr.status === 'completed' ? 'secondary' : 'outline'}
                    >
                      {qr.status}
                    </Badge>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{qr.scans.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Total Scans</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-secondary">{qr.uniqueScans.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Unique Scans</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{qr.conversions}</p>
                    <p className="text-sm text-muted-foreground">Conversions</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">{qr.conversionRate}%</p>
                    <p className="text-sm text-muted-foreground">Conv. Rate</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded mx-auto mb-2 flex items-center justify-center">
                      <QrCode className="h-8 w-8" />
                    </div>
                    <p className="text-sm text-muted-foreground">QR Code</p>
                  </div>
                </div>

                {qr.status === 'active' && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        Last scan: 2 hours ago • Peak time: 6-8 PM
                      </div>
                      <Button variant="outline" size="sm">
                        View Analytics
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* QR Code Generator */}
      <Card>
        <CardHeader>
          <CardTitle>Quick QR Generator</CardTitle>
          <CardDescription>Generate a QR code for immediate use</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Destination URL</label>
                <Input placeholder="https://your-landing-page.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Campaign Name</label>
                <Input placeholder="e.g., Product Launch QR" />
              </div>
              <div>
                <label className="text-sm font-medium">UTM Parameters (Optional)</label>
                <Input placeholder="utm_source=blook&utm_medium=qr&utm_campaign=..." />
              </div>
              <Button className="w-full">
                <QrCode className="h-4 w-4 mr-2" />
                Generate QR Code
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-48 h-48 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <QrCode className="h-16 w-16 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">QR code will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}