import React from 'react';
import { Card } from 'antd';

interface CardBalanceProps {
  currentBalance: number;
  available: number;
}

export const CardBalance: React.FC<CardBalanceProps> = ({ 
  currentBalance, 
  available 
}) => {
  return (
    <Card className="card-balance-card">
      <div className="card-title">Card Balance</div>
      <div className="card-balance">${currentBalance.toFixed(2)}</div>
      <div className="card-available">${available.toFixed(2)} Available</div>
    </Card>
  );
};
