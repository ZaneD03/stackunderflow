//REQUIRED FOR PROTOTYPE

//Emergency saving account (required)
    //After user reaches user defined goal,
    // user will be prompted whether to update goal to higher number
//Savings accounts, wishlists 
    // (unlocked after initial user defined goal for emergency savings is achieved)
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import AppHeader from '../components/header';
import AccountHeader from '../components/accountHeader';
import AccountNode from '../components/accountNode';

//Temp values for prototype
//let accountProgress = 2 //How far a users account has progressed
let numAccounts = 0; //Number of non-emergency savings accounts and wishlists (0=only E savings)
let eSavingsName = "Your Emergency Savings Account" //title

let isSave1 = true;
let nodeName1 = "Christmas Savings";
let isSave2 = false;
let nodeName2 = "Garage Wishlist";

function AccountsPage() {
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

    if(accountProgress == 0){ //(0=no E savings initialized)
        return (
            <Container>
                <AppHeader />
                {renderDemoToolbar()}
                <Row className="justify-content-center">
                    <Col md={4} className="bg-light p-3">
                        <h2 className ="text-center">NO ACCOUNTS TO VIEW</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center" >
                    <Col md={4} className="bg-light p-3">
                        <h2 className ="text-center">Go to Budget to initialize setup</h2>
                    </Col>
                </Row>

                <Row className="justify-content-center" >
                    <Col md={4} className="bg-light p-3 d-flex justify-content-center align-items-center">
                        <Button variant="primary">Start Budget</Button>
                    </Col>
                </Row>

            </Container>
        );
    }else if(accountProgress == 1){ // (1=E savings but goal has not been reached) 
        return (
            <div>
                <Container>
                    <AppHeader />
                    {renderDemoToolbar()}
                    <AccountHeader isSave = {true} headerName = {eSavingsName}/>      
                </Container>
            </div>
        );
    }else if(accountProgress == 2){ // (2=E savings goal has been reached) 
        return (
            <div>
                <Container>
                    <AppHeader />
                    {renderDemoToolbar()}
                    <Row>
                        <Col>
                            <AccountHeader isSave = {true} headerName = {eSavingsName}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>  
                        </Col>
                        <Col md={3}>
                            <AccountNode isSave = {isSave1} nodeName = {nodeName1}/>    
                        </Col>
                        <Col md={3}>
                            <AccountNode isSave = {isSave2} nodeName = {nodeName2}/>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    };
  
    return (
    <AppHeader />
  );
}

export default AccountsPage;