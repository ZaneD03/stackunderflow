//Boxes that contain and display some information on non-emergency savings accounts or wishlists
//Can be clicked on to go into that specific account

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//UNIVERSAL
//let nodeName = "Garage Wishlist" //name of account being displayed in node
let current = 35.00 //current amount of money allocated to the account displayed in the node

//SAVINGS
let goal = 300 //goal of the savings account

//WISHLISTS
let numItems = 5; //number of items in the wishlist

function AccountNode({isSave,nodeName}){
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{nodeName}</Card.Title>
        <Card.Text>
          {isSave ? 
                <div>Goal: ${goal} Current: ${current}</div> : 
                
                <div>Current: ${current} Number of items: {numItems}</div>}
        </Card.Text>
        <Button variant="primary">Open for more details</Button>
      </Card.Body>
    </Card>
  );
}

export default AccountNode;