import React from 'react';
import { Card } from 'antd';

interface DailyPointsProps {
  points: string;
}

export const DailyPoints: React.FC<DailyPointsProps> = ({ points }) => {
  return (
    <Card className="daily-points-card">
      <div className="card-title">Daily Points</div>
      <div className="points-value">{points}</div>
    </Card>
  );
};
