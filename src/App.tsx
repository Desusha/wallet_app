import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionsListPage from './pages/TransactionsListPage';
import TransactionDetailPage from './pages/TransactionDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionsListPage />} />
        <Route path="/transaction/:id" element={<TransactionDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
