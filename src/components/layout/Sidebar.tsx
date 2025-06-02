import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
  // Props for mobile sidebar state management could be added here if SidebarNav were adaptable
  // e.g., isMobileOpen?: boolean; onMobileClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav is a self-contained component that handles its own fixed positioning and styling.
  // As per its current implementation in SidebarNav.tsx, it is always fixed and visible (w-64).
  // If mobile-specific behavior (like a drawer) is needed, SidebarNav would need to be modified
  // or conditionally rendered within a Sheet component, likely managed by MainAppLayout.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
