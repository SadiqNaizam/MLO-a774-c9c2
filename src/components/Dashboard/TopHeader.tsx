import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'; // For potential mobile sidebar toggle
import { Menu, Search, Bell, Settings, UserCircle2, LogOut, CreditCard, HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TopHeaderProps {
  className?: string;
  onToggleSidebar?: () => void; // Optional: for mobile sidebar toggle
}

const TopHeader: React.FC<TopHeaderProps> = ({ className, onToggleSidebar }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 md:left-64 right-0 z-10 h-[70px] flex items-center justify-between px-4 md:px-6 bg-card border-b',
        className
      )}
    >
      <div className="flex items-center">
        {onToggleSidebar && (
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onToggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        )}
        {/* Simplified breadcrumbs or page title area */}
        <div>
          <h1 className="text-lg font-semibold text-foreground">Minimal Dashboard</h1>
          <p className="text-xs text-muted-foreground">Dashboard / Minimal Dashboard Example</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 md:space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-8 w-[200px] lg:w-[300px]" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 min-w-0 p-0 flex items-center justify-center text-xs rounded-full">3</Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start p-3">
              <p className="font-medium text-sm">New user registered</p>
              <p className="text-xs text-muted-foreground">John Doe just signed up.</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start p-3">
              <p className="font-medium text-sm">Server Reboot Scheduled</p>
              <p className="text-xs text-muted-foreground">Scheduled for 2:00 AM UTC.</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start p-3">
              <p className="font-medium text-sm">Payment Received</p>
              <p className="text-xs text-muted-foreground">$250.00 from Acme Corp.</p>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center">
              <Button variant="link" className="text-sm p-0 h-auto">View all notifications</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Quick Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Appearance</DropdownMenuItem>
            <DropdownMenuItem>Language</DropdownMenuItem>
            <DropdownMenuItem>API Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 p-1 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Alina Mclourd" />
                <AvatarFallback><UserCircle2 className="h-6 w-6" /></AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">Alina Mclourd</span>
                <span className="text-xs text-muted-foreground">VP People Manager</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle2 className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
