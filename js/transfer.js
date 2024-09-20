document.getElementById("transfer-money-btn").addEventListener('click', function(event){
    event.preventDefault();

    const transferMoney = getInputFieldValueById("transfer-money-input");
    const pinNumber = getInputFieldValueById("transfer-money-pin");

    if(pinNumber === 2745){
        const accountBalance = getTextFieldValueById("account-balance");

        const newBalance = accountBalance - transferMoney;
        
        document.getElementById('account-balance').innerText = newBalance;

        // Add to transection
        const transactionHistory = document.getElementById('transaction-container');
        const p = document.createElement('p');
        p.innerText = `Transfer money ${transferMoney}. New balance ${newBalance}`;
        transactionHistory.appendChild(p)
    }
    else{
        alert('Failed to transfer money.')
    }
});