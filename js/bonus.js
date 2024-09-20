document
  .getElementById("bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const couponCode = getInputFieldValueById("coupon-code-input");
    const pinNumber = getInputFieldValueById("bonus-pin");

    if (couponCode === 1819 && pinNumber === 2745) {
      const accountBalance = getTextFieldValueById("account-balance");

      const newBalance = accountBalance + 100;

      document.getElementById("account-balance").innerText = newBalance;

      // Add to transaction
      const transactionHistory = document.getElementById(
        "transaction-container"
      );
      const p = document.createElement("p");
      p.innerText = `You get bonus ${100}. New balance ${newBalance}`;
      transactionHistory.appendChild(p);
    } else {
      alert("Wrong coupon or pin");
    }
  });
