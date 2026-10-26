//Dashboard that will have a summary of everything and UI to navigate. Similar to a bank dashboard
import AppHeader from '../components/header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

import './Dashboard.css';

let userName = "Zane";

// Sample Data for Budget Pie Chart
const budgetData = [
  { name: 'Housing', value: 850 },
  { name: 'Groceries', value: 400 },
  { name: 'Utilities', value: 200 },
  { name: 'Transportation', value: 150 },
  { name: 'Entertainment', value: 150 },
];

const COLORS = ['#2764e7', '#16845b', '#f59e0b', '#8b5cf6', '#d45151'];

// Sample Data for Monthly Savings Bar Chart
const monthlySavingsData = [
  { month: 'Jun', savings: 200 },
  { month: 'Jul', savings: 450 },
  { month: 'Aug', savings: 600 },
  { month: 'Sep', savings: 850 },
  { month: 'Oct', savings: 1000 },
];

// Sample Data for Table 1: Emergency Savings & Income/Expenses Activity
const savingsActivityData = [
  { date: 'Oct 24', description: 'Deposit into Emergency Savings', category: 'Savings', amount: '+$50.00', type: 'positive' },
  { date: 'Oct 22', description: 'Monthly Salary Income Added', category: 'Income', amount: '+$2,500.00', type: 'positive' },
  { date: 'Oct 19', description: 'Grocery Expense Removed/Refunded', category: 'Expense', amount: '-$15.50', type: 'negative' },
  { date: 'Oct 15', description: 'Deposit into Emergency Savings', category: 'Savings', amount: '+$18.18', type: 'positive' },
];

// Sample Data for Table 2: Savings & Wishlist Purchases Activity
const wishlistActivityData = [
  { date: 'Oct 23', item: 'Garage Tool Organizer', action: 'Wishlist Item Purchased', cost: '$45.00', status: 'Completed' },
  { date: 'Oct 20', item: 'Christmas Savings Fund', action: 'Added to Savings', cost: '+$25.00', status: 'Active' },
  { date: 'Oct 18', item: 'Wireless Earbuds', action: 'Wishlist Item Purchased', cost: '$89.99', status: 'Completed' },
  { date: 'Oct 12', item: 'Garage Jack Stand', action: 'Added to Wishlist', cost: '$55.00', status: 'Pending' },
];

