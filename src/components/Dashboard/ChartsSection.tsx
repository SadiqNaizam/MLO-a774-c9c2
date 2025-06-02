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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from 'recharts';
import { MoreHorizontal, Settings2, Download } from 'lucide-react';

// Data for Traffic Sources Chart (Bar + Line)
const trafficData = [
  { name: 'Jan 00', websiteBlog: 400, socialMedia: 240 },
  { name: 'Jan 02', websiteBlog: 550, socialMedia: 398 },
  { name: 'Jan 03', websiteBlog: 420, socialMedia: 680 },
  { name: 'Jan 04', websiteBlog: 680, socialMedia: 450 },
  { name: 'Jan 05', websiteBlog: 220, socialMedia: 710 },
  { name: 'Jan 06', websiteBlog: 480, socialMedia: 200 },
  { name: 'Jan 07', websiteBlog: 150, socialMedia: 300 },
  { name: 'Jan 08', websiteBlog: 350, socialMedia: 520 },
  { name: 'Jan 09', websiteBlog: 780, socialMedia: 250 },
  { name: 'Jan 10', websiteBlog: 430, socialMedia: 180 },
  { name: 'Jan 11', websiteBlog: 200, socialMedia: 120 },
  { name: 'Jan 12', websiteBlog: 100, socialMedia: 210 },
];

// Data for Income Donut Chart (Radial Bar style)
const incomeProgressData = [{ name: 'Income', value: 75, fill: 'hsl(var(--primary))' }];

interface ChartsSectionProps {
  className?: string;
}

const ChartsSection: React.FC<ChartsSectionProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-5 gap-6', className)}>
      {/* Traffic Sources Chart - Spanning 3 columns on large screens */}
      <Card className="lg:col-span-3 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Website Blog vs Social Media</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem><Download className="mr-2 h-4 w-4" /> Export Data</DropdownMenuItem>
              <DropdownMenuItem><Settings2 className="mr-2 h-4 w-4" /> Configure Chart</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trafficData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend iconSize={10} wrapperStyle={{fontSize: '12px'}} />
              <Bar yAxisId="left" dataKey="websiteBlog" name="Website Blog" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={15} />
              <Line yAxisId="right" type="monotone" dataKey="socialMedia" name="Social Media" stroke="hsl(var(--accent-green))" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--accent-green))' }} activeDot={{ r: 6 }} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Income Donut Chart - Spanning 2 columns on large screens */}
      <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>Income</CardTitle>
            <CardDescription>Spendings Target Progress</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem><Download className="mr-2 h-4 w-4" /> Export Data</DropdownMenuItem>
              <DropdownMenuItem><Settings2 className="mr-2 h-4 w-4" /> Configure Chart</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="h-[350px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              innerRadius="70%" 
              outerRadius="90%" 
              barSize={20} 
              data={incomeProgressData}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar
                background
                dataKey='value'
                angleAxisId={0}
                // fill is set in data
                cornerRadius={10}
              />
              <Tooltip contentStyle={{ display: 'none' }} />
              <text 
                x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
                className="fill-foreground text-4xl font-bold">
                {`${incomeProgressData[0].value}%`}
              </text>
              <text 
                x="50%" y="50%" dy={28} textAnchor="middle" 
                className="fill-muted-foreground text-sm">
                Percent
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsSection;
