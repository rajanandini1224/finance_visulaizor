'use client';

import { Transaction } from '@/lib/types';
import { useState } from 'react';

export default function TransactionForm({ onAdd }: { onAdd: (tx: Transaction) => void }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && amount && date) {
      const newTransaction = {
        id: Date.now().toString(),
        description,
        amount: parseFloat(amount),
        date,
      };
      onAdd(newTransaction);
      setDescription('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter description"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full p-2 mt-2 bg-blue-500 text-white rounded">
        Add Transaction
      </button>
    </form>
  );
}
