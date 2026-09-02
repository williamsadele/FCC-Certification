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
    renderlist()
    textInput.value = "";
    amountInput.value = "";
}
form.addEventListener("submit", addTransaction)

const renderlist = () => {
    let history = ""
    for(let i=0; i<transactions.length; i++) {
        const sign = transactions[i].amount < 0 ? "-" : "+";
        const itemClass = transactions[i].amount < 0 ? "minus" : "plus"
        history += `
        <li class="${itemClass}">
        ${transactions[i].text}
        <span>${sign}$${Math.abs(transactions[i].amount)}</span>
        </li>
        `
    }
    list.innerHTML = history
}