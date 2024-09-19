// Functions

// Get input value function
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

// Get text value function
function getTextFieldValueById(id){
    const accountBalance = document.getElementById(id).innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    return accountBalanceNumber;
}

// Traversing all pages function
function showPagesById(id){
    document.getElementById("add-money-form").classList.add('hidden');
    document.getElementById("cash-out-form").classList.add('hidden');
    document.getElementById("transaction-section").classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}