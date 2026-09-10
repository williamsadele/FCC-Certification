const budgetBalance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const form = document.getElementById("form");

let transactions = [];

const addTransaction = (event) => {
    event.preventDefault();
    if(textInput.value.trim() === "" || amountInput.value.trim() === ""){
        alert("Please enter a description and an amount.")
        return;
    } 
    let transaction = {
        id: Date.now(),
        text: textInput.value.trim(),
        amount: Number(amountInput.value.trim())
    };
    transactions.push(transaction)
    render(transactions, list)
    updateTotals()
    textInput.value = "";
    amountInput.value = "";
}
form.addEventListener("submit", addTransaction)

const render = (array, hist) => {
    let history = ""
    for(let i=0; i<array.length; i++) {
        const sign = array[i].amount < 0 ? "-" : "+";
        const itemClass = array[i].amount < 0 ? "minus" : "plus"
        history += `
        <li class="${itemClass}">
        ${array[i].text}
        <span>${sign}$${Math.abs(array[i].amount)}</span>
        </li>
        `
    }
    hist.innerHTML = history
}
const updateTotals = () => {
    const income = transactions
        .filter(item => item.amount > 0)
        .reduce((acc, item) => acc + item.amount, 0)

    const expense = transactions
        .filter(item => item.amount < 0)
        .reduce((acc, item) => acc + item.amount, 0)

    const total = transactions.reduce((acc, item) => acc + item.amount, 0)

    budgetBalance.textContent = `$${total.toFixed(2)}`
    moneyPlus.textContent = `+$${income.toFixed(2)}`
    moneyMinus.textContent = `-$${Math.abs(expense).toFixed(2)}`
}