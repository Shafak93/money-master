function getInputValue(inputid){
    const incomeInput = document.getElementById(inputid);
    const incomeInputAmount = parseInt(incomeInput.value);
    return incomeInputAmount
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeInputAmount = getInputValue('income-input');
    /* const incomeInput = document.getElementById('income-input');
    const incomeInputAmount = parseInt(incomeInput.value); */
    const foodInputAmount = getInputValue('food-input');
    /* const foodInput = document.getElementById('food-input');
    const foodInputAmount = parseInt(foodInput.value); */
    const rentInputAmount = getInputValue('rent-input');
    /* const rentInput = document.getElementById('rent-input');
    const rentInptAmount = parseInt(rentInput.value); */
    const clothInputAmount = getInputValue('cloth-input');
    /* const clothInput = document.getElementById('cloth-input');
    const clothInputAmount = parseInt(clothInput.value); */
    
    const totalExpenses = document.getElementById('total-expenses');
    
    totalExpenses.innerText = foodInputAmount + rentInputAmount + clothInputAmount;
    const totalExpensesAmount = totalExpenses.innerText;

    const restBalance = document.getElementById('rest-balance');
    restBalance.innerText = incomeInputAmount - totalExpensesAmount
})