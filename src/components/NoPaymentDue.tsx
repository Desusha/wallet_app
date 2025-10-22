import React from 'react';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { PAYMENT_STATUS_MESSAGE } from '../constants';

export const NoPaymentDue: React.FC = () => {
  return (
    <Card className="no-payment-card">
      <div className="card-title">No Payment Due</div>
      <div className="payment-message">{PAYMENT_STATUS_MESSAGE}</div>
      <div className="checkmark-circle" aria-label="Payment completed">
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </Card>
  );
};
