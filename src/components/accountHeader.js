//default: Emergency savings account header
//When inside a non-emergency savings account or wishlist node: Displays that nodes information
//Also displays progress bar

import "../components/accountHeader.css";

//UNIVERSAL
let headerName = "Your Emergency Savings Account" //title
let current = 121.30 //current amount in account
let lastDeposit = "10/15/2026"
let lastDepositAmount = 20
let isSaveOrWish = "save" //save = savings, wish = wishlist

//SAVINGS
let goal = 1000
let remaining = goal - current

//WISHLIST
let numItems = 12 //number of items in the wishlist


function AccountHeader({isSave}){
    return(
        <div>
        <div class="layout">
            <div class="left"><header>PROGRESS</header><div>${current}/${goal}</div></div>
            <div class="right">
                <header>{headerName} </header>
                {isSave ? 
                <div>Goal: ${goal} Current: ${current} Remaining: ${remaining} Last Deposit: {lastDeposit} Last Deposit Amount: ${lastDepositAmount}</div> : 
                
                <div>Current: ${current} Number of items: {numItems} Last Deposit: {lastDeposit} Last Deposit Amount: ${lastDepositAmount}</div>}
            </div>
        </div>
        </div>
    );
}

export default AccountHeader;