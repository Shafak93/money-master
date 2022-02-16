document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeInputAmount = parseInt(incomeInput.value);

    const foodInput = document.getElementById('food-input');
    const foodInputAmount = parseInt(foodInput.value);
    

    const rentInput = document.getElementById('rent-input');
    const rentInptAmount = parseInt(rentInput.value);
    

    const clothInput = document.getElementById('cloth-input');
    const clothInputAmount = parseInt(clothInput.value);
    
    const totalExpenses = document.getElementById('total-expenses');
    
    totalExpenses.innerText = foodInputAmount + foodInputAmount + rentInptAmount;
    const totalExpensesAmount = totalExpenses.innerText;

    const restBalance = document.getElementById('rest-balance');
    restBalance.innerText = incomeInputAmount - totalExpensesAmount
})