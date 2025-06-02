import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, UsersRound, DollarSign, Activity, Briefcase } from 'lucide-react';

interface StatCardData {
  id: string;
  title: string;
  value: string;
  change?: {
    amount: string;
    type: 'positive' | 'negative' | 'neutral';
    icon: React.ElementType;
  };
  subText?: string; 
  icon: React.ElementType;
  iconBgColor: string; // Tailwind background color class for icon wrapper
}

const statsData: StatCardData[] = [
  {
    id: 'new-accounts',
    title: 'New Accounts',
    value: '234%',
    change: {
      amount: '', // Percentage is the main value
      type: 'positive' as const,
      icon: ArrowUp,
    },
    icon: UsersRound,
    iconBgColor: 'bg-blue-100 dark:bg-blue-900',
    subText: '+58 this month'
  },
  {
    id: 'total-expenses',
    title: 'Total Expenses',
    value: '71%',
    change: {
      amount: '',
      type: 'negative' as const, // Negative in the sense of reduction, could be positive for company
      icon: ArrowDown,
    },
    icon: DollarSign, // Using DollarSign as a generic expenses icon
    iconBgColor: 'bg-red-100 dark:bg-red-900',
    subText: 'Reduced by 12%'
  },
  {
    id: 'company-value',
    title: 'Company Value',
    value: '$1,45M',
    icon: Activity,
    iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
    subText: '+72 points Index'
  },
  {
    id: 'new-employees',
    title: 'New Employees',
    value: '+34 hires',
    change: {
      amount: '', 
      type: 'positive' as const,
      icon: ArrowUp,
    },
    icon: Briefcase,
    iconBgColor: 'bg-green-100 dark:bg-green-900',
    subText: 'Target: 50'
  },
];

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {statsData.map((stat) => {
        const ChangeIcon = stat.change?.icon;
        return (
          <Card key={stat.id} className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={cn('p-2 rounded-md', stat.iconBgColor)}>
                <stat.icon className={cn('h-5 w-5',
                  stat.iconBgColor.includes('blue') ? 'text-blue-600 dark:text-blue-300' :
                  stat.iconBgColor.includes('red') ? 'text-red-600 dark:text-red-300' :
                  stat.iconBgColor.includes('yellow') ? 'text-yellow-600 dark:text-yellow-300' :
                  stat.iconBgColor.includes('green') ? 'text-green-600 dark:text-green-300' :
                  'text-foreground'
                )} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground flex items-center">
                {stat.change && ChangeIcon && (
                  <ChangeIcon 
                    className={cn('h-6 w-6 mr-1',
                      stat.change.type === 'positive' ? 'text-green-500' :
                      stat.change.type === 'negative' ? 'text-red-500' :
                      'text-gray-500'
                    )}
                  />
                )}
                {stat.value}
              </div>
              {stat.subText && <p className="text-xs text-muted-foreground pt-1">{stat.subText}</p>}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCardGrid;
