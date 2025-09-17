import React, { useState } from 'react';
import { Button } from '@blook/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@blook/ui/card';
import { Badge } from '@blook/ui/badge';
import { Avatar, AvatarFallback } from '@blook/ui/avatar';
import { 
  LayoutDashboard, 
  Megaphone, 
  Search, 
  QrCode, 
  BarChart3, 
  CreditCard, 
  Settings, 
  LogOut,
  Plus,
  TrendingUp,
  Eye,
  Users,
  MapPin,
  Calendar,
  Filter,
  Building2,
  Coffee,
  Dumbbell
} from 'lucide-react';
import { DashboardHome } from '../dashboard/DashboardHome';
import { CampaignsPage } from '../dashboard/CampaignsPage';
import { SpacesDiscovery } from '../dashboard/SpacesDiscovery';
import { QRCampaigns } from '../dashboard/QRCampaigns';
import { ReportsAnalytics } from '../dashboard/ReportsAnalytics';
import { PaymentsInvoices } from '../dashboard/PaymentsInvoices';
import { ProfileSettings } from '../dashboard/ProfileSettings';

interface DashboardProps {
  user: any;
  onLogout: () => void;
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard') => void;
}

type DashboardPage = 'home' | 'campaigns' | 'spaces' | 'qr' | 'reports' | 'payments' | 'settings';

export function Dashboard({ user, onLogout, onNavigate }: DashboardProps) {
  const [activePage, setActivePage] = useState<DashboardPage>('home');

  const sidebarItems = [
    { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
    { id: 'spaces', label: 'Spaces Discovery', icon: Search },
    { id: 'qr', label: 'QR Campaigns', icon: QrCode },
    { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
    { id: 'payments', label: 'Payments & Invoices', icon: CreditCard },
    { id: 'settings', label: 'Profile & Settings', icon: Settings }
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <DashboardHome user={user} onNavigate={setActivePage} />;
      case 'campaigns':
        return <CampaignsPage />;
      case 'spaces':
        return <SpacesDiscovery />;
      case 'qr':
        return <QRCampaigns />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'payments':
        return <PaymentsInvoices />;
      case 'settings':
        return <ProfileSettings user={user} />;
      default:
        return <DashboardHome user={user} onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-xl font-bold">BLook</span>
            <Badge variant="secondary" className="text-xs">ADV</Badge>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id as DashboardPage)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activePage === item.id
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-sidebar-border">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar>
              <AvatarFallback>
                {user?.name?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{user?.name || 'User'}</p>
              <p className="text-sm text-muted-foreground truncate">{user?.company || 'Company'}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="w-full justify-start text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}