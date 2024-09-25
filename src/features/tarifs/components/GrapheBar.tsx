// BarChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DataItem {
  name: string;
  vistes: number;
}

const data: DataItem[] = [
  { name: 'Jan', vistes: 30 },
  { name: 'Feb', vistes: 20 },
  { name: 'Mar', vistes: 50 },
  { name: 'Avril', vistes: 40 },
  { name: 'Mai', vistes: 60 },
  { name: 'Juin', vistes: 30 },
  { name: 'Juil', vistes: 20 },
  { name: 'Aout', vistes: 50 },
  { name: 'Sept', vistes: 40 },
  { name: 'Oct', vistes: 60 },
  { name: 'Nov', vistes: 40 },
  { name: 'Dec', vistes: 60 },
  
];

const MyBarChart: React.FC = () => {
  return (
    <div>
        
        <BarChart width={900} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="vistes" fill="#2c94f5"/>
      </BarChart>
    </div>
  );
};

export default MyBarChart;