function Dashboard(){
    // Changed to useState so you can toggle states live in your demo presentation!
    const [accountProgress, setAccountProgress] = useState(0);

    // Reusable Demo Controls Toolbar to place at the top of any view
    const renderDemoToolbar = () => (
      <Row className="mb-4">
        <Col md={12}>
          <div className="demo-control-bar p-3 bg-white rounded-3 shadow-sm border d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <span className="badge bg-secondary me-2">DEMO MODE</span>
              <span className="fw-bold small text-muted">Switch Account View:</span>
            </div>
            <ButtonGroup size="sm">
              <Button 
                variant={accountProgress === 0 ? "primary" : "outline-primary"}
                onClick={() => setAccountProgress(0)}
              >
               New Account
              </Button>
              <Button 
                variant={accountProgress === 1 ? "primary" : "outline-primary"}
                onClick={() => setAccountProgress(1)}
              >
                Goal In Progress
              </Button>
              <Button 
                variant={accountProgress === 2 ? "primary" : "outline-primary"}
                onClick={() => setAccountProgress(2)}
              >
                Full Dashboard
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    );

    if(accountProgress == 0){
        return(
            <Container className="dashboard-page py-4">
            <AppHeader />
            {renderDemoToolbar()}
             

            <Row className="welcome justify-content-center my-5">
                <Col md={6} className="text-center">
                    <Card className="dashboard-card welcome-card p-4 shadow-sm">
                        <div className="welcome-icon">👋</div>
                        <h1 className="fw-bold mb-3">Welcome to your new account!</h1>
                        <p className="text-muted welcome-description mx-auto">
                          You are all set up. Let's get your budget configured to start tracking your savings and financial goals.
                        </p>
                        <Button variant="primary" size="lg">Setup Here</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
    else if(accountProgress == 1){
        return(
        <Container fluid className="dashboard-page px-4 py-4">
            <AppHeader />
            {renderDemoToolbar()}

            <Row className="goodmorning mb-4">
                <Col md={6}>
                    <h2 className="dashboard-heading">Good morning, {userName}</h2>
                    <h5 className="text-muted">Welcome to your dashboard!</h5>
                </Col>
            </Row> 

            <Row className="Summary Row g-4 mb-4">
                <Col md={3}>
                    <Card className="dashboard-card summary-card h-100">
                    <Card.Body>
                        <Card.Text className="summary-label">
                            Emergency Savings
                        </Card.Text>
                        <Card.Title className="summary-value">$118.18<span className="text-muted fs-6">/1000</span></Card.Title>
                        <ProgressBar now={11.8} className="savings-progress my-3" />
                        <Button variant="outline-primary" size="sm">See this account</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="dashboard-card summary-card h-100">
                    <Card.Body>
                        <Card.Text className="summary-label">
                            Current Balance
                        </Card.Text>
                        <Card.Title className="summary-value">$18.18</Card.Title>
                        <Card.Text className="text-muted small mb-3">Total Balance From All Accounts</Card.Text>
                        <Button variant="outline-primary" size="sm">See All Accounts</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="dashboard-card summary-card h-100">
                    <Card.Body>
                        <Card.Text className="summary-label">
                            Reported Income
                        </Card.Text>
                        <Card.Title className="summary-value income-value">$2500</Card.Title>
                        <span className="text-muted small">Monthly recurring inflow</span>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="dashboard-card summary-card h-100">
                    <Card.Body>
                        <Card.Text className="summary-label">
                            Reported Expenses
                        </Card.Text>
                        <Card.Title className="summary-value expense-value">$1750</Card.Title>
                        <span className="text-muted small">Monthly estimated outflow</span>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>  

            <Row className="g-4 mb-4">
                <Col lg={5} md={12}>
                    <Card className="dashboard-card h-100">
                    <Card.Body>
                        <Card.Title className="section-heading">Table 1 - Emergency Savings Data</Card.Title>
                        <Table responsive hover className="dashboard-table mt-3">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Description</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {savingsActivityData.map((row, idx) => (
                              <tr key={idx}>
                                <td className="text-muted">{row.date}</td>
                                <td>{row.description}</td>
                                <td className={row.type === 'positive' ? 'text-success fw-bold' : 'text-danger fw-bold'}>{row.amount}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                    </Card.Body>
                    </Card>
                </Col>

                <Col lg={7} md={12}>
                    <Card className="dashboard-card h-100">
                        <Card.Body>
                            <Card.Title className="section-heading">Budget Breakdown</Card.Title>
                            <div style={{ width: '100%', height: '360px' }}>
                              <ResponsiveContainer>
                                <PieChart>
                                  <Pie
                                    data={budgetData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={4}
                                    dataKey="value"
                                    label
                                  >
                                    {budgetData.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                  </Pie>
                                  <Tooltip />
                                  <Legend verticalAlign="bottom" height={36}/>
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

    }
    else if(accountProgress == 2){
        return(
            <Container fluid className="dashboard-page px-4 py-4">
            <AppHeader />
            {renderDemoToolbar()}

            <Row className="goodmorning mb-4">
                <Col md={6}>
                    <h2 className="dashboard-heading">Good morning, {userName}</h2>
                    <h5 className="text-muted">Welcome to your dashboard!</h5>
                </Col>
            </Row> 

            {/* Summary KPI Cards Row */}
            <Row className="Summary Row g-4 mb-4">
                <Col xl={3} md={6}>
                    <Card className="dashboard-card summary-card h-100">
                    <Card.Body>
                        <Card.Text className="summary-label">
                            Emergency Savings
                        </Card.Text>
                        <Card.Title className="summary-value">$1000<span className="text-muted fs-6">/1000</span></Card.Title>
                        <ProgressBar now={100} variant="success" className="savings-progress my-2" />
                        <Badge bg="success" className="status-badge mb-3">Goal Reached! 🎉</Badge>
                        <div>
                          <Button variant="outline-primary" size="sm">See this account</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>
                    <Card className="dashboard-card summary-card h-100">
                    <Card.Body>
                        <Card.Text className="summary-label">
                            Current Balance
                        </Card.Text>
                        <Card.Title className="summary-value">$18.18</Card.Title>
                        <Card.Text className="text-muted small mb-4">Total Balance From All Accounts</Card.Text>
                        <Button variant="outline-primary" size="sm">See All Accounts</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>
                    <Card className="dashboard-card summary-card h-100">
                    <Card.Body>
                        <Card.Text className="summary-label">
                            Reported Income
                        </Card.Text>
                        <Card.Title className="summary-value income-value">$2500</Card.Title>
                        <Card.Text className="text-muted small mt-2">Monthly recurring inflow added</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>
                    <Card className="dashboard-card summary-card h-100">
                    <Card.Body>
                        <Card.Text className="summary-label">
                            Reported Expenses
                        </Card.Text>
                        <Card.Title className="summary-value expense-value">$1750</Card.Title>
                        <Card.Text className="text-muted small mt-2">Expenses managed & adjusted</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>  

            {/* Middle Row: Accounts & Recent Activity Tables */}
            <Row className="g-4 mb-4">
                <Col xl={4} md={12}>
                    <Card className="dashboard-card h-100">
                    <Card.Body className="d-flex flex-column">
                        <h3 className="section-heading mb-3">Your Accounts</h3>
                        
                        <div className="account-item">
                          <div>
                            <h6 className="mb-1 fw-bold">Christmas Savings</h6>
                            <small className="text-muted">Target Goal: $500</small>
                          </div>
                          <span className="fw-bold text-success">$100.00</span>
                        </div>

                        <div className="account-item mb-3">
                          <div>
                            <h6 className="mb-1 fw-bold">Garage Wishlist</h6>
                            <small className="text-muted">Active Wishlist Fund</small>
                          </div>
                          <span className="fw-bold text-primary">$100.00</span>
                        </div>

                        <div className="mt-auto pt-3">
                          <Button variant="outline-primary" className="w-100">View these Accounts</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card className="dashboard-card h-100">
                    <Card.Body>
                        <Card.Title className="section-heading">Table 1 - Savings Activity</Card.Title>
                        <Table responsive hover className="dashboard-table mt-2">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Activity</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {savingsActivityData.map((row, idx) => (
                              <tr key={idx}>
                                <td className="text-muted">{row.date}</td>
                                <td>{row.description}</td>
                                <td className={row.type === 'positive' ? 'text-success fw-bold' : 'text-danger fw-bold'}>{row.amount}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card className="dashboard-card h-100">
                    <Card.Body>
                        <Card.Title className="section-heading">Table 2 - Wishlist & Savings</Card.Title>
                        <Table responsive hover className="dashboard-table mt-2">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Item / Fund</th>
                              <th>Cost / Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {wishlistActivityData.map((row, idx) => (
                              <tr key={idx}>
                                <td className="text-muted">{row.date}</td>
                                <td><strong>{row.item}</strong><br/><small className="text-muted">{row.action}</small></td>
                                <td><Badge bg={row.status === 'Completed' ? 'success' : 'secondary'}>{row.cost}</Badge></td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Bottom Row: Budget Pie Chart & Monthly Savings Bar Chart */}
            <Row className="g-4">
                <Col lg={6} md={12}>
                    <Card className="dashboard-card h-100">
                        <Card.Body>
                            <Card.Title className="section-heading">Budget Breakdown</Card.Title>
                            <p className="text-muted small mb-3">Overview of monthly expenses categorized from your budget page.</p>
                            <div style={{ width: '100%', height: '380px' }}>
                              <ResponsiveContainer>
                                <PieChart>
                                  <Pie
                                    data={budgetData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={95}
                                    paddingAngle={1}
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                  >
                                    {budgetData.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                  </Pie>
                                  <Tooltip />
                                  <Legend verticalAlign="bottom" height={36}/>
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} md={12}>
                    <Card className="dashboard-card h-100">
                        <Card.Body>
                            <Card.Title className="section-heading">Monthly Savings Progress</Card.Title>
                            <p className="text-muted small mb-3">Track how your total savings grew over recent months.</p>
                            <div style={{ width: '100%', height: '280px' }}>
                              <ResponsiveContainer>
                                <BarChart data={monthlySavingsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf0f5" />
                                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                                  <YAxis stroke="#64748b" fontSize={12} />
                                  <Tooltip formatter={(value) => [`$${value}`, 'Savings']} />
                                  <Bar dataKey="savings" fill="#2764e7" radius={[6, 6, 0, 0]} />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }

}

export default Dashboard;