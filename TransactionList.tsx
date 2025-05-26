'use client';

import { Transaction } from '@/lib/types';

export default function TransactionList({ transactions }: { transactions: Transaction[] }) {
  return (
    <ul className="space-y-2">
      {transactions.map((tx) => (
        <li key={tx.id} className="border p-2 rounded">
          <div>{tx.description}</div>
          <div>₹ {tx.amount.toFixed(2)}</div>
          <div>{new Date(tx.date).toLocaleDateString()}</div>
        </li>
      ))}
    </ul>
  );
}
