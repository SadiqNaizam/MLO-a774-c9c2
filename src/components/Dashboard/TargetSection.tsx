import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress'; // Using shadcn Progress
import { Settings2, ArrowRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TargetItemData {
  id: string;
  title: string;
  percentage: number;
  label: string;
  // Shadcn Progress uses primary color by default. Custom colors need custom styling or different component.
  // For this example, we'll use the default. 
  // If we need specific colors as in image, we'd need to provide custom CSS variables or classes to Progress component,
  // or build a custom progress bar.
  // For now, I'll pass a representative color class to apply to the text for visual cue.
  colorClass: 'text-red-500' | 'text-green-500' | 'text-yellow-600' | 'text-primary';
}

const targetData: TargetItemData[] = [
  {
    id: 'income-target',
    title: '71%',
    percentage: 71,
    label: 'Income Target',
    colorClass: 'text-red-500' as const, // Example color, can be dynamic
  },
  {
    id: 'expenses-target',
    title: '54%',
    percentage: 54,
    label: 'Expenses Target',
    colorClass: 'text-green-500' as const,
  },
  {
    id: 'spendings-target',
    title: '32%',
    percentage: 32,
    label: 'Spendings Target',
    colorClass: 'text-yellow-600' as const,
  },
  {
    id: 'totals-target',
    title: '89%',
    percentage: 89,
    label: 'Totals Target',
    colorClass: 'text-primary' as const,
  },
];

interface TargetSectionProps {
  className?: string;
}

const TargetSection: React.FC<TargetSectionProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Target Section</CardTitle>
          <CardDescription>Monthly performance against targets.</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings2 className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Manage Targets</DropdownMenuItem>
              <DropdownMenuItem>Generate Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetData.map((item) => (
            <div key={item.id} className="p-4 rounded-lg border bg-card">
              <div className={cn('text-2xl font-bold mb-1', item.colorClass)}>{item.title}</div>
              <Progress value={item.percentage} className="h-2 mb-2" /> 
              {/* Custom colored progress bar - example for one item, this requires custom CSS for the progress indicator itself. 
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-2">
                    <div style={{ width: `${item.percentage}%` }} className={cn("h-full", 
                      item.colorClass === 'text-red-500' ? 'bg-red-500' : 
                      item.colorClass === 'text-green-500' ? 'bg-green-500' :
                      item.colorClass === 'text-yellow-600' ? 'bg-yellow-500' :
                      'bg-primary'
                    )}></div>
                  </div> 
              */}
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TargetSection;
