//REQUIRED FOR PROTOTYPE

//Emergency saving account (required)
    //After user reaches user defined goal,
    // user will be prompted whether to update goal to higher number
//Savings accounts, wishlists 
    // (unlocked after initial user defined goal for emergency savings is achieved)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import AppHeader from '../components/header';
import AccountHeader from '../components/accountHeader';
import AccountNode from '../components/accountNode';

//Temp values for prototype
let accountProgress = 0 //How far a users account has progressed
let numAccounts = 0; //Number of non-emergency savings accounts and wishlists (0=only E savings)
let eSavingsName = "Your Emergency Savings Account" //title

let isSave1 = true;
let nodeName1 = "Christmas Savings";
let isSave2 = false;
let nodeName2 = "Garage Wishlist";

function AccountsPage() {
    if(accountProgress == 0){ //(0=no E savings initialized)
        return (
            <Container>
                <AppHeader />
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
                <AppHeader />
                <AccountHeader isSave = {true} headerName = {eSavingsName}/>
            </div>
        );
    }else if(accountProgress == 2){ // (2=E savings goal has been reached) 
        return (
            <div>
                <AppHeader />
                <AccountHeader isSave = {true} headerName = {eSavingsName}/>
                <AccountNode isSave = {isSave1} nodeName = {nodeName1}/>
                <AccountNode isSave = {isSave2} nodeName = {nodeName2}/>
            </div>
        );
    };
  
    return (
    <AppHeader />
  );
}

export default AccountsPage;