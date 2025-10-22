export interface Transaction {
  id: string;
  type: 'Payment' | 'Credit';
  amount: number;
  name: string;
  description: string;
  date: string; // ISO date string
  isPending?: boolean;
  authorizedUser?: string;
  icon: string; // FontAwesome icon name
  iconBgColor: string;
  cardNumber?: string;
  location?: string;
  cashback?: number;
}

export interface CardInfo {
  maxLimit: number;
  currentBalance: number;
}
