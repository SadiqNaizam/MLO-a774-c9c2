import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import ChartsSection from '../components/Dashboard/ChartsSection';
import TargetSection from '../components/Dashboard/TargetSection';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="grid gap-6">
        <Alert className="bg-blue-50 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
          <Info className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <AlertDescription className="ml-3 text-sm text-blue-700 dark:text-blue-300">
            This dashboard example was created using only the available elements and components, no additional SCSS was written!
          </AlertDescription>
        </Alert>

        <StatsCardGrid />
        <ChartsSection />
        <TargetSection />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
