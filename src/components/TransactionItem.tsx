import React from 'react';
import { List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../types';
import { formatTransactionDate } from '../utils/dateFormatter';
import { ICON_MAP, DEFAULT_ICON } from '../constants';

interface TransactionItemProps {
  transaction: Transaction;
  onClick: (transaction: Transaction) => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ 
  transaction, 
  onClick 
}) => {
  return (
    <List.Item 
      className="transaction-item"
      onClick={() => onClick(transaction)}
    >
      <div className="transaction-content">
        <div 
          className="transaction-icon" 
          style={{ backgroundColor: transaction.iconBgColor }}
          aria-label={`${transaction.name} icon`}
        >
          <FontAwesomeIcon 
            icon={ICON_MAP[transaction.icon] || DEFAULT_ICON} 
            color="white"
            size="lg"
          />
        </div>
        <div className="transaction-details">
          <div className="transaction-name">{transaction.name}</div>
          <div className="transaction-description">
            {transaction.isPending && (
              <span className="pending-badge">Pending - </span>
            )}
            {transaction.description}
          </div>
          <div className="transaction-date">
            {transaction.authorizedUser && (
              <span className="authorized-user">
                {transaction.authorizedUser} - 
              </span>
            )}
            {formatTransactionDate(transaction.date)}
          </div>
        </div>
        <div className="transaction-right">
          <div 
            className={`transaction-amount ${
              transaction.type === 'Payment' ? 'payment' : 'credit'
            }`}
          >
            {transaction.type === 'Payment' ? '+' : ''}
            ${transaction.amount.toFixed(2)}
          </div>
          {transaction.cashback && (
            <div className="cashback-badge">{transaction.cashback}%</div>
          )}
          <FontAwesomeIcon 
            icon={faChevronRight} 
            className="chevron-icon" 
            aria-hidden="true"
          />
        </div>
      </div>
    </List.Item>
  );
};
