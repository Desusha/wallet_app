import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from 'antd';
import { Transaction } from '../types/index';
import { calculateDailyPoints, formatPoints } from '../utils/calculateDailyPoints';
import { useTransactions } from '../hooks/useTransactions';
import { CardBalance } from '../components/CardBalance';
import { NoPaymentDue } from '../components/NoPaymentDue';
import { DailyPoints } from '../components/DailyPoints';
import { TransactionItem } from '../components/TransactionItem';
import '../styles/TransactionsListPage.css';

const TransactionsListPage: React.FC = () => {
  const navigate = useNavigate();
  const { cardInfo, transactions } = useTransactions();
  const available = cardInfo.maxLimit - cardInfo.currentBalance;
  const dailyPoints = calculateDailyPoints();
  const formattedPoints = formatPoints(dailyPoints);

  const handleTransactionClick = useCallback((transaction: Transaction) => {
    navigate(`/transaction/${transaction.id}`);
  }, [navigate]);

  return (
    <div className="transactions-list-page">
      <div className="top-cards">
        <CardBalance 
          currentBalance={cardInfo.currentBalance} 
          available={available} 
        />
        <NoPaymentDue />
      </div>

      <DailyPoints points={formattedPoints} />

      <div className="transactions-section">
        <h2 className="section-title">Latest Transactions</h2>
        <List
          className="transactions-list"
          dataSource={transactions}
          renderItem={(transaction: Transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onClick={handleTransactionClick}
            />
          )}
        />
      </div>
    </div>
  );
};

export default TransactionsListPage;
