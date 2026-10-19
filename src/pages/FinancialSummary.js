import { useState } from 'react';
import AppHeader from '../components/header';
import './FinancialSummary.css';

const money = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
// Frontend fixtures only; replace with account and transaction data when connected.
const transactions = [
  { date: '2026-10-18', description: 'Weekly groceries', category: 'Food', amount: -65 },
  { date: '2026-10-17', description: 'Paycheck', category: 'Income', amount: 1200 },
  { date: '2026-10-15', description: 'Internet service', category: 'Utilities', amount: -60 },
  { date: '2026-10-12', description: 'Coffee with friends', category: 'Food', amount: -18 },
  { date: '2026-10-08', description: 'Fuel', category: 'Transportation', amount: -45 },
  { date: '2026-10-03', description: 'Paycheck', category: 'Income', amount: 1200 },
  { date: '2026-10-01', description: 'Monthly rent', category: 'Housing', amount: -900 },
  { date: '2026-09-18', description: 'Weekly groceries', category: 'Food', amount: -90 },
  { date: '2026-09-17', description: 'Paycheck', category: 'Income', amount: 1200 },
  { date: '2026-09-10', description: 'Bus pass', category: 'Transportation', amount: -50 },
  { date: '2026-09-03', description: 'Paycheck', category: 'Income', amount: 1200 },
  { date: '2026-09-01', description: 'Monthly rent', category: 'Housing', amount: -900 },
];
export default function FinancialSummary() {
  const [month, setMonth] = useState('2026-10');
  const [showAll, setShowAll] = useState(false);
  const filtered = transactions.filter((item) => item.date.startsWith(month));
  return (
    <div className="summary-page">
      <AppHeader />
      <main className="summary-content">
        <header className="summary-heading">
          <div><p className="summary-eyebrow">YOUR FINANCIAL PICTURE</p><h1>Account Summary</h1><p>Review your transactions by month.</p></div>
          <div><label htmlFor="summary-month">Activity month</label><select id="summary-month" value={month} onChange={(event) => { setMonth(event.target.value); setShowAll(false); }}>
            <option value="2026-10">October 2026</option><option value="2026-09">September 2026</option><option value="2026-08">August 2026</option>
          </select></div>
        </header>
        <p className="summary-demo">Sample data · This preview is not connected to your accounts.</p>
        <section className="summary-panel summary-transactions">
          <div className="summary-section-heading"><h2>{showAll ? 'All transactions' : 'Recent transactions'}</h2>{filtered.length > 5 && <button type="button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show recent' : 'View all transactions'} →</button>}</div>
          <p className="summary-muted">Activity for the selected month.</p>
          {filtered.length ? <div className="summary-table-wrap"><table><caption className="visually-hidden">Sample transactions for {month}</caption><thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col">Category</th><th scope="col">Amount</th></tr></thead><tbody>{(showAll ? filtered : filtered.slice(0, 5)).map((item) => <tr key={`${item.date}-${item.description}`}><td>{new Date(`${item.date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td><td>{item.description}</td><td><span className="summary-category-tag">{item.category}</span></td><td className={item.amount > 0 ? 'summary-income' : ''}>{item.amount > 0 ? '+' : '−'}{money(Math.abs(item.amount))}</td></tr>)}</tbody></table></div> : <p className="summary-empty">No transactions yet. Choose another month to explore the sample activity.</p>}
        </section>
      </main>
    </div>
  );
}
