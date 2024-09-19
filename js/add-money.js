// Without using function
// document.getElementById("add-money-btn").addEventListener('click', function(event){
    
//     event.preventDefault();

//     const addMoneyInput = document.getElementById("add-money-input").value;
//     const addMoneyInputNumber = parseFloat(addMoneyInput);
//     const addMoneyPin = document.getElementById("add-money-pin").value;

//     if(addMoneyPin === '2745'){
//         const accountBalance = document.getElementById("account-balance").innerText;
//         const accountBalanceNumber = parseFloat(accountBalance);

//         const newBalance = accountBalanceNumber + addMoneyInputNumber;
//         document.getElementById("account-balance").innerText = newBalance;
//     }
//     else{
//         alert('Failed to added money.')
//     }
// });


// With using function
document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById("add-money-input");
    const pinNumber = getInputFieldValueById("add-money-pin");

    if(isNaN(addMoney)){
        alert('Invalid Amount');
        return;
    }
    
    if(pinNumber === 2745){
        const accountBalance = getTextFieldValueById("account-balance");
        
        const newBalance = accountBalance + addMoney;
        document.getElementById("account-balance").innerText = newBalance;

        // Add to transactios history
        const transactionHistory = document.getElementById('transaction-container');
        
        const p = document.createElement('p');
        p.innerText = `Added ${addMoney} taka. New balance ${newBalance}`;
        transactionHistory.appendChild(p);
    }else{
        alert('Failed to added money!')
    }
});