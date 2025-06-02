import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  /** Optional className for the direct child wrapper of {children} within the main content area. */
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  // Example state for managing mobile sidebar visibility (not fully implemented as SidebarNav is always fixed)
  // const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
  // const toggleMobileSidebar = React.useCallback(() => {
  //   setIsMobileSidebarOpen(prev => !prev);
  //   // This would typically control a mobile-specific sidebar (e.g., in a <Sheet>)
  //   // or pass a prop to <Sidebar /> if SidebarNav itself was designed to be collapsible/hidden.
  // }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 
        The Sidebar component renders SidebarNav from src/components/Dashboard/SidebarNav.tsx.
        SidebarNav is styled with: fixed left-0 top-0 w-64 h-screen bg-sidebar.
        It will always be visible and occupy the left 64 units of width.
      */}
      <Sidebar />

      {/*
        The Header component renders TopHeader from src/components/Dashboard/TopHeader.tsx.
        TopHeader is styled with: fixed top-0 md:left-64 left-0 right-0 z-10 h-[70px] bg-card.
        - On medium screens and up (md+): It's positioned left-64, aligning next to the sidebar.
        - On smaller screens (<md): It's positioned left-0, at the screen edge.
        The onToggleSidebar prop is available if mobile sidebar functionality is fully implemented.
      */}
      <Header /* onToggleSidebar={toggleMobileSidebar} */ />

      {/* 
        Main content area.
        - ml-64: Creates a margin on the left to accommodate the fixed w-64 Sidebar. 
                 This applies to all screen sizes as SidebarNav is always present.
        - pt-[70px]: Creates padding on the top to accommodate the fixed h-[70px] Header.
      */}
      <main className="ml-64 pt-[70px]">
        {/* 
          Inner div for content padding, as specified by Layout Requirements: mainContent.layout: "p-6".
          The optional className prop is applied here for further customization of the content wrapper.
        */}
        <div className={cn("p-6", className)}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
