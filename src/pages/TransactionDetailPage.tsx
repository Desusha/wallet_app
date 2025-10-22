import React, { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTransactions } from '../hooks/useTransactions';
import { formatFullDateTime } from '../utils/dateFormatter';
import '../styles/TransactionDetailPage.css';

const TransactionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { transactions } = useTransactions();
  
  const transaction = transactions.find(t => t.id === id);

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="transaction-detail-page">
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
      </div>

      <div className="amount-section">
        <div className="amount-large">
          ${transaction.amount.toFixed(2)}
        </div>
        <div className="merchant-name">{transaction.name}</div>
        <div className="transaction-datetime">{formatFullDateTime(transaction.date)}</div>
      </div>

      <Card className="transaction-info-card">
        <div className="info-row">
          <span className="info-label">Status: Approved</span>
        </div>
        <div className="info-row">
          <span className="info-value">{transaction.cardNumber}</span>
        </div>
        <div className="divider"></div>
        <div className="info-row total-row">
          <span className="info-label">Total</span>
          <span className="info-value">${transaction.amount.toFixed(2)}</span>
        </div>
      </Card>
    </div>
  );
};

export default TransactionDetailPage;
