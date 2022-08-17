//using function

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newwithdraw = getInputValueById('withdraw-field');
    const previouswithdraw = getElementValueById('withdraw-total');
     if (isNaN(newwithdraw)) {
         alert('please enter a valid amount');
        return;
     } else if(newwithdraw<=0) {
         alert('please enter a valid amount');
        return;
    }
   
    const newwithdrawTotal = newwithdraw + previouswithdraw;
    const balanceTotal = getElementValueById('balance-total');


     if(newwithdraw > balanceTotal){
        alert('You have not enough mony!');
        return;
    }
    setTextElementValueById('withdraw-total', newwithdrawTotal);
    const newBalance = balanceTotal - newwithdraw;
     
    setTextElementValueById('balance-total', newBalance);
    
    

});


// without using function

/**
 document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('please enter a number');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);
   

    const balanceTotalElement = document.getElementById('balance-total');
    
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);
     
    if (newWithdrawAmount > previousbalanceTotal) {
        alert('you Have not this money');
        return;
    }
     const currentwithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentwithdrawTotal;
   
    const currentBalanceTotal = previousbalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

});
 
 */