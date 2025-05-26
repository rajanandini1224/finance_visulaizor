'use client';

import { useState } from 'react';
import TransactionForm from '@/components/TransactionForm'; // Import the TransactionForm component
import TransactionList from '@/components/TransactionList';
import { Transaction } from '@/lib/types';

export default function HomePage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAdd = (tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Finance Visualizer</h1>
      <TransactionForm onAdd={handleAdd} /> {/* Use the TransactionForm component */}
      <TransactionList transactions={transactions} />
    </main>
  );
}
