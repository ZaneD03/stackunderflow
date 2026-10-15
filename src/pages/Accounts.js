//REQUIRED FOR PROTOTYPE

//Emergency saving account (required)
    //After user reaches user defined goal,
    // user will be prompted whether to update goal to higher number
//Savings accounts, wishlists 
    // (unlocked after initial user defined goal for emergency savings is achieved)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AppHeader from '../components/header';
import AccountHeader from '../components/accountHeader';

//Temp values for prototype
let accountProgress = 1 //How far a users account has progressed 
let isSave = false;

function AccountsPage() {
    if(accountProgress == 0){ //(0=no E savings initialized)
        return (
            <div>
                <AppHeader />
                <header>
                NO ACCOUNTS TO VIEW
                </header>
                <header>
                Go to Budget to initialize setup {/*TODO Create a link from here to Budget Page*/}
                </header>
            </div>
        );
    }else if(accountProgress == 1){ // (1=E savings but goal has not been reached) 
        return (
            <div>
                <AppHeader />
                <AccountHeader isSave = {isSave}/>
            </div>
        );
    }else if(accountProgress == 2){ // (2=E savings goal has been reached) 
        return (
            <div>
                <AppHeader />
                <header>
                E SAVINGS TO  VIEW, GOAL HAS BEEN REACHED
                </header>
            </div>
        );
    };
  
    return (
    <AppHeader />
  );
}

export default AccountsPage;

/* 
if(agfjkbfj){
        no accounts to view
    }
    elif(asjbgo){
        emergency savings (not allowed to have wishlists/extra savings)
    }
    elif(agiubaf){
        emergency savings with option to add additional savins or wishlists
        FormCheck(for existing additional savings or wishlists ); //populates page
    }
*/
