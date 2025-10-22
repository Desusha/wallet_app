import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faApple, 
  faAmazon,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCreditCard, 
  faCouch, 
  faBullseye, 
  faGlobe, 
  faShoppingBasket,
  faChevronRight,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../types/index';
import { calculateDailyPoints, formatPoints } from '../utils/calculateDailyPoints';
import { formatTransactionDate } from '../utils/dateFormatter';
import transactionsData from '../data/transactions.json';
import '../styles/TransactionsListPage.css';

const iconMap: { [key: string]: any } = {
  'apple': faApple,
  'credit-card': faCreditCard,
  'couch': faCouch,
  'bullseye': faBullseye,
  'globe': faGlobe,
  'shopping-basket': faShoppingBasket,
  'amazon': faAmazon,
};

const TransactionsListPage: React.FC = () => {
  const navigate = useNavigate();
  const { cardInfo, transactions } = transactionsData;
  const available = cardInfo.maxLimit - cardInfo.currentBalance;
  const dailyPoints = calculateDailyPoints();

  const handleTransactionClick = (transaction: Transaction) => {
    navigate(`/transaction/${transaction.id}`);
  };

  return (
    <div className="transactions-list-page">
      <div className="top-cards">
        <Card className="card-balance-card">
          <div className="card-title">Card Balance</div>
          <div className="card-balance">${cardInfo.currentBalance.toFixed(2)}</div>
          <div className="card-available">${available.toFixed(2)} Available</div>
        </Card>

        <Card className="no-payment-card">
          <div className="card-title">No Payment Due</div>
          <div className="payment-message">You've paid your September balance.</div>
          <div className="checkmark-circle">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </Card>
      </div>

      <Card className="daily-points-card">
        <div className="card-title">Daily Points</div>
        <div className="points-value">{formatPoints(dailyPoints)}</div>
      </Card>

      <div className="transactions-section">
        <h2 className="section-title">Latest Transactions</h2>
        <List
          className="transactions-list"
          dataSource={transactions}
          renderItem={(transaction: Transaction) => (
            <List.Item 
              className="transaction-item"
              onClick={() => handleTransactionClick(transaction)}
            >
              <div className="transaction-content">
                <div 
                  className="transaction-icon" 
                  style={{ backgroundColor: transaction.iconBgColor }}
                >
                  <FontAwesomeIcon 
                    icon={iconMap[transaction.icon] || faCreditCard} 
                    color="white"
                    size="lg"
                  />
                </div>
                <div className="transaction-details">
                  <div className="transaction-name">{transaction.name}</div>
                  <div className="transaction-description">
                    {transaction.isPending && <span className="pending-badge">Pending - </span>}
                    {transaction.description}
                  </div>
                  <div className="transaction-date">
                    {transaction.authorizedUser && (
                      <span className="authorized-user">{transaction.authorizedUser} - </span>
                    )}
                    {formatTransactionDate(transaction.date)}
                  </div>
                </div>
                <div className="transaction-right">
                  <div className={`transaction-amount ${transaction.type === 'Payment' ? 'payment' : 'credit'}`}>
                    {transaction.type === 'Payment' ? '+' : ''}${transaction.amount.toFixed(2)}
                  </div>
                  {transaction.cashback && (
                    <div className="cashback-badge">{transaction.cashback}%</div>
                  )}
                  <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TransactionsListPage;
