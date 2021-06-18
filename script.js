//create starting values
let monthlyIncome = 0; //numerical value
let expenses = []; //array of objects
let expenseTotal = 0; //numerical value
let balance = 0; //numerical value

//create references to form elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget");
let nameInput = document.getElementById("name_input")
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");
let expenseList = document.getElementById("expense_list");
let totalExpenses = document.getElementById("total_expenses");
let remainingBalance = document.getElementById("remaining_balance");

//write a function that takes input from
//monthly budget and displays in app

function updateBudget(event) {
    console.log("update budget fired");
    event.preventDefault();
    //store user input into monthlyIncome
    monthlyIncome = parseInt(incomeInput.value);
    //display value in the app
    monthlyBudget.innerText = "$" + monthlyIncome;
    
    updateBalance();
}

//add updateBudget to button as onclick handler
updateBudgetButton.onclick = updateBudget;

//build a function that compares the monthly budget
//and the total of the expenses, then shows the difference
//in the app
function updateBalance() {
    console.log("updateBalance fired");
    let balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    //change color of rem bal text based on value
    if (balance < 0) {
        remainingBalance.classList.remove("green");
        remainingBalance.classList.add("red");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

//add expense object to expenses array
//based on user input
//add expense to app interface
function addExpense (event) {
    console.log("addExpense fired");
    event.preventDefault();
    //build expense object
    let expense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value)
    }
    expenses.push(expense);
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    updateExpenseTotal();
}

//adds above function as onclick handler to add expense button 
addExpenseButton.onclick = addExpense;

// write function that will loop through the expenses
//and re-calculate the total balance then display in app
function updateExpenseTotal() {
    //reset total expenses
    expenseTotal = 0;
    //loop through expenses and recalculate
    for (let i=0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    //update the total expenses shown in app
    totalExpenses.innerText = "$" + expenseTotal;
    updateBalance();
}
