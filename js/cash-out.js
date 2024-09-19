document.getElementById("cash-out-btn").addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById("cash-out-input");
    const pinNumber = getInputFieldValueById("cash-out-pin");

    if(isNaN(cashOut)){
        alert('Invalid amount')
        return;
    }

    if(pinNumber === 2745){
        const accountBalance = getTextFieldValueById("account-balance");

        if(cashOut > accountBalance){
            alert('You do have a sufficient balance.');
            return;
        }

        const newBalance = accountBalance - cashOut;
        
        document.getElementById('account-balance').innerText = newBalance;

        // Add to transaction
        const transactionHistory = document.getElementById('transaction-container');

        const div = document.createElement('div');
        div.style.backgroundColor = 'bg-red-300';
        div.style.padding = '12px';
        div.innerHTML = `
            <h4 class="font-bold">Cash Out</h4>
            <p>Withdraw ${cashOut} TK. New Balance ${newBalance} TK.</p>
        `
        transactionHistory.appendChild(div);
    }else{
        alert('Failed to cash out. Please try again later!')
    }
});