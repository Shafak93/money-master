function getInputValue(inputid){
    debugger
    const inputField = document.getElementById(inputid);
    var inputAmount = parseFloat(inputField.value);
    // if(!isNaN(inputField.value) && inputField.value > 0){
       
    //      document.getElementById('notify-fail').style.display = 'none'
    // }
    // else{
    //     document.getElementById('notify-fail').style.display = 'block'
    //     //alert('Enter a positive number');
    // }
    return inputAmount;
    
}

function inputValidation(functionParameter, idParameter){
    if(!isNaN(functionParameter) && functionParameter > 0){
        document.getElementById(idParameter).style.display = 'none';
        //expense alert
        document.getElementById('expense-alert').style.display = 'none';
        document.getElementById('total-expenses').style.display = 'block';
    }else{
        document.getElementById(idParameter).style.display = 'block'
    }
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    //Income Amount
    const incomeInputAmount = getInputValue('income-input');
    inputValidation(incomeInputAmount,'income-fail');
    /* if(!isNaN(incomeInputAmount) && incomeInputAmount > 0){
        document.getElementById('income-fail').style.display = 'none'
    }else{
        document.getElementById('income-fail').style.display = 'block'
    } */
    //Food Amount
    const foodInputAmount = getInputValue('food-input');
    inputValidation(foodInputAmount,'food-fail');
    /* if(!isNaN(foodInputAmount) && foodInputAmount > 0){
        document.getElementById('food-fail').style.display = 'none'
    }else{
        document.getElementById('food-fail').style.display = 'block'
    } */
    //Rent amount
    const rentInputAmount = getInputValue('rent-input');
    inputValidation(rentInputAmount,'rent-fail');
    /* if(!isNaN(rentInputAmount) && rentInputAmount > 0){
        document.getElementById('rent-fail').style.display = 'none'
    }else{
        document.getElementById('rent-fail').style.display = 'block'
    } */
    //Cloth Amount
    const clothInputAmount = getInputValue('cloth-input');
    inputValidation(clothInputAmount,'cloth-fail');
    /* if(!isNaN(clothInputAmount) && clothInputAmount > 0){
        document.getElementById('cloth-fail').style.display = 'none'
    }else{
        document.getElementById('cloth-fail').style.display = 'block'
    } */
    //Total Expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesNumber = foodInputAmount + rentInputAmount + clothInputAmount;
    //Total expenses error validation
    if(incomeInputAmount> totalExpensesNumber){
        totalExpenses.innerText = totalExpensesNumber;
    }else{
        
        // totalExpenses.innerText =
        document.getElementById('expense-alert').style.display = 'block';
        document.getElementById('total-expenses').style.display = 'none';

        //alert('You do not have sufficient balance to expense.')
    }
    const totalExpensesAmount = totalExpenses.innerText;
    //Rest Balance
    const restBalance = document.getElementById('rest-balance');
    restBalance.innerText = incomeInputAmount - totalExpensesAmount
})

document.getElementById('save-btn').addEventListener('click', function(){
    //Income amount
    const incomeInputAmount = getInputValue('income-input');
    //Food Amount
    const foodInputAmount = getInputValue('food-input');
    //Rent amount
    const rentInputAmount = getInputValue('rent-input');
    //Cloth Amount
    const clothInputAmount = getInputValue('cloth-input');
    //total expense
    const totalExpenses = foodInputAmount + rentInputAmount + clothInputAmount;
    //Rest balance
    const restBalance = incomeInputAmount - totalExpenses
    //Get Save Input Value
    const saveInput = document.getElementById('save-input');
    const saveInputValue = parseFloat(saveInput.value);
    //Get Save Input Amount and error validation
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountNumber = (saveInputValue / 100) * incomeInputAmount
    if(restBalance > savingAmountNumber){
        savingAmount.innerText = savingAmountNumber
        document.getElementById('saving-amount').style.display = 'block';
        document.getElementById('save-alert').style.display = 'none';
    }else{
        document.getElementById('save-alert').style.display = 'block';
        document.getElementById('saving-amount').style.display = 'none';
        //alert('You do not have sufficient balance to save')
    }

    const savingAmountValue = savingAmount.innerText
    //Remaining Balance
    const remainingBalance = document.getElementById('balance-remaining');
    remainingBalance.innerText =  restBalance - savingAmountValue

})