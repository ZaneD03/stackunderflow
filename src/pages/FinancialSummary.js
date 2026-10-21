import { useRef, useState } from 'react';
import AppHeader from '../components/header';
import './FinancialSummary.css';

const money = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
// Frontend examples. Descriptions represent notes entered when recording activity.
// Purchase events use an item name; connect these records to account activity later.
const activity = [
  { id: 1, date: '2026-09-01', account: 'Emergency fund', description: 'Added part of my paycheck for unexpected expenses', amount: 200 },
  { id: 2, date: '2026-09-03', account: 'Wishlist', description: 'Saving for a new desk setup', amount: 150 },
  { id: 3, date: '2026-09-10', account: 'Garage', description: 'Added money for garage tools', amount: 100 },
  { id: 4, date: '2026-09-17', account: 'Emergency fund', description: 'Monthly emergency fund contribution', amount: 100 },
  { id: 5, date: '2026-10-01', account: 'Wishlist', description: 'Added birthday money to my wishlist', amount: 75 },
  { id: 6, date: '2026-10-03', account: 'Emergency fund', description: 'Emergency fund added — payday contribution', amount: 200 },
  { id: 7, date: '2026-10-08', account: 'Garage', type: 'purchase', itemName: 'Socket set', amount: -45 },
  { id: 8, date: '2026-10-12', account: 'Wishlist', type: 'purchase', itemName: 'Desk lamp', amount: -35 },
  { id: 9, date: '2026-10-15', account: 'Emergency fund', description: 'Used emergency savings for a car repair', amount: -120 },
  { id: 10, date: '2026-10-17', account: 'Garage', description: 'Added money for the next garage project', amount: 80 },
  { id: 11, date: '2026-10-18', account: 'Wishlist', type: 'purchase', itemName: 'Office chair', amount: -125 },
];
// Calculate each account's balance in chronological order before filtering by month.
const balances = { Wishlist: 100, Garage: 150, 'Emergency fund': 500 };
const transactions = activity.map((item) => {
  balances[item.account] += item.amount;
  return {
    ...item,
    description: item.type === 'purchase' ? `${item.itemName} has been purchased` : item.description,
    balanceAfter: balances[item.account],
  };
}).reverse();
export default function FinancialSummary() {
  const [month, setMonth] = useState('2026-10');
  const [showAll, setShowAll] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const chatToggle = useRef(null);
  function closeChat() {
    setChatOpen(false);
    chatToggle.current?.focus();
  }
  const filtered = transactions.filter((item) => item.date.startsWith(month));
  return (
    <div className="summary-page">
      <AppHeader />
      <main className="summary-content">
        <header className="summary-heading">
          <div><h1>Financial Summary</h1><p>Review your transactions by month.</p></div>
          <div><label htmlFor="summary-month">Activity month</label><select id="summary-month" value={month} onChange={(event) => { setMonth(event.target.value); setShowAll(false); }}>
            <option value="2026-10">October 2026</option><option value="2026-09">September 2026</option><option value="2026-08">August 2026</option>
          </select></div>
        </header>
        <section className="summary-panel summary-transactions">
          <div className="summary-section-heading"><h2>{showAll ? 'All transactions' : 'Recent transactions'}</h2>{filtered.length > 5 && <button type="button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show recent' : 'View all transactions'} →</button>}</div>
          <p className="summary-muted">Activity for the selected month. Balance after shows the remaining balance in that transaction’s account.</p>
          {filtered.length ? <div className="summary-table-wrap"><table><caption className="visually-hidden">Sample transactions for {month}</caption><thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col">Account</th><th scope="col">Amount</th><th scope="col">Balance after</th></tr></thead><tbody>{(showAll ? filtered : filtered.slice(0, 5)).map((item) => <tr key={item.id}><td>{new Date(`${item.date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td><td>{item.description}</td><td><span className="summary-category-tag">{item.account}</span></td><td className={item.amount > 0 ? 'summary-income' : ''}>{item.amount > 0 ? '+' : '−'}{money(Math.abs(item.amount))}</td><td>{money(item.balanceAfter)}</td></tr>)}</tbody></table></div> : <p className="summary-empty">No transactions yet. Choose another month to explore the sample activity.</p>}
        </section>
        <div className="summary-chat-widget" onKeyDown={(event) => {
          if (event.key === 'Escape' && chatOpen) { event.preventDefault(); closeChat(); }
        }}>
          {chatOpen && (
            <section id="summary-chat-window" className="summary-chat-window" role="dialog" aria-labelledby="summary-chat-title">
              <div className="summary-chat-header">
                <h2 id="summary-chat-title">✦ AI assistant</h2>
                <button type="button" onClick={closeChat} aria-label="Close AI assistant" autoFocus>×</button>
              </div>
              <div className="summary-chat-body">
                <p className="summary-chat-greeting">Your account activity, made clearer.</p>
                <p>Ask about purchases, savings, and your recent transactions.</p>
              </div>
              <div className="summary-chat-composer">
                <label htmlFor="summary-chat-input" className="visually-hidden">Message AI assistant</label>
                <input id="summary-chat-input" placeholder="Ask a question…" disabled />
                <button type="button" disabled aria-label="Send message">↑</button>
              </div>
            </section>
          )}
          <button ref={chatToggle} type="button" className="summary-chat-toggle"
            aria-label={chatOpen ? 'Close AI assistant' : 'Open AI assistant'}
            aria-expanded={chatOpen} aria-controls={chatOpen ? 'summary-chat-window' : undefined}
            onClick={() => chatOpen ? closeChat() : setChatOpen(true)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <path d="M20 11.5a8 8 0 0 1-8 8H5l-3 2v-10a9 9 0 0 1 18 0Z" />
              <path d="m12 6 1.4 3.6L17 11l-3.6 1.4L12 16l-1.4-3.6L7 11l3.6-1.4Z" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
