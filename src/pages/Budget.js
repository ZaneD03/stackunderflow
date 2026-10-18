//REQUIRED FOR PROTOTYPE

//User inputs expenses/income. 
import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'; 
import AppHeader from '../components/header';

// Temporary values for prototype
// screen 0 = no report submitted
// screen 1 = income and expense form
// screen 2 = income and expense summary

function BudgetPage() {
    const [screen, setScreen] = useState(0);
    const [income, setIncome] = useState('');
    const [rent, setRent] = useState('');
    const [utilities, setUtilities] = useState('');
    const [gas, setGas] = useState('');
    const [groceries, setGroceries] = useState('');
    const [entertainment, setEntertainment] = useState('');
    const [other, setOther] = useState('');
    const [error, setError] = useState('');

    // Calculate total expenses
    const totalExpenses =
        (Number(rent) || 0) +
        (Number(utilities) || 0) +
        (Number(gas) || 0) +
        (Number(groceries) || 0) +
        (Number(entertainment) || 0) +
        (Number(other) || 0);

    // Calculate remaining money
    const remaining = (Number(income) || 0) - totalExpenses;

    function handleSubmit(event) {
        event.preventDefault();
        setError('');

        if (income.trim() === '' || Number(income) < 0) {
            setError('Please enter a valid monthly income.');
            return;
        }

        const amounts = [
            rent, utilities, gas, groceries, entertainment, other
        ];

        if (amounts.some(value =>
            value !== '' &&
            (!Number.isFinite(Number(value)) || Number(value) < 0)
        )) {
            setError('Expenses must be valid amounts of $0 or more.');
            return;
        }

        setScreen(2);
    }

    function handleEdit() {
        setError('');
        setScreen(1);
    }

    function handleReset() {
        setIncome('');
        setRent('');
        setUtilities('');
        setGas('');
        setGroceries('');
        setEntertainment('');
        setOther('');
        setError('');
        setScreen(0);
    }

    function money(amount) {
        return Number(amount || 0).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    // SCREEN 1: User has not submitted a report
    if (screen === 0) {
        return (
            <div>
                <AppHeader />

                <div className="container py-5">
                    <Card className="text-center mx-auto p-4"
                        style={{ maxWidth: '750px' }}>
                        <Card.Body>
                            <h2>Manage Your Budget</h2>

                            <p className="mt-4">
                                You have not submitted your income/expense.
                                Click below to report this information.
                            </p>

                            <Button
                                variant="success"
                                className="mt-3 px-5"
                                onClick={() => setScreen(1)}
                            >
                                Start
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }

    // SCREEN 2: User enters income and expenses
    if (screen === 1) {
        return (
            <div>
                <AppHeader />

                <div className="container py-4">
                    <h2>Report Your Income and Expenses</h2>
                    <p className="text-muted">
                        Enter your monthly income and spending below.
                    </p>

                    {error && (
                        <Alert variant="danger">{error}</Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                        <Card className="mb-4">
                            <Card.Body>
                                <h5>Monthly Income</h5>

                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Total monthly income ($)
                                    </Form.Label>

                                    <Form.Control
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={income}
                                        onChange={e =>
                                            setIncome(e.target.value)
                                        }
                                        placeholder="Enter your income"
                                        required
                                    />
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <h5>Monthly Expenses</h5>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>
                                                Housing / Rent ($)
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={rent}
                                                onChange={e =>
                                                    setRent(e.target.value)
                                                }
                                                placeholder="0.00"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>
                                                Utilities ($)
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={utilities}
                                                onChange={e =>
                                                    setUtilities(e.target.value)
                                                }
                                                placeholder="0.00"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>
                                                Gas ($)
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={gas}
                                                onChange={e =>
                                                    setGas(e.target.value)
                                                }
                                                placeholder="0.00"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>
                                                Groceries ($)
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={groceries}
                                                onChange={e =>
                                                    setGroceries(e.target.value)
                                                }
                                                placeholder="0.00"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>
                                                Entertainment ($)
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={entertainment}
                                                onChange={e =>
                                                    setEntertainment(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="0.00"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>
                                                Other Expenses ($)
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={other}
                                                onChange={e =>
                                                    setOther(e.target.value)
                                                }
                                                placeholder="0.00"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <hr />

                                <div className="d-flex justify-content-between">
                                    <strong>Current expense total</strong>
                                    <strong>{money(totalExpenses)}</strong>
                                </div>
                            </Card.Body>
                        </Card>

                        <div className="d-flex gap-2">
                            <Button
                                variant="outline-secondary"
                                type="button"
                                onClick={() => setScreen(0)}
                            >
                                Cancel
                            </Button>

                            <Button variant="success" type="submit">
                                Submit Report
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }

    // SCREEN 3: Show income and expense summary
    return (
        <div>
            <AppHeader />

            <div className="container py-4">
                <h2>Income and Expense Summary</h2>
                <p className="text-muted">
                    Here is your reported financial information.
                </p>

                <Row className="g-3 mb-4">
                    <Col md={4}>
                        <Card className="h-100">
                            <Card.Body>
                                <h6>Total Income</h6>
                                <h3 className="text-success">
                                    {money(income)}
                                </h3>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100">
                            <Card.Body>
                                <h6>Total Expenses</h6>
                                <h3>{money(totalExpenses)}</h3>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100">
                            <Card.Body>
                                <h6>Remaining Money</h6>
                                <h3 className={
                                    remaining < 0
                                        ? 'text-danger'
                                        : 'text-success'
                                }>
                                    {money(remaining)}
                                </h3>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Card className="mb-4">
                    <Card.Body>
                        <h5>Expense Breakdown</h5>

                        <div className="d-flex justify-content-between py-2">
                            <span>Housing / Rent</span>
                            <span>{money(rent)}</span>
                        </div>

                        <div className="d-flex justify-content-between py-2">
                            <span>Utilities</span>
                            <span>{money(utilities)}</span>
                        </div>

                        <div className="d-flex justify-content-between py-2">
                            <span>Gas</span>
                            <span>{money(gas)}</span>
                        </div>

                        <div className="d-flex justify-content-between py-2">
                            <span>Groceries</span>
                            <span>{money(groceries)}</span>
                        </div>

                        <div className="d-flex justify-content-between py-2">
                            <span>Entertainment</span>
                            <span>{money(entertainment)}</span>
                        </div>

                        <div className="d-flex justify-content-between py-2">
                            <span>Other Expenses</span>
                            <span>{money(other)}</span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">
                            <strong>Total Expenses</strong>
                            <strong>{money(totalExpenses)}</strong>
                        </div>
                    </Card.Body>
                </Card>

                <Alert variant={remaining < 0 ? 'warning' : 'success'}>
                    {remaining < 0
                        ? `Your expenses exceed your income by ${money(
                            Math.abs(remaining)
                        )}.`
                        : `You have ${money(remaining)} remaining after expenses.`}
                </Alert>

                <div className="d-flex gap-2">
                    <Button variant="success" onClick={handleEdit}>
                        Edit Report
                    </Button>

                    <Button variant="outline-secondary" onClick={handleReset}>
                        Start Over
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default BudgetPage;
