import React from 'react';
import TopHeader from '../Dashboard/TopHeader';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  onToggleSidebar?: () => void; // This prop is available on TopHeader for mobile sidebar toggling
}

const Header: React.FC<HeaderProps> = ({ className, onToggleSidebar }) => {
  // TopHeader is a self-contained component that handles its own fixed positioning,
  // styling, and internal elements (search, notifications, profile menu).
  // The onToggleSidebar prop is passed through to support mobile navigation patterns
  // if MainAppLayout or another parent component manages the mobile sidebar state.
  return <TopHeader className={cn(className)} onToggleSidebar={onToggleSidebar} />;
};

export default Header;
