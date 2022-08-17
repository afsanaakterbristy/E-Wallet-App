//using function


document.getElementById('btn-deposit').addEventListener('click', function () {
    const newdeposit = getInputValueById('deposit-field');
    const previousDeposit = getElementValueById('deposit-total');

     if (isNaN(newdeposit)) {
        alert('please enter a valid amount');
        return;
     } else if(newdeposit<=0) {
         alert('please enter a valid amount');
        return;
    }
    
    const newDepositTotal = newdeposit + previousDeposit;
    setTextElementValueById('deposit-total', newDepositTotal)
    
    const balanceTotal = getElementValueById('balance-total');
    const newBalance = newdeposit + balanceTotal;
    setTextElementValueById('balance-total', newBalance)
    

});


// without using function

/** 
 document.getElementById('btn-deposit').addEventListener('click', function () { 
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
        depositField.value = '';
    if (isNaN(newdepositAmount)) {
        alert('please enter a number');
        return;
    }
  
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentdepositTotal = newdepositAmount + previousDepositTotal;

    
    depositTotalElement.innerText = currentdepositTotal;
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);
     
    const currentBalanceTotal = previousbalanceTotal + newdepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

});
 
 */