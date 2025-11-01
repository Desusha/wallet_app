import { useMemo } from 'react';
import transactionsData from '../data/transactions.json';
import { Transaction, CardInfo } from '../types';

interface UseTransactionsReturn {
  transactions: Transaction[];
  cardInfo: CardInfo;
}

export const useTransactions = (): UseTransactionsReturn => {
  const transactions = useMemo(() => 
    transactionsData.transactions as Transaction[], 
    []
  );

  const cardInfo = useMemo(() => 
    transactionsData.cardInfo as CardInfo, 
    []
  );

  return { transactions, cardInfo };
};
