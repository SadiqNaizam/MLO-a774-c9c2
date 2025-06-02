import React from 'react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  BarChartHorizontalBig, // Using this for 'Sales'
  Briefcase, // For 'CRM'
  FileText,
  Settings,
  ChevronDown,
  Circle, // For sub-item indicator
  Palette, // For UI Components
  LayoutGrid, // For Dashboard Widgets
  ListChecks, // For Forms
  PieChart as PieChartIcon // For Charts section
} from 'lucide-react';

interface NavItemProps {
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  isSubItem?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon: Icon, href, isActive, isSubItem }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center py-2 px-3 rounded-md text-sm font-medium transition-colors',
        isSubItem ? 'pl-9' : 'pl-3',
        isActive
          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        'group'
      )}
    >
      <Icon className={cn('mr-3 h-5 w-5', isActive ? 'text-sidebar-primary-foreground' : 'text-sidebar-foreground group-hover:text-sidebar-accent-foreground')} />
      {label}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  // Dummy data for navigation links
  const navItems = [
    {
      title: 'MENU' as const,
      links: [
        {
          label: 'Dashboards' as const,
          icon: LayoutDashboard,
          href: '#',
          // isActive: true, // Active state managed by router or parent
          subItems: [
            { label: 'Analytics' as const, icon: Circle, href: '#', isSubItem: true },
            { label: 'Commerce' as const, icon: Circle, href: '#', isSubItem: true },
            { label: 'Sales' as const, icon: Circle, href: '#', isSubItem: true },
            {
              label: 'Minimal' as const,
              icon: Circle,
              href: '#',
              isActive: true, // Example of active sub-sub-item
              isSubItem: true,
            },
          ],
        },
        { label: 'CRM' as const, icon: Briefcase, href: '#' },
        {
          label: 'Pages' as const,
          icon: FileText,
          href: '#',
          subItems: [
            { label: 'Profile' as const, icon: Circle, href: '#', isSubItem: true },
            { label: 'Settings' as const, icon: Circle, href: '#', isSubItem: true },
          ],
        },
        { label: 'Applications' as const, icon: LayoutGrid, href: '#' },
      ],
    },
    {
      title: 'UI COMPONENTS' as const,
      links: [
        { label: 'Elements' as const, icon: Palette, href: '#' },
        { label: 'Components' as const, icon: LayoutGrid, href: '#' },
        { label: 'Tables' as const, icon: ListChecks, href: '#' },
      ],
    },
    {
      title: 'DASHBOARD WIDGETS' as const,
      links: [
        { label: 'Chart Boxes' as const, icon: PieChartIcon, href: '#' },
        { label: 'Profile Boxes' as const, icon: Users, href: '#' },
      ],
    },
  ];

  // For Accordion, a default value for active item. In a real app, this would be dynamic.
  const [activeAccordionItem, setActiveAccordionItem] = React.useState<string | undefined>('Dashboards');

  return (
    <aside className={cn('w-64 h-screen bg-sidebar text-sidebar-foreground fixed left-0 top-0 flex flex-col', className)}>
      <div className="h-[70px] flex items-center px-6 border-b border-sidebar-border">
        <Palette className="h-8 w-8 text-sidebar-primary mr-2" />
        <h1 className="text-xl font-semibold text-sidebar-foreground">Architect</h1>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-4">
          {navItems.map((group) => (
            <div key={group.title}>
              {group.title && <h2 className="px-3 mb-2 text-xs font-semibold tracking-wider text-sidebar-foreground/70 uppercase">{group.title}</h2>}
              {group.links.map((item) =>
                item.subItems ? (
                  <Accordion type="single" collapsible key={item.label} value={activeAccordionItem} onValueChange={setActiveAccordionItem} defaultValue="Dashboards">
                    <AccordionItem value={item.label} className="border-b-0">
                      <AccordionTrigger
                        className={cn(
                          'flex items-center w-full py-2 px-3 rounded-md text-sm font-medium transition-colors',
                          activeAccordionItem === item.label ? 'text-sidebar-accent-foreground' : 'text-sidebar-foreground',
                          'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-between group'
                        )}
                      >
                        <div className="flex items-center">
                          <item.icon className={cn('mr-3 h-5 w-5', activeAccordionItem === item.label ? 'text-sidebar-accent-foreground' : 'text-sidebar-foreground group-hover:text-sidebar-accent-foreground')} />
                          {item.label}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0 pt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <NavItem key={subItem.label} {...subItem} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <NavItem key={item.label} {...item} />
                )
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border">
        <Button variant="outline" className="w-full bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground">
          <Settings className="mr-2 h-4 w-4" />
          App Settings
        </Button>
      </div>
    </aside>
  );
};

export default SidebarNav;
