//default: Emergency savings account header
//When inside a non-emergency savings account or wishlist node: Displays that nodes information
//Also displays progress bar

import "../components/accountHeader.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

//UNIVERSAL
let current = 121.30 //current amount in account
let lastDeposit = "10/15/2026"
let lastDepositAmount = 20
let isSaveOrWish = "save" //save = savings, wish = wishlist

//SAVINGS
let goal = 1000
let remaining = goal - current

//WISHLIST
let numItems = 12 //number of items in the wishlist


function AccountHeader({isSave,headerName}){
    return(
        <Container>
            <Row className="bg-light p-3">
                <Col className="bg-light p-3"md={2}>
                    <h2>PROGRESS</h2>
                    <h4> ${goal} </h4>
                </Col>
                <Col md={2} className="bg-light p-3">
                    <h4>{headerName}</h4>
                </Col>

                <Col md={7} className="bg-light p-3">
                    {isSave ? 
                <div>Goal: ${goal} Current: ${current} Remaining: ${remaining} Last Deposit: {lastDeposit} Last Deposit Amount: ${lastDepositAmount}</div> : 
                
                <div>Current: ${current} Number of items: {numItems} Last Deposit: {lastDeposit} Last Deposit Amount: ${lastDepositAmount}</div>}
                </Col>
            </Row>
            
            <Row>
            </Row>
            <Row>
                <Col md={2} className="justify-content-center bg-light p-3">
                    <h3><ProgressBar now={(current/goal)*100} style={{ transform: 'rotate(270deg)', width: '200px',height: '20px' }} /></h3>
                    <h4>${current}</h4>
                </Col>
            </Row>
        </Container>
        
    );
}

export default AccountHeader;