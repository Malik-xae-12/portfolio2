import React from 'react';
import { StackedCards } from './glass-cards';

export const DefaultDemo: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <StackedCards />
    </div>
  );
};

export default DefaultDemo;

