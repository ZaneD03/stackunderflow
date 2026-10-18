//REQUIRED FOR PROTOTYPE (Do last)

//Dashboard that will have a summary of everything and UI to navigate. Similar to a bank dashboard
import AppHeader from '../components/header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import App from '../App';

let accountProgress = 2;
let userName = "Zane";
// 0 = new account 
// 1 = account setup E savings goal not reached
// 2 = full account (has wishlists and savings,etc)


function Dashboard(){
    if(accountProgress == 0){
        return(
            <div>
            <AppHeader />
            <Row className="goodmorning">
                <Col md={3}>
                    <h2>Good morning, {userName}</h2>
                </Col>
            </Row>  

            <Row className="welcome">
                <Col md={3}>
                    
                </Col>
                <Col md={5}>
                    <h1>Welcome to your new account!</h1>
                </Col>
            </Row>

            <Row className="cards">
                <Col md={3}>
                    
                </Col>
                <Col md={3}>
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Setup your Budget to begin!</Card.Title>
                        <Button variant="primary">Setup Here</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        );
    }
    else if(accountProgress == 1){
        return(
        <div>
            <AppHeader />
            <Row className="goodmorning">
                <Col md={3}>
                    <h2>Good morning, {userName}</h2>
                    <h5>Welcome to your dashboard!</h5>
                </Col>
            </Row> 
            <Row className="Summary Row">
                <Col md={3}>
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Current Balance - Emergency Savings
                        </Card.Text>
                        <Card.Title>$118.18/$1000</Card.Title>
                        <Button variant="primary">See this account</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Last Transaction
                        </Card.Text>
                        <Card.Title>$18.18</Card.Title>
                        <Card.Text>Deposit into Emergency Savings</Card.Text>
                        <Button variant="primary">See this transaction</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Reported Income
                        </Card.Text>
                        <Card.Title>$2500</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Reported Expenses
                        </Card.Text>
                        <Card.Title>$1750</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>  

            <Row>
                <Col md={4}>
                    <Card style={{ width: '25rem',height: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Table 1</Card.Title>
                        <Card.Text>TABLE GOES HERE -TODO</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '50rem',height: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Budget Breakdown</Card.Title>
                            <Card.Text>TABLE GOES HERE -TODO</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );

    }
    else if(accountProgress == 2){
        return(
            <div>
            <AppHeader />
            <Row className="goodmorning">
                <Col md={3}>
                    <h2>Good morning, {userName}</h2>
                    <h5>Welcome to your dashboard!</h5>
                </Col>
            </Row> 
            <Row className="Summary Row">
                <Col md={3}>
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Current Balance - Emergency Savings
                        </Card.Text>
                        <Card.Title>$1000/$1000</Card.Title>
                        <Card.Text>You have reached your Goal!</Card.Text>
                        <Button variant="primary">See this account</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Last Transaction
                        </Card.Text>
                        <Card.Title>$18.18</Card.Title>
                        <Card.Text>Deposit into Emergency Savings</Card.Text>
                        <Button variant="primary">See this transaction</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Reported Income
                        </Card.Text>
                        <Card.Title>$2500</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Reported Expenses
                        </Card.Text>
                        <Card.Title>$1750</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>  

            <Row>
                <Col md={4}>
                    <Card style={{ width: '25rem',height: '20rem' }}>
                    <Card.Body>
                        <Card.Text><h3>Your Accounts</h3></Card.Text>
                        <Card.Title>Christmas Savings</Card.Title>
                        <Card.Text>Account Balance: $100</Card.Text>

                        <Card.Title>Garage Wishlist</Card.Title>
                        <Card.Text>Account Balance: $100</Card.Text>

                        <Button variant="primary">View these Accounts</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '25rem',height: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Table 1</Card.Title>
                        <Card.Text>TABLE GOES HERE -TODO</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '25rem',height: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Table 2</Card.Title>
                        <Card.Text>TABLE GOES HERE -TODO</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Card style={{ width: '50rem',height: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Budget Breakdown</Card.Title>
                        <Card.Text>TABLE GOES HERE -TODO</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
        );
    }

}

export default Dashboard;