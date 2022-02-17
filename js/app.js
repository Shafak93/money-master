/* function getInputValue(inputid){
    const input = document.getElementById(inputid);
    const inputAmount = parseInt(input.value);

    const totalExpenses = document.getElementById('total-expenses');
    if(isNaN(inputAmount)== -1){
        return inputAmount
    }else{
        alert('Please enter amount in number')
    }
    
} */

document.getElementById('calculate-btn').addEventListener('click', function(){
    //Income Amount
    // const incomeInputAmount = getInputValue('income-input');
   //debugger
    const incomeInput = document.getElementById('income-input');
    const incomeInputAmount = parseFloat(incomeInput.value);
    /* if(typeof(incomeInputAmount) != 'number'){
        alert('Please enter a number on th income field')
    } */
    
    
    //Food Amount
    //const foodInputAmount = getInputValue('food-input');
    const foodInput = document.getElementById('food-input');
    const foodInputAmount = parseFloat(foodInput.value);

    

    //Rent amount
    // const rentInputAmount = getInputValue('rent-input');
    const rentInput = document.getElementById('rent-input');
    const rentInputAmount = parseFloat(rentInput.value);

   
    //Cloth Amount
    //const clothInputAmount = getInputValue('cloth-input');
    const clothInput = document.getElementById('cloth-input');
    const clothInputAmount = parseFloat(clothInput.value);
    
   
    //Total Expenses
    const totalExpenses = document.getElementById('total-expenses');
    
    totalExpenses.innerText = foodInputAmount + rentInputAmount + clothInputAmount;
    const totalExpensesAmount = totalExpenses.innerText;

    //Rest Balance
    const restBalance = document.getElementById('rest-balance');
    restBalance.innerText = incomeInputAmount - totalExpensesAmount
})

document.getElementById('save-btn').addEventListener('click', function(){
    //Income amount
    const incomeInput = document.getElementById('income-input');
    const incomeInputAmount = parseFloat(incomeInput.value);
    incomeInput.value = ''

    //Food Amount
    //const foodInputAmount = getInputValue('food-input');
    const foodInput = document.getElementById('food-input');
    const foodInputAmount = parseFloat(foodInput.value);
    foodInput.value= ''

    //Rent amount
    // const rentInputAmount = getInputValue('rent-input');
    const rentInput = document.getElementById('rent-input');
    const rentInputAmount = parseFloat(rentInput.value);

    rentInput.value = ''

    //Cloth Amount
    //const clothInputAmount = getInputValue('cloth-input');
    const clothInput = document.getElementById('cloth-input');
    const clothInputAmount = parseFloat(clothInput.value);

    clothInput.value = ''

    //total expense
    const totalExpenses = foodInputAmount + rentInputAmount + clothInputAmount;

    //Rest balance
    const restBalance = incomeInputAmount - totalExpenses
    //Save Amount
    const saveInput = document.getElementById('save-input');
    const saveInputValue = parseFloat(saveInput.value);
    //console.log(saveInputValue)

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = (saveInputValue / 100) * incomeInputAmount
    console.log(savingAmount.innerText)
    const savingAmountValue = savingAmount.innerText

    //Remaining Balance
    const remainingBalance = document.getElementById('balance-remaining');
    remainingBalance.innerText =  restBalance - savingAmountValue

})