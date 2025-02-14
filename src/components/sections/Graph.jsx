// src/components/sections/Graph.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import '../../styles/Graph.css';

const Graph = () => {
  const data = Array.from({ length: 8 }, (_, i) => ({
    days: i * 15,
    fingerprint: 95 - (i * 0.5),
    others: 95 - (i * 4),
  }));

  return (
    <div className="graph-container">
      <div className="graph-header">
        <div className="why-fingerprint">
          Why Fingerprint<span className="blinking-cursor">_</span>
        </div>
        <h2 className="graph-tagline">The internet's most accurate visitor identifier</h2>
        <p className="graph-description">
          Industry-leading accuracy that lasts for months or years, even when cookies are cleared.
        </p>
        <button className="graph-cta">Learn More</button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="days" 
            label={{ value: 'DAYS AFTER INITIAL IDENTIFICATION', position: 'bottom', fill: '#666' }} 
            tick={{ fill: '#666' }}
          />
          <YAxis 
            dataKey="fingerprint" 
            label={{ value: 'ACCURACY DROPOFF', angle: -90, position: 'left', fill: '#666' }} 
            tick={{ fill: '#666' }}
          />
          <Tooltip 
            contentStyle={{ 
              background: 'rgba(255, 255, 255, 0.9)', 
              border: 'none', 
              borderRadius: '8px', 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
              padding: '12px' 
            }} 
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }} 
          />
          <Line 
            type="monotone" 
            dataKey="fingerprint" 
            stroke="#FF6B3D" 
            strokeWidth={2} 
            dot={false} 
            name="Fingerprint Accuracy" 
            animationDuration={1000}
          />
          <Line 
            type="monotone" 
            dataKey="others" 
            stroke="#B4B4B4" 
            strokeWidth={2} 
            dot={false} 
            name="Other Methods Accuracy" 
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;