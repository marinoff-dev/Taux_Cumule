// BarChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DataItem {
  name: string;
  ventes: number;
}

const data: DataItem[] = [
  { name: 'Jan', ventes: 30 },
  { name: 'Feb', ventes: 20 },
  { name: 'Mar', ventes: 50 },
  { name: 'Avril', ventes: 40 },
  { name: 'Mai', ventes: 60 },
  { name: 'Juin', ventes: 30 },
  { name: 'Juil', ventes: 20 },
  { name: 'Aout', ventes: 50 },
  { name: 'Sept', ventes: 40 },
  { name: 'Oct', ventes: 60 },
  { name: 'Nov', ventes: 40 },
  { name: 'Dec', ventes: 60 },
  
];

const MyBarChart: React.FC = () => {
  return (
    <div>
        
        <BarChart width={900} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="ventes" fill="#2c94f5"/>
      </BarChart>
    </div>
  );
};

export default MyBarChart;
